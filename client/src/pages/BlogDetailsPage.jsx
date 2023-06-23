import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { format } from 'timeago.js'
import { useGetSingleQuery } from '../redux/slices/blogApiSlice.js'
import { AiFillEdit, AiFillLike } from 'react-icons/ai'

export default function BlogDetailsPage() {

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
    <div id='BlogDetailPage'>
        <img src={`http://127.0.0.1:5000/images/${blogDetails?.photo}`} alt="content of blog" />
        
        <div className='titleAndControls'>
          <h3 className='title'>{blogDetails.title}</h3>
          {
            blogDetails?.userId?._id === userId?._id ? (
              <div>
                <div className='controls'>
                  <Link to={`/updateBlog/${blogDetails._id}`} className='edit'>
                    <AiFillEdit />
                  </Link>
                  {/* Delete option */}
                </div>
              </div>
            ): (
              <div className='like'>
                <AiFillLike />
              </div>
            ) 
          }
        </div>

        <div className='content'>
          
          <p className='blogSummary'>
            {blogDetails.summary}
          </p>

          <div className='likesAndViews'>
            <span>
              {blogDetails.views} views
            </span>
            <span>
              {blogDetails?.likes?.length} likes
            </span>
          </div>

          <div className='authorAndDate'>
            <span><span>Author</span> {blogDetails?.userId?.username}</span>
            <span><span>Created</span> {format(blogDetails.createdAt)}</span>
          </div>

        </div>
    </div>
  )
}
