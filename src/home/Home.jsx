import './Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home-nav">
        <img src='../img/monogram.png' width='20px' alt='LA' />
        <Link className="home-nav-link">Home</Link>
      </div>
    </div>
  )
}
export default Home;