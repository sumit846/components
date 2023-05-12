import "./HeroStyles.css";
function Hero() {
  return (
    <>
      <div className="hero">
        <img
          className="pic1"
          alt="HeroImg"
          src="https://images.unsplash.com/photo-1625979061911-e3673d9a5385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGlsbCUyMHN0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <div className="hero-text">
          <h1>Your journey Your Story</h1>
          <p>Choose Your Favourite Destination.</p>
          <a href="/">Travel Plan</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
