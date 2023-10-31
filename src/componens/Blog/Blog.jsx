import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa'; 

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='space-y-4 mb-4'>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center my-3'>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-400 text-xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl mb-3">{title}</h2>
            <p className='mb-3'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time, id)} className='text-blue-500 underline font-bold'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func, 
    handleMarkAsRead: PropTypes.func
}

export default Blog;