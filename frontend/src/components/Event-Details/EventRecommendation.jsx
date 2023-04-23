import React, { Fragment } from "react";
import imgCard from "../../assets/img/trending1.jpg";
import emoji from "../../assets/img/overwhelmed.svg";

const EventRecommendation = () => {
	const cardData = [
		// dummy data
		{
			cardImage: imgCard,
			emoji: emoji,
			experience: "Overwhelmed",
			date: "Nov 10-29",
			event: "Surfing at leasure",
			cost: "AED 1800 per person"
		},
		{
			cardImage: imgCard,
			emoji: emoji,
			experience: "Overwhelmed",
			date: "Nov 10-29",
			event: "Surfing at leasure",
			cost: "AED 1800 per person"
		},
		{
			cardImage: imgCard,
			emoji: emoji,
			experience: "Overwhelmed",
			date: "Nov 10-29",
			event: "Surfing at leasure",
			cost: "AED 1800 per person"
		},
		{
			cardImage: imgCard,
			emoji: emoji,
			experience: "Overwhelmed",
			date: "Nov 10-29",
			event: "Surfing at leasure",
			cost: "AED 1800 per person"
		},
		{
			cardImage: imgCard,
			emoji: emoji,
			experience: "Overwhelmed",
			date: "Nov 10-29",
			event: "Surfing at leasure",
			cost: "AED 1800 per person"
		},
		{
			cardImage: imgCard,
			emoji: emoji,
			experience: "Overwhelmed",
			date: "Nov 10-29",
			event: "Surfing at leasure",
			cost: "AED 1800 per person"
		},
		{
			cardImage: imgCard,
			emoji: emoji,
			experience: "Overwhelmed",
			date: "Nov 10-29",
			event: "Surfing at leasure",
			cost: "AED 1800 per person"
		},
		{
			cardImage: imgCard,
			emoji: emoji,
			experience: "Overwhelmed",
			date: "Nov 10-29",
			event: "Surfing at leasure",
			cost: "AED 1800 per person"
		},
		{
			cardImage: imgCard,
			emoji: emoji,
			experience: "Overwhelmed",
			date: "Nov 10-29",
			event: "Surfing at leasure",
			cost: "AED 1800 per person"
		},
		{
			cardImage: imgCard,
			emoji: emoji,
			experience: "Overwhelmed",
			date: "Nov 10-29",
			event: "Surfing at leasure",
			cost: "AED 1800 per person"
		}
	];

	return (
		<Fragment>
			{" "}
			{cardData &&
				cardData.map((item) => {
					return (
						<div class="card__item">
							<a
								href="#"
								class="card__link">
								<div class="card__thumb">
									<button class="card__fav">
										<span class="icon-heart"></span>
									</button>
									<img
										src={item.cardImage}
										alt="event name"
										class="card__img"
									/>
								</div>
								<div class="card__info">
									<div class="card__row">
										{/* <!-- <div class="card__rating"><span class="icon-star"></span> 4.9 (123 reviews)</div> --> */}
										<div class="vibes">
											<img
												src={item.emoji}
												alt="Overwhelmed"
												class="vibes__icon"
											/>
											<span class="vibes__text">{item.experience}</span>
										</div>
										<div class="card__date">{item.date}</div>
									</div>
									<h3 class="card__title">{item.event}</h3>
									<div class="card__price">{item.cost}</div>
								</div>
							</a>
						</div>
					);
				})}
		</Fragment>
	);
};

export default EventRecommendation;
