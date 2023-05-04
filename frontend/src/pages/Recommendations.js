import React from "react";

const Recommendations = () => {
    return (
        <main class="content home recommendation--page">
            <div class="recommendations">
                <div class="container">
                    <h2 class="recommendations__title">Hey Charlie,</h2>
                    <div class="recommendations__subtitle">
                        <h3>
                            Due to some bad weather your "Golf Tournament" event
                            has been cancelled.
                        </h3>
                        <h3>
                            We have a similar event for you, starting just in an
                            hour and 5 minutes drive away.
                        </h3>
                    </div>
                </div>
            </div>

            {/* <!-- Main banner --> */}
            <div class="banner">
                <div class="container">
                    <div class=" mainbanner">
                        {/* <!-- Additional required wrapper --> */}
                        <div class="swiper-wrapper">
                            {/* <!-- Slides --> */}
                            <div class="swiper-slide">
                                <img
                                    src="./assets/img/banner.jpg"
                                    alt="event title"
                                />
                                <div class="banner__info">
                                    <h2 class="banner__info__title">
                                        Medusa's <br />
                                        New Year Musical Concert
                                    </h2>
                                    <div class="banner__info__location">
                                        Jumeirah Palm Beach, Dubai
                                    </div>
                                    <div class="banner__info__date">
                                        Jan 01, 2023 at 00:00
                                    </div>
                                    <div class="banner__info__countdown">
                                        <div
                                            class="counter"
                                            data-date="2023-1-1 00:00:00"
                                        ></div>
                                    </div>
                                    <div class="banner__info__link">
                                        <a href="#">Yes, I am in</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- If we need navigation buttons --> */}
                        <div class="swiper-buttons">
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Some other recommendations --> */}
            <div class="recommendations">
                <div class="container">
                    <h2 class="recommendations__title">
                        Some similar recommendation for you, Charlie.
                    </h2>

                    <div class="schedule">
                        <div class="time">
                            <ul class="time__list">
                                <li class="time__list--item">
                                    10 mins walking
                                </li>
                                <li class="time__list--item active">
                                    20 mins walking
                                </li>
                                <li class="time__list--item">
                                    30 mins walking
                                </li>
                            </ul>

                            <ul class="time__list">
                                <li class="time__list--item">10 mins drive</li>
                                <li class="time__list--item active">
                                    20 mins drive
                                </li>
                                <li class="time__list--item">30 mins drive</li>
                            </ul>

                            <ul class="time__list">
                                <li class="time__list--item border-rounded">
                                    No limits
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="card__grid">
                        <div class="card__item">
                            <a href="#" class="card__link">
                                <div class="card__thumb">
                                    <button class="card__fav">
                                        <span class="icon-heart"></span>
                                    </button>
                                    <img
                                        src="./assets/img/holiday_0.png"
                                        alt="event name"
                                        class="card__img"
                                    />
                                </div>
                                <div class="card__info">
                                    <div class="card__row">
                                        {/* <!-- <div class="card__rating"><span class="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                                        <div class="vibes">
                                            <img
                                                src="./assets/img/overwhelmed.svg"
                                                alt="Overwhelmed"
                                                class="vibes__icon"
                                            />
                                            <span class="vibes__text">
                                                Overwhelmed
                                            </span>
                                        </div>
                                        <div class="card__date">Nov 10-29</div>
                                    </div>
                                    <h3 class="card__title">
                                        Surfing at leasure
                                    </h3>
                                    <div class="card__price">
                                        AED 1800 per person
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="card__item">
                            <a href="#" class="card__link">
                                <div class="card__thumb">
                                    <button class="card__fav">
                                        <span class="icon-heart"></span>
                                    </button>
                                    <img
                                        src="./assets/img/Event-Banner.png"
                                        alt="event name"
                                        class="card__img"
                                    />
                                </div>
                                <div class="card__info">
                                    <div class="card__row">
                                        {/* <!-- <div class="card__rating"><span class="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                                        <div class="vibes">
                                            <img
                                                src="./assets/img/overwhelmed.svg"
                                                alt="Overwhelmed"
                                                class="vibes__icon"
                                            />
                                            <span class="vibes__text">
                                                Overwhelmed
                                            </span>
                                        </div>
                                        <div class="card__date">Nov 10-29</div>
                                    </div>
                                    <h3 class="card__title">
                                        Swimming game for below 18 year kids
                                    </h3>
                                    <div class="card__price">
                                        AED 1800 per person
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="card__item">
                            <a href="#" class="card__link">
                                <div class="card__thumb">
                                    <button class="card__fav">
                                        <span class="icon-heart"></span>
                                    </button>
                                    <img
                                        src="./assets/img/spa_0.png"
                                        alt="event name"
                                        class="card__img"
                                    />
                                </div>
                                <div class="card__info">
                                    <div class="card__row">
                                        {/* <!-- <div class="card__rating"><span class="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                                        <div class="vibes">
                                            <img
                                                src="./assets/img/overwhelmed.svg"
                                                alt="Overwhelmed"
                                                class="vibes__icon"
                                            />
                                            <span class="vibes__text">
                                                Overwhelmed
                                            </span>
                                        </div>
                                        <div class="card__date">Nov 10-29</div>
                                    </div>
                                    <h3 class="card__title">
                                        Surfing at leasure
                                    </h3>
                                    <div class="card__price">
                                        AED 1800 per person
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="card__item">
                            <a href="#" class="card__link">
                                <div class="card__thumb">
                                    <button class="card__fav">
                                        <span class="icon-heart"></span>
                                    </button>
                                    <img
                                        src="./assets/img/holiday_0.png"
                                        alt="event name"
                                        class="card__img"
                                    />
                                </div>
                                <div class="card__info">
                                    <div class="card__row">
                                        {/* <!-- <div class="card__rating"><span class="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                                        <div class="vibes">
                                            <img
                                                src="./assets/img/overwhelmed.svg"
                                                alt="Overwhelmed"
                                                class="vibes__icon"
                                            />
                                            <span class="vibes__text">
                                                Overwhelmed
                                            </span>
                                        </div>
                                        <div class="card__date">Nov 10-29</div>
                                    </div>
                                    <h3 class="card__title">
                                        Surfing at leasure
                                    </h3>
                                    <div class="card__price">
                                        AED 1800 per person
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="card__item">
                            <a href="#" class="card__link">
                                <div class="card__thumb">
                                    <button class="card__fav">
                                        <span class="icon-heart"></span>
                                    </button>
                                    <img
                                        src="./assets/img/Event-Banner.png"
                                        alt="event name"
                                        class="card__img"
                                    />
                                </div>
                                <div class="card__info">
                                    <div class="card__row">
                                        {/* <!-- <div class="card__rating"><span class="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                                        <div class="vibes">
                                            <img
                                                src="./assets/img/overwhelmed.svg"
                                                alt="Overwhelmed"
                                                class="vibes__icon"
                                            />
                                            <span class="vibes__text">
                                                Overwhelmed
                                            </span>
                                        </div>
                                        <div class="card__date">Nov 10-29</div>
                                    </div>
                                    <h3 class="card__title">
                                        Swimming game for below 18 year kids
                                    </h3>
                                    <div class="card__price">
                                        AED 1800 per person
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="card__item">
                            <a href="#" class="card__link">
                                <div class="card__thumb">
                                    <button class="card__fav">
                                        <span class="icon-heart"></span>
                                    </button>
                                    <img
                                        src="./assets/img/holiday_0.png"
                                        alt="event name"
                                        class="card__img"
                                    />
                                </div>
                                <div class="card__info">
                                    <div class="card__row">
                                        {/* <!-- <div class="card__rating"><span class="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                                        <div class="vibes">
                                            <img
                                                src="./assets/img/overwhelmed.svg"
                                                alt="Overwhelmed"
                                                class="vibes__icon"
                                            />
                                            <span class="vibes__text">
                                                Overwhelmed
                                            </span>
                                        </div>
                                        <div class="card__date">Nov 10-29</div>
                                    </div>
                                    <h3 class="card__title">
                                        Surfing at leasure
                                    </h3>
                                    <div class="card__price">
                                        AED 1800 per person
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="card__item">
                            <a href="#" class="card__link">
                                <div class="card__thumb">
                                    <button class="card__fav">
                                        <span class="icon-heart"></span>
                                    </button>
                                    <img
                                        src="./assets/img/Event-Banner.png"
                                        alt="event name"
                                        class="card__img"
                                    />
                                </div>
                                <div class="card__info">
                                    <div class="card__row">
                                        {/* <!-- <div class="card__rating"><span class="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                                        <div class="vibes">
                                            <img
                                                src="./assets/img/overwhelmed.svg"
                                                alt="Overwhelmed"
                                                class="vibes__icon"
                                            />
                                            <span class="vibes__text">
                                                Overwhelmed
                                            </span>
                                        </div>
                                        <div class="card__date">Nov 10-29</div>
                                    </div>
                                    <h3 class="card__title">
                                        Swimming game for below 18 year kids
                                    </h3>
                                    <div class="card__price">
                                        AED 1800 per person
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="card__item">
                            <a href="#" class="card__link">
                                <div class="card__thumb">
                                    <button class="card__fav">
                                        <span class="icon-heart"></span>
                                    </button>
                                    <img
                                        src="./assets/img/spa_0.png"
                                        alt="event name"
                                        class="card__img"
                                    />
                                </div>
                                <div class="card__info">
                                    <div class="card__row">
                                        {/* <!-- <div class="card__rating"><span class="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                                        <div class="vibes">
                                            <img
                                                src="./assets/img/overwhelmed.svg"
                                                alt="Overwhelmed"
                                                class="vibes__icon"
                                            />
                                            <span class="vibes__text">
                                                Overwhelmed
                                            </span>
                                        </div>
                                        <div class="card__date">Nov 10-29</div>
                                    </div>
                                    <h3 class="card__title">
                                        Surfing at leasure
                                    </h3>
                                    <div class="card__price">
                                        AED 1800 per person
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="card__item">
                            <a href="#" class="card__link">
                                <div class="card__thumb">
                                    <button class="card__fav">
                                        <span class="icon-heart"></span>
                                    </button>
                                    <img
                                        src="./assets/img/holiday_0.png"
                                        alt="event name"
                                        class="card__img"
                                    />
                                </div>
                                <div class="card__info">
                                    <div class="card__row">
                                        {/* <!-- <div class="card__rating"><span class="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                                        <div class="vibes">
                                            <img
                                                src="./assets/img/overwhelmed.svg"
                                                alt="Overwhelmed"
                                                class="vibes__icon"
                                            />
                                            <span class="vibes__text">
                                                Overwhelmed
                                            </span>
                                        </div>
                                        <div class="card__date">Nov 10-29</div>
                                    </div>
                                    <h3 class="card__title">
                                        Surfing at leasure
                                    </h3>
                                    <div class="card__price">
                                        AED 1800 per person
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="card__item">
                            <a href="#" class="card__link">
                                <div class="card__thumb">
                                    <button class="card__fav">
                                        <span class="icon-heart"></span>
                                    </button>
                                    <img
                                        src="./assets/img/Event-Banner.png"
                                        alt="event name"
                                        class="card__img"
                                    />
                                </div>
                                <div class="card__info">
                                    <div class="card__row">
                                        {/* <!-- <div class="card__rating"><span class="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                                        <div class="vibes">
                                            <img
                                                src="./assets/img/overwhelmed.svg"
                                                alt="Overwhelmed"
                                                class="vibes__icon"
                                            />
                                            <span class="vibes__text">
                                                Overwhelmed
                                            </span>
                                        </div>
                                        <div class="card__date">Nov 10-29</div>
                                    </div>
                                    <h3 class="card__title">
                                        Swimming game for below 18 year kids
                                    </h3>
                                    <div class="card__price">
                                        AED 1800 per person
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Recommendations;
