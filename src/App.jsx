import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingtime,setReadingtime]=useState(0);
  
  const handleAddBookmark= blog=>{
    //console.log('Adding bookmark')
   // console.log(blog)
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks)
  }

  const handleAddReadingtime=time=>{
    
    const newreadingtime=readingtime+time;
    setReadingtime(newreadingtime)
    //newreadingtime <= 100?setReadingtime(newreadingtime):alert('no');
    
  }

  return (
    <>
     
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddBookmark={handleAddBookmark} handleAddReadingtime={handleAddReadingtime}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
    </div>
     
    </>
  )
}

export default App
