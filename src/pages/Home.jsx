/** src/pages/Homes.jsx */
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <article>
        <section className="left">
          <h1 style={{fontSize:'clamp(3rem, 15vw, 8rem)', marginBottom:'0'}}>Lucia</h1>
          <h1 style={{fontSize:'clamp(3rem, 15vw, 8rem)', marginTop:'0'}}>Alday</h1>
        </section>
        <section className="right">
          <p>I am...</p>
          <Link to="/Developer"><h2 className="item">A developer</h2></Link>
          <Link to="/Researcher"><h2 className="item">A researcher</h2></Link>
          <Link to="/Designer"><h2 className="item">A designer</h2></Link>
          <Link to="/Resume"><h5 className="item">View my experience</h5></Link>
        </section>
      </article>
        <hr></hr>
      <article>
        <h2>About Me</h2>
      </article>
      <article>
        <p>I am graduating from the University of Arizona with a B.S. in Computer Science this May of 2026.</p>
        <p></p>
      </article>
    </main>
  );
}