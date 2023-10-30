import './App.css'
import Blogs from './componens/Blogs/Blogs'
import Bookmarks from './componens/Bookmarks/Bookmarks'
import Header from './componens/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
