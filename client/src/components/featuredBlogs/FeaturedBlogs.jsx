// Setup request to handle featured blogs
import classes from './featuredBlogs.module.css'

import image1 from '../../assets/dawid-zawila--G3rw6Y02D0-unsplash.jpg'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'

export default function FeaturedBlogs() {
  return (
    <div className={classes.container}>
      
      <div className={classes.wrapper}>
        <h3>Feature Blogs</h3>

        <div className={classes.blogs}>

          <div className={classes.left}>

            <div className={classes.mainBlog}>
              <img src={image1} alt="blog" />
              <div className={classes.mainBlogData}>
                <div className={classes.categoryAndMetadata}>
                  <span className={classes.category}>Nature</span>
                  <div className={classes.metadata}>
                    <MdOutlinePreview /> 100 likes
                  </div>
                  <div className={classes.metadata}>
                    <AiFillLike /> 1000 views
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
            </div>

          </div>

          <div className={classes.right}>

            <div className={classes.secondaryBlog}>
              <img src={image1} alt="blog" />
              <div className={classes.secondaryBlogData}>
                <h4>Blog 2 title</h4>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quasi beatae id, reiciendis in minus!
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span>Author: <span>deGentlem4n</span></span>
                  <span>Created: <span>6/9/2023</span></span>
                </div>
              </div>
            </div>

            <div className={classes.secondaryBlog}>
              <img src={image1} alt="blog" />
              <div className={classes.secondaryBlogData}>
                <h4>Blog 3 title</h4>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quasi beatae id, reiciendis in minus!
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span>Author: <span>deGentlem4n</span></span>
                  <span>Created: <span>6/9/2023</span></span>
                </div>
              </div>
            </div>


          </div>
        </div>
      
      </div>


    </div>
  )
}
