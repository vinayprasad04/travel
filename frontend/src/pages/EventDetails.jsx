import React, { useEffect } from "react";
import { swiperHandle } from "../assets/js/swiper-handle.js";
import "../assets/scss/index.css";
import "../assets/scss/swiper-bundle.min.css";
import RatingCard from "../components/Event-Details/RatingCard.jsx";
import EventRecommendation from "../components/Event-Details/EventRecommendation.jsx";
import EventImage from "../components/Event-Details/EventImage.jsx";
import ViboMeter from "../components/Event-Details/ViboMeter.jsx";
import EventDescription from "../components/Event-Details/EventDescription.jsx";
import EventReview from "../components/Event-Details/EventReview.jsx";
import EventReserveForm from "../components/Event-Details/EventReserveForm.jsx";
import EventTitle from "../components/Event-Details/EventTitle.jsx";

const EventDetails = () => {
	useEffect(() => {
		swiperHandle();
	}, []);

	return (
		<div>
			<main class="content event">
				<div class="eventDetails">
					<div class="container">
						<EventTitle />
						<EventImage />
					</div>
				</div>

				<div class="eventReserve">
					<div class="container">
						<div class="eventReserve__grid">
							<div class="eventReserve__grid--col">
								<ViboMeter />
								<EventDescription />
								<EventReview />
							</div>
							<EventReserveForm />
						</div>
					</div>
				</div>
				{/* 
<!-- Recommendations --> */}
				<div class="recSlider recSlider--ratingCards">
					<div class="swiper tailored">
						<div class="swiper-wrapper">
							<RatingCard />
						</div>

						<div class="swiper-buttons">
							<div class="swiper-button-prev"></div>
							<div class="swiper-button-next"></div>
						</div>
					</div>
				</div>

				{/* <!-- Some other recommendations --> */}
				<div class="recommendations event--recommendations">
					<div class="container">
						<h2 class="recommendations__title">
							Some more recommendations for you, Charlie!
						</h2>
						<div class="card__grid">
							<EventRecommendation />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default EventDetails;
