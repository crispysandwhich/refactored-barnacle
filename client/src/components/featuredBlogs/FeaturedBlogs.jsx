import React from 'react'
import classes from './featuredBlogs.module.css'

export default function FeaturedBlogs() {
  return (
    <div className={classes.conainer}>
      
      <div className={classes.wrapper}>
        <h3>Geature Blogs</h3>
      </div>
      <div className={classes.blogs}>
        <div className={classes.left}>
          <div className={classes.mainBlog}>
            <img src={blog1} alt="blog" />
          </div>
          <div className={classes.mainBlogData}>
            <span className={classes.category}>Nature</span>
            <div className={classes.metadata}>
              <MdOutlinePreview /> 100 likes
            </div>
          </div>
          <h4>Blog 1 title</h4>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quasi beatae id, reiciendis in minus!
          </p>
          <div className={classes.authorAndCreatedAt}>
            <span>Author: <span>deGentlem4n</span></span>
            <span>Created: <span>6/9/2023</span></span>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.secondaryBlog}>
            <img src={} />
          </div>
          <div className={classes.secondaryBlog}>
          
          </div>
          <div className={classes.secondaryBlog}>
          
          </div>
        </div>
      </div>
            


    </div>
  )
}
