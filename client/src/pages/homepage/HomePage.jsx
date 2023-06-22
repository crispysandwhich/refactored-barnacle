
import classes from './homepage.module.css'

import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs.jsx'
import Hero from '../../components/hero/Hero'
import Categories from '../../components/categories/Categories'
import Newsletter from '../../components/newsletter/Newsletter'


export default function HomePage() {
  return (
    <div className={classes.container}>
      <Hero />
      {/* <FeaturedBlogs /> */}
      <Categories />
      <Newsletter />
    </div>
  )
}
