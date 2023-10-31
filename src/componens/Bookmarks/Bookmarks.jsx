/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3 ml-5 bg-gray-100">
            <h3 className="text-xl text-center bg-slate-200 mb-5 p-5">Reading Time: {readingTime}</h3>
            <div className=" pt-5">
                <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;