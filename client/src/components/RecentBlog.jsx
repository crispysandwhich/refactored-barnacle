import {AiFillLike} from 'react-icons/ai'
import {MdOutlinePreview} from 'react-icons/md'

import '../styles/RecentBlog.css'

export default function RecentBlog() {
  return (
    <div id="RecentBlogs">

      <h2>Recent Blog</h2>

      <div id="recentBlog">

        <div className="blogImgContainer">
          <img src="https://images.unsplash.com/photo-1685391488938-b1c7b19cfe0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1144&q=80" alt="title of blog" />
        </div>

        <div className="blogContents">
          <h3>How to get started with crypto</h3>
          <div className="authorCreated">
            <span>Author: <span>deGentlem4n</span></span>
            <span>Created: <span>6/9/2023</span></span>
          </div>
          <p>
          <span>Summary: </span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sit hic excepturi enim. Nobis eveniet, cumque mollitia praesentium voluptatum corporis. Possimus facilis, ex cumque nihil magnam iusto ipsum consequatur, blanditiis quos rerum expedita sunt, libero aspernatur. Quasi esse rem praesentium exercitationem eius qui, harum ex labore minima illum maiores eligendi!
            
          </p>
          <a href="#">Read More</a>
          <div className='categoryAndMetadata'>
            <span className='category'>Nature</span>
            <div className='metadata'>
              <MdOutlinePreview /> <span>100</span> views
            </div>
            <div className='metadata'>
              <AiFillLike /> <span>1000</span> likes
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}
