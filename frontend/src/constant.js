import product from "./assets/img/Product1.png";

import eventImage from "./assets/img/spa_0.png";
import eventImageSvg from "./assets/img/one.svg";
import eventOverwhelmedImg from "./assets/img/overwhelmed.svg";

import userPic from "./assets/img/user1.png";

import imgCard from "./assets/img/trending1.jpg";
import emoji from "./assets/img/overwhelmed.svg";

// const dateString = '2022-01-06';
// const date = new Date(dateString);
// const month = date.toLocaleString('default', { month: 'long' });
// const day = date.getDate();

const notificationData = [
  {
    id: 1,
    name: "Surfing at leasure",
    price: 1800,
    time: "Nov 10-29",
    isCompleted : false,
    isRevieved : false,
    imageUrl: product,
    activity: "We have added a new activity for you.",
     //timeline: "Nov 5",
     timeline:new Date('2022-03-01'),
  },
  {
    id: 2,
    name: "Surfing at leasure",
    price: 1800,
    time: "Nov 10-29",
    imageUrl: product,
    isCompleted : true,
    isRevieved : false,
    activity: "Congratulations Charlie!",
     //timeline: "Nov 5",
     timeline:new Date('2022-02-01'),
  },
  {
    id: 3,
    name: "Surfing at leasure",
    price: 1800,
    time: "Nov 10-29",
    imageUrl: product,
    isCompleted : true,
    isRevieved : true,
    activity: "We have added a new activity for you.",
     //timeline: "Nov 5",
     timeline:new Date('2022-05-01'),
  },
  {
    id: 4,
    name: "Surfing at leasure",
    price: 1800,
    time: "Nov 10-29",
    imageUrl: product,
    isCompleted : false,
    isRevieved : false,
    activity: "We have added a new activity for you.",
     //timeline: "Nov 5",
     timeline:new Date('2022-06-01'),
  },
  {
    id: 5,
    name: "Surfing at leasure",
    price: 1800,
    time: "Nov 10-29",
    imageUrl: product,
    isCompleted : true,
    isRevieved : false,
    activity: "We have added a new activity for you.",
    //timeline: "Nov 5",
    timeline:new Date('2022-07-01'),
  },
  {
    id: 6,
    name: "Surfing at leasure",
    price: 1800,
    time: "Nov 10-29",
    imageUrl: product,
    isCompleted : true,
    isRevieved : true,
    activity: "We have added a new activity for you.",
     //timeline: "Nov 5",
     timeline:new Date('2022-08-01'),
  },
  {
    id: 7,
    name: "Surfing at leasure",
    price: 1800,
    time: "Nov 10-29",
    imageUrl: product,isCompleted : false,
    isRevieved : false,
    activity: "We have added a new activity for you.",
    //timeline: "Nov 5",
    timeline:new Date('2022-09-01'),
  },
  {
    id: 8,
    name: "Surfing at leasure",
    price: 1800,
    time: "Nov 10-29",
    imageUrl: product,
    isCompleted : true,
    isRevieved : false,
    activity: "We have added a new activity for you.",
     //timeline: "Nov 5",
     timeline:new Date('2022-10-01'),
  },
];

const itineraryData = [
  {
      coverImg: require("./assets/img/spa_0.png"),
      title: "Surfing at leasure",
      eventDetails:
          "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
      duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
      location: "Sindalah City",
      category: "Golf",
  },
  {
      coverImg: require("./assets/img/holiday_0.png"),
      title: "Surfing at leasure",
      eventDetails:
          "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
      duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
      location: "Sindalah City",
      category: "Golf",
  },
  {
      coverImg: require("./assets/img/cusine_0.png"),
      title: "Surfing at leasure",
      eventDetails:
          "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
      duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
      location: "Sindalah City",
      category: "Golf",
  },
  {
      coverImg: require("./assets/img/spa_0.png"),
      title: "Surfing at leasure",
      eventDetails:
          "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
      duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
      location: "Sindalah City",
      category: "Golf",
  },
  {
      coverImg: require("./assets/img/holiday_0.png"),
      title: "Surfing at leasure",
      eventDetails:
          "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
      duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
      location: "Sindalah City",
      category: "Golf",
  },
  {
      coverImg: require("./assets/img/cusine_0.png"),
      title: "Surfing at leasure",
      eventDetails:
          "Lorem ipsum dolorum doloribus pariatur maiores incidunt? nihil? Hic perferendis tempore velit magni admaior...",
      duration: "Nov 10, 10:30 AM - Nov 29. 6:30 PM",
      location: "Sindalah City",
      category: "Golf",
  },
];

