import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingtime}) => {
    
    console.log(readingtime)
    return (
        <div className="md:1/3 bg-gray-400 ml-6 rounded-2xl mt-2 pt-4">
            <h1 className="md:text-2xl text-center font-bold p-2">Reading Time: {readingtime} </h1>
            <h1 className="md:text-2xl text-center font-bold p-4">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(x => <Bookmark key={x.ID} bookmark={x}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;