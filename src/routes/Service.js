import Navbar from "../components/Navbar";
import "./serviceStyles.css";
function Service() {
  return (
    <>
      <Navbar />
      <div className="service">
        <img
          className="pic3"
          alt="AboutImg"
          src="https://plus.unsplash.com/premium_photo-1673697239961-c546f978cdcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwbGlnaHQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <h1 className="serviceText">We have always given you more.</h1>
      </div>
      <div className="service2">
        <h2>Services</h2>
        <p>
          <p>
            Welcome to our service page, where we aim to provide you with the
            best possible travel experience. Our team of experienced travelers
            and travel experts is dedicated to helping you plan and book your
            next adventure, with a wide range of services designed to make your
            trip as seamless and stress-free as possible.
          </p>
          <p>Here are some of the services we offer:</p>
          <p>
            Trip Planning: We know that planning a trip can be overwhelming,
            especially if you're going to a new destination or trying to
            coordinate with multiple people. That's why we offer personalized
            trip planning services, where we can help you create a customized
            itinerary that fits your budget, interests, and schedule. We can
            also help you book flights, accommodations, and activities, and
            provide insider tips on the best places to eat, drink, and explore.
          </p>
          <p>
            Group Travel: If you're traveling with a group of friends or family
            members, we can help you organize your trip and take care of all the
            logistics. From coordinating transportation to booking group
            accommodations and activities, we can help you plan a memorable and
            enjoyable group travel experience.
          </p>
          <p>
            Destination Weddings and Honeymoons: If you're planning a wedding or
            honeymoon, we can help you find the perfect destination and plan all
            the details, from the venue and catering to the flowers and
            photography. We can also help you plan activities and excursions for
            your guests and provide on-site support to ensure that everything
            runs smoothly.
          </p>
        </p>
      </div>
    </>
  );
}

export default Service;
