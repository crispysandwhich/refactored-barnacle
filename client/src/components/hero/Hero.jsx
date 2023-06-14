import { Link } from 'react-router-dom'
import raffi from '../../assets/LoneyTom.png'
import classes from './hero.module.css'

export default function Hero() {
  return (
      <div className={classes.wrapper}>
      
        <div className={classes.content}>
          <h1>hello</h1>
          <p>Smile check out my blogs</p>
          <Link to='/blogs'>Check it</Link>
        </div>

        <div className={classes.logo}>
          <img src={raffi} alt="just a small little bot"/>
        </div>

    </div>
  )
}
