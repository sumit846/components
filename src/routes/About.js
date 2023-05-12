import Navbar from "../components/Navbar";
import "./aboutStyles.css";
function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <img
          className="pic2"
          alt="AboutImg"
          src="https://media.istockphoto.com/id/844226534/photo/leaf-background.jpg?b=1&s=170667a&w=0&k=20&c=boU48X8ywoeJQkgHVsYlHEgwtygfFN1-WW1XmQabKy8="
        />
        <h1 className="abouttext">We are here for you.</h1>
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          <p>
            Welcome to our website, dedicated to inspiring you to travel and
            explore the world! We are passionate about exploring new
            destinations, cultures, and experiences, and we want to share that
            passion with you.
          </p>

          <p>
            Our team of experienced travellers and travel experts is dedicated
            to providing you with the best information, tips, and advice for
            your next adventure. Whether you're planning a solo backpacking trip
            across Europe, a family vacation to the beaches of Thailand, or a
            luxury cruise through the Caribbean, we've got you covered.
          </p>
          <p>
            We believe that travelling is not just about seeing new places, but
            about connecting with people, learning about different cultures, and
            gaining new perspectives. That's why we strive to provide you with
            authentic travel experiences that allow you to immerse yourself in
            the local culture and truly get to know the places you visit.
          </p>
        </p>
      </div>
    </>
  );
}

export default About;
