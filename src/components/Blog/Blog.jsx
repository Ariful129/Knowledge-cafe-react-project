import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddBookmark,handleAddReadingtime}) => {
    //console.log(blog)
    const {cover_title,cover,author_name,author_img,
        reading_time,posted_date,Hashtag}=blog;
    return (
        <div className="mb-20">
            <img className="w-full mb-4" src={cover} alt="" />
            <div className="flex justify-between">
              <div className="flex mb-4">
                  <img className="w-14 rounded-full" src={author_img} alt=""/>
                  <div className="ml-6">
                       <h3 className="text-2xl">{author_name}</h3>
                       <p>{posted_date}</p>
                  </div>
              </div>
              <div>
                  <span className="mr-2">{reading_time} min_read</span>
                  <button onClick={()=>handleAddBookmark(blog)}
                  ><FaBookmark /></button>
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">{cover_title}</h1>
            <p>
                {
                  Hashtag.map((hash,idx)=><span key={idx}><a href="" className="text-red-700">#{hash}</a> </span>)
                }
            </p>
            <button className='mt-4 border-2' onClick={()=>handleAddReadingtime(reading_time)}>add-time</button>
        </div>
    );
};

export default Blog;
