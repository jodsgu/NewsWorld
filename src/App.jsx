import NavBar from "./Components/NavBar"
import News from "./Components/News"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  const envVariable = import.meta.env;
  const apiKey = envVariable.VITE_REACT_APP_API_Key
  
  return (
    <>
      

    <Router>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<News apiKey = {apiKey}   key="general" pageSize={ 6 } category="general"/>} > </Route>
        <Route exact path='/business' element={<News apiKey = {apiKey}  key='business' pageSize={ 6 }  category='business'/>}></Route>
        <Route exact path='/entertainment' element={<News apiKey = {apiKey}  key='entertainment' pageSize={ 6 } category='entertainment'/>}></Route>
        <Route exact path='/general' element={<News apiKey = {apiKey}  key='general' pageSize={ 6 } category='general'/>}></Route>
        <Route exact path='/health' element={<News apiKey = {apiKey}  key='health' pageSize={ 6 } category='health'/>}></Route>
        <Route exact path='/science' element={<News apiKey = {apiKey}  key='science' pageSize={ 6 } category='science'/>}></Route>
        <Route exact path='/sports' element={<News apiKey = {apiKey}  key='sports' pageSize={ 6 } category='sports'/>}></Route>
        <Route exact path='/technology' element={<News apiKey = {apiKey}  key='technology' pageSize={ 6 } category='technology'/>}></Route>
       
      </Routes>


    </Router>


      
    </>
  )
}

export default App
