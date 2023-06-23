import { Link } from 'react-router-dom'
import '../styles/Hero.css'


export default function Hero() {
  return (
    <div id="hero">
      <div className="heroWrapper">
        <h2>Welcome to ghostieve</h2>
        <p>
          The one stop to be in when you feeling lonely, check out some of my blogs to get in tune again and join up to get into crypto and coding and learning more than you did yesterday
        </p>
        <Link to="/blogs">Check it</Link>
      </div>
    </div>
  )
}
