import icons from "./icons";
import images from "./images";
import { COLORS, FONTS } from "./theme";

const services = [
  {
    icon: icons.itinerary,
    name: "Itinerary",
  },
  {
    icon: icons.flights,
    name: "Flights",
  },
  {
    icon: icons.packHelp,
    name: "Pack Help",
  },
  {
    icon: icons.leisure,
    name: "Leisure",
  },
  {
    icon: icons.shortStay,
    name: "Short Stay",
  },
  {
    icon: icons.map,
    name: "Map",
  },
  {
    icon: icons.resturants,
    name: "Resturants",
  },
  {
    icon: icons.drinks,
    name: "Drinks",
  },
  {
    icon: icons.weather,
    name: "Weather",
  },
];

const savedPlans = [
  {
    name: "Australia",
    img: images.australia,
    features: [
      "Royal Air Maroc",
      "Brunswick Hotel",
      "2 mini tours",
      "Two items Packed",
    ],
    isCompleted: false,
    completedPercentage: 10,
  },
  {
    name: "Paris",
    img: images.paris,
    features: ["Emirate", "Air BnB", "2 mini tours", "15 items Packed"],
    isCompleted: false,
    completedPercentage: 90,
  },
  {
    name: "Seychelles",
    img: images.seychelles,
    features: [
      "Qatar Airways",
      "Bayview Seychelles",
      "Sun bathing & Scuna...",
      "All items Packed",
    ],
    isCompleted: true,
  },
];

export { images, icons, COLORS, FONTS, services, savedPlans };
