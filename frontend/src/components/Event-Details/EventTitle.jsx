import React, { Fragment } from "react";
import { Rating } from "react-simple-star-rating";

const EventTitle = () => {
	return (
		<Fragment>
			{" "}
			<h2 class="eventDetails__title">Surfing at leasure</h2>
			<div class="eventDetails__review">
				<div class="rating">
					<Rating
						initialValue="5"
						size={20}
						readonly={true}
					/>
				</div>
				<div class="review">
					5.0 <span>23 reviews</span>
				</div>
				<div class="location">Sindalah City, Dubai</div>
			</div>
		</Fragment>
	);
};

export default EventTitle;
