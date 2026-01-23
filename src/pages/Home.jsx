export default function Home() {
  return (
    <div className="home">
      <div className="half left">
        <h1 className="name">Lucia Alday</h1>
      </div>
      <div className="half right">
        <p>I am...</p>
        <a href="/Projects"><h3 className="item">A developer</h3></a>
        <a href="/Art"><h3 className="item">A designer</h3></a>
        <a href="/Art"><h3 className="item">An artist</h3></a>
        <a href="/Resume"><h4 className="item">View my experience</h4></a>
      </div>
      <hr></hr>
      <h2>About Me</h2>
    </div>
  );
}
