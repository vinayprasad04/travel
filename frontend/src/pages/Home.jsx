import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <>
      <main class="content">
        <div class="recSlider recSlider--cardView">
          <h2 class="recSlider__title">Good morning {user?.data.name}!</h2>
          <div class="recSlider__subtitle">
            <p>
              Below listed are your itineraries, have a look to the timings and
              the location.
            </p>
            <p>We wish you to enjoy the activities and the weather!</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
