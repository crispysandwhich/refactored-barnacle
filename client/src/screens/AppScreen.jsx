import littleLogo from '../assets/LoneyTom.png'
import classes from '../styles/appscreen.module.css'



export default function AppScreen() {
  return (
    <>
        
      <div className={classes.AppScreen}>

        <div className={classes.appScreenContainer}>

          <img  src={littleLogo} alt="gfycat" />

        </div>

      </div>


    </>
  )
}
