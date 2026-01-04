import './Home.css';
import Monogram from '../img/monogram.png';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home-nav">
        <img src={Monogram} width='80px' alt='LA' />
        <Link className="home-nav-link">Home</Link>
      </div>
    </div>
  )
}
export default Home;