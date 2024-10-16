export const events = [
  {
    id: 1,
    title: "Gallery Opening",
    description: "Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.",
    date: "12.07",
    time: "12:00",
    city: "Kyiv",
    priority: "High",
    category: "Art",
    color: "#FF2B77",
    src: require('../images/eventPictures/Rectangle330.jpg'),
    alt: "event image"
  },
  {
    id: 2,
    title: "Innovation Summit",
    description: "Engage in a thought-provoking journey of knowledge and collaboration at our Innovation Summit.",
    date: "12.07",
    time: "12:00",
    city: "Kyiv",
    category: "Conference",
    priority: "Medium",
    color: "#E2A300",
    src: require('../images/eventPictures/Rectangle344.jpg'),
    alt: "event image"
  },
  {
    id: 3,
    title: "Empower Your Creativity",
    description: "Ignite your creativity and nurture your storytelling skills in our immersive Creative Writing Workshop.",
    date: "12.07",
    time: "12:00",
    city: "Kyiv",
    category: "Workshop",
    priority: "High",
    color: "#FF2B77",
    src: require('../images/eventPictures/Rectangle345.jpg'),
    alt: "event image"
  },
  {
    id: 4,
    title: "Summer Soiree",
    description: "Embrace the tropical vibes and escape to paradise at our Beach Luau Extravaganza.",
    date: "12.07",
    time: "12:00",
    city: "Kyiv",
    category: "Party",
    priority: "High",
    color: "#FF2B77",
    src: require('../images/eventPictures/Rectangle346.jpg'),
    alt: "event image"
  },
  {
    id: 5,
    title: "Leadership Conference",
    description: "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    date: "13.07",
    time: "12:00",
    city: "Kyiv",
    category: "Business",
    priority: "Medium",
    color: "#E2A300",
    src: require('../images/eventPictures/Rectangle347.jpg'),
    alt: "event image"
  },
  {
    id: 6,
    title: "Tech Startup Showcase",
    description: "Witness the future of technology as innovative startups showcase their groundbreaking ideas.",
    date: "15.07",
    time: "12:00",
    city: "Kyiv",
    category: "Workshop",
    priority: "Low",
    color: "#6BD475",
    src: require('../images/eventPictures/Rectangle348.jpg'),
    alt: "event image"
  },
  {
    id: 7,
    title: "Acoustic Garden Concert",
    description: "Experience the magic of live music amidst the serene beauty of nature at our Acoustic Garden Concert.",
    date: "12.07",
    time: "12:00",
    city: "Kyiv",
    category: "Music",
    priority: "High",
    color: "#FF2B77",
    src: require('../images/eventPictures/Rectangle349.jpg'),
    alt: "event image"
  },
  {
    id: 8,
    title: "Extreme Adventure Race",
    description: "Calling all thrill-seekers! Embark on an adrenaline-pumping journey at our Extreme Adventure Race.",
    date: "12.07",
    time: "12:00",
    city: "Kyiv",
    category: "Sport",
    priority: "Low",
    color: "#6BD475",
    src: require('../images/eventPictures/Rectangle350.jpg'),
    alt: "event image"
  },
];

export function addNewEvent(newEvent) {
  events.push(newEvent);
}