import React from 'react'

const NewsItem = (props) => {
  const {title,description,urlToImage,publishedAt,author,url,source} = props;
  return (
    <>

      <div className="card">
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
            {source}

          </span>
        <img src={urlToImage ?urlToImage : 'https://www.hindustantimes.com/ht-img/img/2023/03/26/1600x900/Collage_Maker-26-Mar-2023-09-01-PM-1962_1679844818587_1679844825048_1679844825048.jpg'} className="card-img-top" alt="#" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small>By author {author ? author:"Unknown"} on {new Date(publishedAt).toGMTString()}  </small></p>
            <a href={url} target='_blank' className="btn btn-sm btn-primary ">Read More...</a>
          </div>
      </div>


    </>
  )
}

export default NewsItem
