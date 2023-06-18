import { Link } from 'react-router-dom'
import raffi from '../../assets/LoneyTom.png'
import classes from './hero.module.css'

export default function Hero() {
  return (
      <div className={classes.wrapper}>
      
        <div className={classes.content}>
          <h2>Are you lost?</h2>
          <p>
            If not then I hope you know what you are looking for. If you would
            like to contact me, I think you will find out how
          </p>
          <Link to='/blogs'>Check it</Link>
        </div>

        <div className={classes.right}>
          <h3>New things to come</h3>
          <div className={classes.logo}>
            <img src={raffi} alt="just a small little bot"/>
          </div>
        </div>

    </div>
  )
}
