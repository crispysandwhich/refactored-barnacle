import {useState, useEffect} from 'react'
import { useGetAllQuery } from '../../redux/blogApiSlice.js'
import { Link } from 'react-router-dom'
import {format} from 'timeago.js'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'
import {FiArrowRight} from 'react-icons/fi'
import classes from './categoires.module.css'

export default function Categories() {

  const [blogz, setBlogz] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [activeCategory, setActiveCategory] = useState('')

  const categories = [
    'all',
    'crypto',
    'coding',
    'programming',
    'fun',
    'hacking',
    'modding'
  ]

  // Querying data using redux.....
  const {data: blogss , isFetching, isSuccess} = useGetAllQuery()


  
  useEffect(() => {
    if(isSuccess) {
      setBlogz(blogss)
      setFilteredBlogs(blogss)
    }
  },[isFetching, isSuccess, blogss])
  
  useEffect(() => {

    if(activeCategory === 'all'){
      setFilteredBlogs(blogz)
    } else {
      setFilteredBlogs((prev) => {
        const filteredBlogs = blogz.filter((blog) => blog.category.toLowerCase() === activeCategory.toLowerCase())
        return filteredBlogs
      })
    }

  },[activeCategory, blogz])


  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h3>Select a category</h3>
          <div className={classes.categories}>
            {
              categories.map((category) => (
                <span key={crypto.randomUUID()} className={`${classes.category} ${activeCategory === category && classes.active}`} onClick={() => setActiveCategory(prev => category)}>{category}</span>
              ))
            }
          </div>
        
          {filteredBlogs?.length > 0 ? (<>
            <div className={classes.blogs}>
              {filteredBlogs?.map((blog) => (
                <div key={blog._id} className={classes.blog}>
                  <Link to={`/blogDetails/${blog._id}`}>
                    <img src={`http://127.0.0.1:5000/images/${blog.photo}`} alt={blog.summary}/>
                  </Link>
                  <div className={classes.blogData}>
                    <div className={classes.categoryAndMetadata}>
                      <span className={classes.category}>{blog.category}</span>
                      <div className={classes.metadata}>
                        <MdOutlinePreview /> {blog.views} views
                      </div>
                      <div className={classes.metadata}>
                        <AiFillLike /> {blog.likes.length} likes
                      </div>
                    </div>
                    <h4>{blog.title}</h4>
                    <p className={classes.blogSummary}>{blog.summary}</p>
                    <div className={classes.authorAndCreatedAt}>
                      <span><span>Author</span> {blog.userId.username}</span>
                      <span><span>Created</span> {format(blog.createdAt)}</span>
                    </div>
                    <Link to={`/blogDetails/${blog._id}`} className={classes.readMore}>Read More <FiArrowRight /></Link>
                  </div>
                </div>
              ))}
            </div>
          </>) : <h3 className={classes.noBlogMessage}>No Blogs</h3>}
        </div>
      </div>
    </>
  )
}
