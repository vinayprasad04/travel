import React from "react";

import FavItenarieCard from "../components/favourite/favIterarieCard";
import FavouriteBottomRecomm from "../components/favourite/favBottomRecommendation";
import FavouriteSlider from "../components/favourite/favouriteSlider";

const Favorites = () => {
  return (
    <div>
      <main className="content favorites">
        {/* Favourite */}
        <FavItenarieCard />

        {/* <!-- Recommendations --> */}
        <FavouriteSlider />

        {/* <!-- Top activities --> */}
        <FavouriteBottomRecomm />
      </main>
    </div>
  );
};

export default Favorites;
