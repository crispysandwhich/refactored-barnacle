import {useState} from 'react'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'
import {FiArrowRight} from 'react-icons/fi'

import '../styles/BlogPage.css'

export default function BlogPage() {


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


  return (
    <div id="BlogPage">

      <div className="blogCategory">
        <h3>Select Category</h3>
        <div className="categories">
          {
            categories.map((category) => (
              <span 
                key={crypto.randomUUID()} 
                className={`category ${activeCategory === category && 'active'}`}
                onClick={() => setActiveCategory(category)}>
                {category}
                </span>
            ))
          }
        </div>
      </div>

      <div className="blogSection">
        <h2>de Blogs</h2>
        <p>Here lie de blogs feel free to read</p>

        <div className="blogs">
          <div className="blog">
              <a href="#" className='blog-image-container'>
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="blog" />
              </a>

              <div className="blogDetails">

                <div className="categoryMetadata">
                  <div className="category">crypto</div>
                  <div className="metadata">
                    <MdOutlinePreview /> <span>100</span> views
                  </div>
                  <div className="metadata">
                  <AiFillLike /> <span>1</span> like
                  </div>
                </div>
                <h4>What is life, just want to cry</h4>
                <p className="summary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus culpa necessitatibus maiores facere totam reiciendis, voluptatem ducimus recusandae deleniti aliquam cupiditate maxime veritatis inventore tempore cumque harum ipsa ratione repellendus.
                </p>
                <div className="authorAndCreated">
                  <span>Author <span>deGentleman</span></span>
                  <span>Created <span>6/23/23</span></span>
                </div>

                <a href="#" className="btn">Read More <FiArrowRight /></a>

              </div>

          </div>
          <div className="blog">
              <a href="#" className='blog-image-container'>
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="blog" />
              </a>

              <div className="blogDetails">

                <div className="categoryMetadata">
                  <div className="category">crypto</div>
                  <div className="metadata">
                    <MdOutlinePreview /> <span>100</span> views
                  </div>
                  <div className="metadata">
                  <AiFillLike /> <span>1</span> like
                  </div>
                </div>
                <h4>What is life, just want to cry</h4>
                <p className="summary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus culpa necessitatibus maiores facere totam reiciendis, voluptatem ducimus recusandae deleniti aliquam cupiditate maxime veritatis inventore tempore cumque harum ipsa ratione repellendus.
                </p>
                <div className="authorAndCreated">
                  <span>Author <span>deGentleman</span></span>
                  <span>Created <span>6/23/23</span></span>
                </div>

                <a href="#" className="btn">Read More <FiArrowRight /></a>

              </div>

          </div>
          <div className="blog">
              <a href="#" className='blog-image-container'>
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="blog" />
              </a>

              <div className="blogDetails">

                <div className="categoryMetadata">
                  <div className="category">crypto</div>
                  <div className="metadata">
                    <MdOutlinePreview /> <span>100</span> views
                  </div>
                  <div className="metadata">
                  <AiFillLike /> <span>1</span> like
                  </div>
                </div>
                <h4>What is life, just want to cry</h4>
                <p className="summary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus culpa necessitatibus maiores facere totam reiciendis, voluptatem ducimus recusandae deleniti aliquam cupiditate maxime veritatis inventore tempore cumque harum ipsa ratione repellendus.
                </p>
                <div className="authorAndCreated">
                  <span>Author <span>deGentleman</span></span>
                  <span>Created <span>6/23/23</span></span>
                </div>

                <a href="#" className="btn">Read More <FiArrowRight /></a>

              </div>

          </div>

        </div>

      </div>



    </div>
  )
}
