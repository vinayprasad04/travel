import React, { Fragment } from "react";

const EventReserveForm = () => {
	return (
		<Fragment>
			<div class="eventReserve__grid--col">
				<div class="eventReserve__form">
					<form action="">
						<div class="eventReserve__form--title">
							AED 1800 <span>per person</span>
						</div>
						<div class="eventReserve__form--date"></div>
						<div class="form__flex--row">
							<div class="s-form-floating">
								<input
									type="text"
									value="Nov 10, 2022"
									readonly
									class="s-form-control"
									id="floatingFromInput"
								/>
								<label for="floatingFromInput">From</label>
							</div>
							<div class="s-form-floating">
								<input
									type="text"
									value="Nov 29, 2022"
									readonly
									class="s-form-control"
									id="floatingToInput"
								/>
								<label for="floatingToInput">To</label>
							</div>
						</div>
						<div
							class="s-form-floating"
							style={{ marginTop: "-1px" }}>
							<select
								class="s-form-select"
								id="floatingSelectGrid"
								aria-label="Floating label select example">
								<option value="0">1 adult</option>
								<option value="1">2 adult</option>
								<option value="2">3 adult</option>
								<option value="3">4 adult</option>
							</select>
							<label for="floatingSelectGrid">Guests</label>
						</div>
						<div class="eventReserve__form--seats">
							172 Seats still available
						</div>
						<button class="btn btn__black">Reserve my seats</button>
						<ul class="guests__list">
							<li class="guests__list--item">
								<div class="guests">1800 x 1 adult</div>
								<div class="price">1800</div>
							</li>
							<li class="guests__list--item">
								<div class="guests">600 x 0 children</div>
								<div class="price">0</div>
							</li>
						</ul>
						<div class="total">
							<div class="total__title">Total</div>
							<div class="total__price">AED 1800</div>
						</div>
					</form>

					<a
						href="#"
						class="eventReserve__form--help">
						Need help?
					</a>
				</div>
			</div>
		</Fragment>
	);
};

export default EventReserveForm;
