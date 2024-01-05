import "../components/DestinationStyles.css";
import img1 from "../asserts/1.jpg";
import img2 from "../asserts/8.jpg";
import img3 from "../asserts/3.jpg";
import img4 from "../asserts/4.jpg";

import React from "react";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Populer destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        cName="first-des"
        heading="Maldives"
        desciption="The Maldives, a tropical gem in the Indian Ocean, beckons with its idyllic beauty. Picture yourself on powdery white-sand beaches fringed by swaying palms, surrounded by the clearest turquoise waters imaginable. This archipelago of over 1,000 coral islands offers a haven for snorkelers and divers, boasting vibrant marine life and coral gardens. Luxurious overwater bungalows provide a unique and intimate retreat, perfect for romantic escapes. Embrace the laid-back island vibe, indulge in exquisite seafood, and let the Maldives weave its magic as you experience a slice of paradise on Earth."
        img1={img1}
        img2={img2}
      />
      <DestinationData
        cName="first-des revese"
        heading="Paris"
        desciption="Paris, the City of Light, captivates visitors with its timeless charm and iconic landmarks. Picture strolling along the Seine River, with the Eiffel Tower looming majestically in the background. Immerse yourself in art at the Louvre, home to the Mona Lisa, and wander through the historic streets of Montmartre. Indulge in delectable pastries at a sidewalk café, savoring the essence of French cuisine. From the grandeur of Notre-Dame Cathedral to the bohemian allure of the Latin Quarter, Paris invites you to experience a symphony of culture, history, and romance in every enchanting corner."
        img1={img3}
        img2={img4}
      />
    </div>
  );
};

export default Destination;
