import React, { Fragment } from "react";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import joy from "../../assets/img/joy.svg";
import appreciation from "../../assets/img/appreciation.svg";
import boredom from "../../assets/img/boredom.svg";
import disappointed from "../../assets/img/disappointed.svg";
import anger from "../../assets/img/anger.svg";

const ViboMeter = () => {
	const viboMeterData = {
		anger: 1
	};

	const styleViboMeter = viboMeterData ? "active" : "";

	return (
		<Fragment>
			{" "}
			<div class="event__meter">
				<h4 class="event__reserve--title">Vibe-o-meter of the event</h4>
				<ul class="emotions__list">
					<li
						class={
							viboMeterData.overwhelmed
								? `emotions__list--item ${styleViboMeter}`
								: `emotions__list--item`
						}>
						<div class="emotion overwhelmed"></div>
						<img
							src={overwhelmed}
							alt=""
							width="52"
							height="52px"
						/>
					</li>
					<li
						class={
							viboMeterData.joy
								? `emotions__list--item ${styleViboMeter}`
								: `emotions__list--item`
						}>
						<div class="emotion joy"></div>
						<img
							src={joy}
							alt=""
							width="52"
							height="52px"
						/>
					</li>
					<li
						class={
							viboMeterData.appreciation
								? `emotions__list--item ${styleViboMeter}`
								: `emotions__list--item`
						}>
						<div class="emotion appreciation"></div>
						<img
							src={appreciation}
							alt=""
							width="52"
							height="52px"
						/>
					</li>
					<li
						class={
							viboMeterData.boredom
								? `emotions__list--item ${styleViboMeter}`
								: `emotions__list--item`
						}>
						<div class="emotion boredom"></div>
						<img
							src={boredom}
							alt=""
							width="52"
							height="52px"
						/>
					</li>
					<li
						class={
							viboMeterData.disappointed
								? `emotions__list--item ${styleViboMeter}`
								: `emotions__list--item`
						}>
						<div class="emotion disappointed"></div>
						<img
							src={disappointed}
							alt=""
							width="52"
							height="52px"
						/>
					</li>
					<li
						class={
							viboMeterData.anger
								? `emotions__list--item ${styleViboMeter}`
								: `emotions__list--item`
						}>
						<div class="emotion anger"></div>
						<img
							src={anger}
							alt=""
							width="52"
							height="52px"
						/>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};

export default ViboMeter;
