import { useState } from 'react'
import './App.css'
import Blogs from './componens/Blogs/Blogs'
import Bookmarks from './componens/Bookmarks/Bookmarks'
import Header from './componens/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const remainingBookmarks = [...bookmarks, blog];
    setBookmarks(remainingBookmarks);
  }

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);
    // remove the read blog from bookmark 
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
