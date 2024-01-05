import "../components/RecentTripsStyles.css";
import img1 from "../asserts/5.jpg";
import img2 from "../asserts/6.jpg";
import img3 from "../asserts/8.jpg";

import React from "react";
import RecentTripsData from "./RecentTripsData";

const RecentTrips = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps</p>

      <div className="trip-card">
        <RecentTripsData
          tImg={img1}
          heading="Greece"
          text="Greece, a timeless destination steeped in history and natural beauty, invites you on a journey through ancient wonders and sun-kissed landscapes. Explore the Acropolis in Athens, where history comes to life against the backdrop of the azure sky. Wander through charming villages with whitewashed buildings and azure-domed churches on the iconic islands of Santorini and Mykonos. Feel the warmth of Greek hospitality as you indulge in flavorful cuisine at a seaside taverna. With its rich mythology, archaeological treasures, and idyllic beaches, Greece promises a tapestry of experiences that blend the past with the present in an unforgettable Mediterranean escape."
        />
        <RecentTripsData
          tImg={img2}
          heading="London"
          text="London, the vibrant capital of the United Kingdom, seamlessly blends rich history with contemporary flair. Iconic landmarks like the Tower of London, Buckingham Palace, and the British Museum tell tales of a bygone era, while the modern skyline showcases the city's dynamic spirit. Stroll along the Thames River, take in a West End show, or explore the eclectic neighborhoods like Soho and Covent Garden. Immerse yourself in diverse cultures, savor global cuisines, and relish the greenery of Hyde Park. London, a city of contrasts, promises an unforgettable mix of tradition and innovation for every type of traveler."
        />
        <RecentTripsData
          tImg={img3}
          heading="Andaman and Nicobar Islands"
          text="The Andaman and Nicobar Islands, nestled in the Bay of Bengal, offer a paradise for tourists with pristine beaches, vibrant coral reefs, and lush landscapes. Known for water adventures like snorkeling and scuba diving, the islands also house historical sites like the Cellular Jail and Ross Island. With unique flora and fauna, indigenous tribes, and a tranquil atmosphere, the Andaman and Nicobar Islands provide a perfect blend of natural beauty, adventure, and cultural richness for an unforgettable getaway."
        />
      </div>
    </div>
  );
};

export default RecentTrips;
