import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetSingleQuery } from '../../redux/blogApiSlice.js'
import { format } from 'timeago.js'
import { AiFillEdit, AiFillLike } from 'react-icons/ai'

import classes from './blogpage.module.css'

export default function BlogPage() {
  const [blogDetails, setBlogDetails] = useState("")
  const { id } = useParams()

  const { userId } = useSelector((state) => state.auth)

  const {data: blog, isFetching, isSuccess} = useGetSingleQuery(id); 

  useEffect(() => {
    if (isSuccess) {
      setBlogDetails(blog)
    }
  },[isFetching, blog, isSuccess
  ])


  return (
    <div className={classes.container}>

      <div className={classes.wrapper}>

        <img src={`http://127.0.0.1:5000/images/${blogDetails?.photo}`} alt="content of blog" />
        
        <div className={classes.titleAndControls}>
          <h3 className={classes.title}>{blogDetails.title}</h3>
          {
            blogDetails?.userId?._id === userId?._id ? (
              <div>
                <div className={classes.controls}>
                  <Link to={`/updateBlog/${blogDetails._id}`} className={classes.edit}>
                    <AiFillEdit />
                  </Link>
                  {/* Delete option */}
                </div>
              </div>
            ): (
              <div className={classes.like}>
                <AiFillLike />
              </div>
            ) 
          }
        </div>

        <div className={classes.content}>
          
          <p className={classes.blogSummary}>
            {blogDetails.summary}
          </p>

          <div className={classes.likesAndViews}>
            <span>
              {blogDetails.views} views
            </span>
            <span>
              {blogDetails?.likes?.length} likes
            </span>
          </div>

          <div className={classes.authorAndDate}>
            <span><span>Author</span> {blogDetails?.userId?.username}</span>
            <span><span>Created</span> {format(blogDetails.createdAt)}</span>
          </div>

        </div>
      </div>
    </div>
  )
}
