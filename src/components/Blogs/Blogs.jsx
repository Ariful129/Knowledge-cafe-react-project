import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmark,handleAddReadingtime}) => {
const [blogs,setBlogs]=useState([]);

useEffect(()=>{
     fetch('blog.json')
     .then(res =>res.json())
     .then(data=>setBlogs(data))
},[])

    return (
        <div className="md:w-2/3 mt-2 p-2">
            {
                blogs.map(x=><Blog 
                    key={x.id} 
                    handleAddBookmark={handleAddBookmark}
                    handleAddReadingtime={handleAddReadingtime}
                    blog={x} ></Blog>)
            }
        </div>
    );
};

export default Blogs;