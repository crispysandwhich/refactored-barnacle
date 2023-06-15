// Need to implement a way to sve or get newsletter
import classes from './newsletter.module.css'
import { FiSend } from 'react-icons/fi'

export default function Newsletter() {


  const handleclick = (e) => {
    e.preventDefault()
    console.log('set up the email')
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Hey you want to get the latest updates - no blog - updates</h5>
          <h2>Fill out the forum below</h2>
        </div>
        <div className={classes.inputContainer}>
          <input type="email" placeholder="enter email here" />
          <FiSend className={classes.sendIcon} onClick={handleclick} />
        </div>
      </div>
    </div>
  )
}
