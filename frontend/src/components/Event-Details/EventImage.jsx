import React, { Fragment, useState } from "react";
import eventImage from "../../assets/img/Image118.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const EventImage = () => {
	const [showbtnActive, setShowBtnActive] = useState(false);

	const handleClick = () => {
		setShowBtnActive(true);
	};

	return (
		<Fragment>
			{" "}
			{showbtnActive ? (
				<OwlCarousel
					className="owl-theme"
					margin={10}
					nav={false}>
					<div class="grid__box--sm">
						<img
							src={eventImage}
							alt=""
							class="grid__image border__rounded--topLeft"
						/>
					</div>
					<div class="grid__box--sm">
						<img
							src={eventImage}
							alt=""
							class="grid__image"
						/>
					</div>
					<div class="grid__box--sm">
						<img
							src={eventImage}
							alt=""
							class="grid__image border__rounded--bottomLeft"
						/>
					</div>
					<div class="grid__box--sm">
						<img
							src={eventImage}
							alt=""
							class="grid__image"
						/>
					</div>
				</OwlCarousel>
			) : (
				<div class="eventDetails__grid">
					<div class="eventDetails__grid--col grid__box">
						<div class="grid__box--sm">
							<img
								src={eventImage}
								alt=""
								class="grid__image border__rounded--topLeft"
							/>
						</div>
						<div class="grid__box--sm">
							<img
								src={eventImage}
								alt=""
								class="grid__image"
							/>
						</div>
						<div class="grid__box--sm">
							<img
								src={eventImage}
								alt=""
								class="grid__image border__rounded--bottomLeft"
							/>
						</div>
						<div class="grid__box--sm">
							<img
								src={eventImage}
								alt=""
								class="grid__image"
							/>
						</div>
					</div>
					<div class="eventDetails__grid--col">
						<img
							src={eventImage}
							alt=""
							class="grid__image border__rounded--topRight border__rounded--bottomRight"
						/>
					</div>
					<div class="status scheduled">Scheduled</div>
					<button
						class="btn__white"
						onClick={handleClick}>
						Show all
					</button>{" "}
				</div>
			)}
		</Fragment>
	);
};

export default EventImage;
