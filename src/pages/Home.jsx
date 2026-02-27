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
        <p>I'm a computer science student graduating in May of 2026 who enjoys building practical systems that solve concrete problems. My experience spans low level programming in C, backend development with databases, and front end interfaces that prioritize usability. I approach projects analytically, break down ambiguity into structured components, and focus on writing clean, maintainable code. I'm especially drawn to projects where technical depth and user experience intersect.</p>
        <p></p>
      </article>
    </main>
  );
}