const experienceData = [
  {
      expressionImg: require("./assets/img/disappointed.svg").default,
      coverImg: require("./assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
          "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
  },
  {
      expressionImg: require("./assets/img/disappointed.svg").default,
      coverImg: require("./assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
          "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
  },
  {
      expressionImg: require("./assets/img/disappointed.svg").default,
      coverImg: require("./assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
          "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
  },
  {
      expressionImg: require("./assets/img/disappointed.svg").default,
      coverImg: require("./assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
          "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
  },
  {
      expressionImg: require("./assets/img/disappointed.svg").default,
      coverImg: require("./assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
          "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
  },
  {
      expressionImg: require("./assets/img/disappointed.svg").default,
      coverImg: require("./assets/img/Event-Banner.png"),
      title: "Indulge in the Finest Epicurean Cuisines",
      dated: "Nov 17, 2022",
      details:
          "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
  },
];

const recommendationData = [
    {
        id: 1,
        eventImage: eventImage,
        eventImageSvg: eventImageSvg,
        eventOverwhelmedImg: eventOverwhelmedImg,
        date: "Nov 291",
        title: "Surfing at leasure",
        price: 11000,
    },
    {
        id: 1,
        eventImage: eventImage,
        eventImageSvg: eventImageSvg,
        eventOverwhelmedImg: eventOverwhelmedImg,
        date: "Nov 291",
        title: "Surfing at leasure",
        price: 11000,
    },
    {
        id: 1,
        eventImage: eventImage,
        eventImageSvg: eventImageSvg,
        eventOverwhelmedImg: eventOverwhelmedImg,
        date: "Nov 291",
        title: "Surfing at leasure",
        price: 11000,
    },
    {
        id: 1,
        eventImage: eventImage,
        eventImageSvg: eventImageSvg,
        eventOverwhelmedImg: eventOverwhelmedImg,
        date: "Nov 291",
        title: "Surfing at leasure",
        price: 11000,
    },
    {
        id: 1,
        eventImage: eventImage,
        eventImageSvg: eventImageSvg,
        eventOverwhelmedImg: eventOverwhelmedImg,
        date: "Nov 291",
        title: "Surfing at leasure",
        price: 11000,
    },
];

const ratingData = [
    // dummy data
    {
        userPic: userPic,
        userName: "Anastasia",
        date: "Nov 2022",
        ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam erat, sed diam voluptua. At vero eos et
  accusam et justo...`,
        rating: "5.0",
        starValue: 5.0,
    },
    {
        userPic: userPic,
        userName: "Anastasia",
        date: "Nov 2022",
        ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam erat, sed diam voluptua. At vero eos et
  accusam et justo...`,
        rating: "5.0",
        starValue: 5.0,
    },
    {
        userPic: userPic,
        userName: "Anastasia",
        date: "Nov 2022",
        ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam erat, sed diam voluptua. At vero eos et
  accusam et justo...`,
        rating: "5.0",
        starValue: 5.0,
    },
    {
        userPic: userPic,
        userName: "Anastasia",
        date: "Nov 2022",
        ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam erat, sed diam voluptua. At vero eos et
  accusam et justo...`,
        rating: "5.0",
        starValue: 5.0,
    },
    {
        userPic: userPic,
        userName: "Anastasia",
        date: "Nov 2022",
        ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam erat, sed diam voluptua. At vero eos et
  accusam et justo...`,
        rating: "5.0",
        starValue: 5.0,
    },
    {
        userPic: userPic,
        userName: "Anastasia",
        date: "Nov 2022",
        ratingDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam erat, sed diam voluptua. At vero eos et
  accusam et justo...`,
        rating: "5.0",
        starValue: 5.0,
    },
];

const eventRecomendationCardData = [
    // dummy data
    {
        cardImage: imgCard,
        emoji: emoji,
        experience: "Overwhelmed",
        date: "Nov 10-29",
        event: "Surfing at leasure",
        cost: "AED 1800 per person",
    },
    {
        cardImage: imgCard,
        emoji: emoji,
        experience: "Overwhelmed",
        date: "Nov 10-29",
        event: "Surfing at leasure",
        cost: "AED 1800 per person",
    },
    {
        cardImage: imgCard,
        emoji: emoji,
        experience: "Overwhelmed",
        date: "Nov 10-29",
        event: "Surfing at leasure",
        cost: "AED 1800 per person",
    },
    {
        cardImage: imgCard,
        emoji: emoji,
        experience: "Overwhelmed",
        date: "Nov 10-29",
        event: "Surfing at leasure",
        cost: "AED 1800 per person",
    },
    {
        cardImage: imgCard,
        emoji: emoji,
        experience: "Overwhelmed",
        date: "Nov 10-29",
        event: "Surfing at leasure",
        cost: "AED 1800 per person",
    },
    {
        cardImage: imgCard,
        emoji: emoji,
        experience: "Overwhelmed",
        date: "Nov 10-29",
        event: "Surfing at leasure",
        cost: "AED 1800 per person",
    },
    {
        cardImage: imgCard,
        emoji: emoji,
        experience: "Overwhelmed",
        date: "Nov 10-29",
        event: "Surfing at leasure",
        cost: "AED 1800 per person",
    },
    {
        cardImage: imgCard,
        emoji: emoji,
        experience: "Overwhelmed",
        date: "Nov 10-29",
        event: "Surfing at leasure",
        cost: "AED 1800 per person",
    },
    {
        cardImage: imgCard,
        emoji: emoji,
        experience: "Overwhelmed",
        date: "Nov 10-29",
        event: "Surfing at leasure",
        cost: "AED 1800 per person",
    },
    {
        cardImage: imgCard,
        emoji: emoji,
        experience: "Overwhelmed",
        date: "Nov 10-29",
        event: "Surfing at leasure",
        cost: "AED 1800 per person",
    },
];


export {notificationData, itineraryData, experienceData, recommendationData, ratingData, eventRecomendationCardData};
