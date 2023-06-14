
import classes from './homepage.module.css'

import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs.jsx'
import Hero from '../../components/hero/Hero'


export default function HomePage() {
  return (
    <div className={classes.container}>
      <Hero />
      <FeaturedBlogs />
    </div>
  )
}
