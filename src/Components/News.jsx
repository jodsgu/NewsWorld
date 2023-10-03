import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import '../Styles/newsStyles.css'
import axios from 'axios'
import Loader from './Loader'
import InfiniteScroll from 'react-infinite-scroll-component'
const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const fetchData = async (pageNumber) => {
    try {

      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${pageNumber}&pageSize=${props.pageSize}`);
      if (res.data.status) {
        if (pageNumber === 1) {
          // If it's the first page, set articles directly
          setArticles(res.data.articles);
        } else {
          //console.log(">>>>>>>>>>",totalResults)
          // If it's not the first page, concatenate articles
          setArticles((prevArticles) => prevArticles.concat(res.data.articles));
          if(props.pageSize * page <= totalResults){
            setLoader(false)
          }else{
            setLoader(false)
          }
        }


       
        setLoader(false)
        setTotalResults(res.data.totalResults)
      }
    } catch (error) {
      console.log(error)
      setLoader(false)
    }



  }


  const fetchMoreData = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]); // Fetch data whenever page changes



  return (
    <>
      
        <h3 className='heading'>News World - Top Headlines</h3>
        {loader && <Loader />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}

          hasMore={articles.length !== totalResults}
          loader={<Loader />}

        >
          <div className="container">
          <div className="row">
            {
              articles && articles.map((element,index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsItem title={element.title ? element.title.slice(0, 40) : ""}
                      description={element.description ? element.description.slice(0, 40) : ""} urlToImage={element.urlToImage}
                      publishedAt={element.publishedAt} author={element.author} url={element.url} source={element.source.name} />
                  </div>
                )


              })
            }






          </div>
          </div>
        </InfiniteScroll>


     


    </>
  )
}

export default News
