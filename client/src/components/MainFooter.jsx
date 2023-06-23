import {AiFillTwitterCircle, AiFillYoutube, AiFillRedditCircle} from 'react-icons/ai'
import '../styles/MainFooter.css'

export default function MainFooter() {
  return (
    <footer id="MainFooter">
      <h6>ghostieve</h6>
      <ul>
        <li>
          <a href="#"><AiFillTwitterCircle /></a>
        </li>
        <li>
          <a href="#"><AiFillYoutube /></a>
        </li>
        <li>
          <a href="#"><AiFillRedditCircle /></a>
        </li>
      </ul>
      <p>Created with love from <a href="#">de_gentleman</a> </p>
    </footer>
  )
}
