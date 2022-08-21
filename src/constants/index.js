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

const notifications = [
  {
    id: "notification-1",
    title: "Flight",
    icon: icons.flights,
    cardColor: COLORS.primary,
    message: [
      "The flight to Morocco is cheaper now.",
      "Check Emirates and Air Maroc",
    ],
    btnTitle: "Book Now",
  },
  {
    id: "notification-2",
    title: "Pack Help",
    icon: icons.packHelp,
    cardColor: COLORS.lightPrimary,
    message: [
      "Well done!",
      "You have packed 15 items for you Seychelles Trip, You have 10 more itmems to pack.",
    ],
    btnTitle: "Pack Now",
  },
  {
    id: "notification-3",
    title: "Weather",
    icon: icons.weather,
    cardColor: COLORS.primary,
    message: [
      "Have you checked the weather in seychelles for your planned trip?",
    ],
    btnTitle: "Check Now",
  },
  {
    id: "notification-4",
    title: "Short Stay",
    icon: icons.shortStay,
    cardColor: COLORS.lightPrimary,
    message: [
      "Well done!",
      "You have packed 15 items for you Seychelles Trip, You have 10 more itmems to pack.",
    ],
    btnTitle: "Pack Now",
  },
];

const settings = [
  {
    id: `setting-1`,
    icon: icons.user,
    title: "Profile",
    subtitle: "Manage Changes to your account",
  },
  {
    id: `setting-2`,
    icon: icons.cards,
    title: "Cards",
    subtitle: "Secure your cards for safety",
  },
  {
    id: `setting-3`,
    icon: icons.settings,
    title: "Preferences",
    subtitle: "Customize your app",
  },
  {
    id: `setting-4`,
    icon: icons.logout,
    title: "Logout",
    subtitle: "Logout for your account",
  },
];

export {
  images,
  icons,
  COLORS,
  FONTS,
  services,
  savedPlans,
  notifications,
  settings,
};
