import HeroSectionCar from "@/public/images/HomePageImages/HeroSectionCar.jpeg";
import LatestCarOne from "@/public/images/HomePageImages/LatestCarOne.jpg";
import LatestCarTwo from "@/public/images/HomePageImages/LatestCarTwo.jpg";
import LatestCarThree from "@/public/images/HomePageImages/LatestCarThree.jpg";
import TopSellCarOne from "@/public/images/HomePageImages/TopSellCarOne.jpg";
import TopSellCarTwo from "@/public/images/HomePageImages/TopSellCarTwo.jpg";
import TreasureComponentImageOne from "@/public/images/HomePageImages/TreasureComponentImageOne.jpg";
import TreasureComponentImageTwo from "@/public/images/HomePageImages/TreasureComponentImageTwo.jpg";
import TreasureComponentImageThree from "@/public/images/HomePageImages/TreasureComponentImageThree.jpg";
import TreasureComponentImageFour from "@/public/images/HomePageImages/TreasureComponentImageFour.jpg";
import TreasureComponentImageFive from "@/public/images/HomePageImages/TreasureComponentImageFive.jpg";
import SpotlightImageOne from "@/public/images/HomePageImages/SpotlightImageOne.png";
import ServiceSectionCarOne from "@/public/images/HomePageImages/ServiceSectionCarOne.jpg";
import ServiceSectionCarTwo from "@/public/images/HomePageImages/ServiceSectionCarTwo.jpg";
import ServiceSectionCarThree from "@/public/images/HomePageImages/ServiceSectionCarThree.jpg";
import ServiceSectionCarFour from "@/public/images/HomePageImages/ServiceSectionCarFour.jpg";
import ServiceSectionCarFive from "@/public/images/HomePageImages/ServiceSectionCarFive.jpg";
import ServiceSectionCarSix from "@/public/images/HomePageImages/ServiceSectionCarSix.jpg";
import StockComponentImageOne from "@/public/images/HomePageImages/StockComponentImageOne.png";

// inventory page imports

import InventorySectionImageOne from "@/public/images/InventoryPageImages/InventorySectionImageOne.jpg";
import InventorySectionImageTwo from "@/public/images/InventoryPageImages/InventorySectionImageTwo.jpg";
import InventorySectionImageThree from "@/public/images/InventoryPageImages/InventorySectionImageThree.jpg";
import InventorySectionImageFour from "@/public/images/InventoryPageImages/InventorySectionImageFour.jpg";
import InventorySectionImageFive from "@/public/images/InventoryPageImages/InventorySectionImageFive.jpg";
import InventorySectionImageSix from "@/public/images/InventoryPageImages/InventorySectionImageSix.jpg";
import InventorySectionImageSeven from "@/public/images/InventoryPageImages/InventorySectionImageSeven.jpg";
import InventorySectionImageEight from "@/public/images/InventoryPageImages/InventorySectionImageEight.jpg";
import InventorySectionImageNine from "@/public/images/InventoryPageImages/InventorySectionImageNine.jpg";
import InventorySectionImageTen from "@/public/images/InventoryPageImages/InventorySectionImageTen.jpg";
import InventorySectionImageEleven from "@/public/images/InventoryPageImages/InventorySectionImageEleven.jpg";
import InventorySectionImageTwelve from "@/public/images/InventoryPageImages/InventorySectionImageTwelve.jpg";
import InventorySectionImageThirteen from "@/public/images/InventoryPageImages/InventorySectionImageThirteen.jpg";
import InventorySectionImageFourteen from "@/public/images/InventoryPageImages/InventorySectionImageFourteen.jpg";
import InventorySectionImageFifteen from "@/public/images/InventoryPageImages/InventorySectionImageFifteen.jpg";

// about page imports
import AboutSignatureSectionImage from "@/public/images/AboutPageImages/AboutSignatureSectionImage.jpg";
import AboutPrestigeSectionImageOne from "@/public/images/AboutPageImages/AboutPrestigeSectionImageOne.jpg";
import AboutStorySectionImageOne from "@/public/images/AboutPageImages/AboutStorySectionImageOne.jpg";
import AboutFounderImageOne from "@/public/images/AboutPageImages/AboutFounderImageOne.jpg";

import AboutTeamSectionImageOne from "@/public/images/AboutPageImages/AboutTeamSectionImageOne.jpg";
import AboutTeamSectionImageTwo from "@/public/images/AboutPageImages/AboutTeamSectionImageTwo.jpg";
import AboutTeamSectionImageThree from "@/public/images/AboutPageImages/AboutTeamSectionImageThree.jpg";

// contact page imports

import ContactLocationImage from "@/public/images/ContactPageImages/LocationImage.png";

// start exporting

export const heroSection = {
  image: HeroSectionCar,
  title: "Welcome to Auto Empire!",
  subtitle:
    "Stay informed, stay inspired, and stay ahead with Auto Empire — where your journey begins.",
  description:
    "We're thrilled to have you here at Auto empire, your premier destination for all things automotive. Whether you're looking for expert advice, the latest industry trends, or top-notch services to keep your vehicle in peak condition, you've come to the right place.",
  secondDescription:
    "From routine maintenance to performance upgrades, we’re here to help you drive with confidence. Our team of seasoned professionals is dedicated to delivering excellence, ensuring your car runs as smoothly as the day you got it.",
};

export const latestSection = {
  title: "Discover Our Latest Arrivals",
  description:
    "At Auto empire, we’re excited to present three of the most captivating vehicles that are making waves in the automotive world. Explore the epitome of luxury, the thrill of racing, and the power of SUVs with our latest selections.",
};

export const latestSectionImages = [
  {
    id: "0",
    image: LatestCarOne,
  },
  {
    id: "1",
    image: LatestCarTwo,
  },
  {
    id: "2",
    image: LatestCarThree,
  },
];

export const TopSellSection = {
  title: "Explore Our Top-Selling Vehicles.",
  description:
    "At Auto empire, we’re proud to showcase our top-selling cars, each representing the pinnacle of excellence in their respective categories. Discover why these models have captured the hearts of our customers and continue to lead the way in luxury and performance.",
};

export const TopSellSectionCards = [
  {
    id: "1",
    image: TopSellCarOne,
    model: "Mercedes Benz S Class",
    modelDetails:
      "The S-Class has consistently been a benchmark for luxury sedans, combining advanced technology, superior comfort, and a prestigious brand reputation.",
  },
  {
    id: "2",
    image: TopSellCarTwo,
    model: "Porsche 911 GT3",
    modelDetails:
      "Known for its exceptional track performance, precision engineering, and iconic design, the 911 GT3 has been a top choice among racing enthusiasts and performance car lovers.",
  },
];

export const TreasureSection = {
  title: "Empire Treasure",
  description:
    "Easily track, organize, and manage all your products in one place. This section provides real-time insights into stock levels, item details, and inventory movements to help you stay on top of your supply chain and make informed decisions.",
  imageOne: TreasureComponentImageOne,
  imageFive: TreasureComponentImageTwo,
  imageThree: TreasureComponentImageThree,
  imageFour: TreasureComponentImageFour,
  imageTwo: TreasureComponentImageFive,
};

export const SpotlightSection = {
  title: "Empire Spotlight",
  ImageOne: SpotlightImageOne,
  headline:
    "Auto Empire Launches: A New Digital Kingdom for Car Enthusiasts Worldwide!",
  descriptionOne:
    "Auto Empire has officially hit the road your new go to destination for all things automotive, where passion meets performance across three distinct worlds: Luxury, Racing, and SUVs. Whether you're captivated by the handcrafted elegance of a Mercedes-Benz S-Class, the raw speed of a Porsche 911 GTR, or the commanding presence of a high end SUV, Auto Empire delivers a premium experience tailored to car lovers of every kind.",
  descriptionTwo:
    "This digital showroom isn't just about specs and stats it's about storytelling. From in depth reviews and cutting edge news to lifestyle features and expert insights, Auto Empire puts you in the driver’s seat of a high-octane journey. Our top news coverage tracks global unveilings, motorsport victories, tech innovations, and luxury trends that define the future of driving.",
  descriptionThree:
    "Auto Empire redefines the digital showroom experience—where every car has a story, and every story fuels your passion for the road. Dive into immersive reviews, breaking automotive news, and curated lifestyle content that connects innovation with aspiration. From international debuts to elite motorsport moments and the latest in luxury and tech, we bring you the pulse of the automotive world in motion.",
};

export const EmpireServiceSection = {
  title: "Empire Service Hubs",
  heading: "Where Precision Meets Performance",
  descriptionOne:
    "Discover Auto Empire’s elite network of certified service hubs, built to deliver unmatched care for your luxury, racing, and SUV vehicles. From routine maintenance to advanced diagnostics, your ride is in expert hands.",
  ImageOne: ServiceSectionCarOne,
  ImageTwo: ServiceSectionCarTwo,
  ImageThree: ServiceSectionCarThree,
  ImageFour: ServiceSectionCarFour,
  ImageFive: ServiceSectionCarFive,
  ImageSix: ServiceSectionCarSix,
};

export const StockSection = {
  title: "Smart Stock",
  description:
    "SmartStock is the heart of Auto Empire, powering our curated collection of luxury and racing cars. With precision inventory management, we keep every masterpiece from supercars to track legends ready to move.",
  descriptionTwo:
    "It's the engine behind Auto Empire’s success — a robust inventory system that ensures our lineup of luxury and racing vehicles is always current, accurate, and ready for sale. From acquisition to delivery, our stock is managed with precision to meet the highest standards of automotive excellence.",
  imageOne: StockComponentImageOne,
};

export const FooterSection = {
  title: "Auto Empire",
  description:
    "Discover a curated selection of high-end vehicles from top-tier dealers and private collectors. Whether you're acquiring your next luxury car or showcasing your prized model, experience an elevated standard of automotive excellence.",
};

// Inventory page constants starts:

export const InventorySection = [
  {
    id: 1,
    brand_name: "Mercedes-Benz",
    car_name: "S-Class",
    model_name: "S 580 4MATIC",
    price: 55000000,
    release_year: 2023,
    stock_available: 3,
    image: InventorySectionImageOne,
  },
  {
    id: 2,
    brand_name: "BMW",
    car_name: "7 Series",
    model_name: "740i M Sport",
    price: 49000000,
    release_year: 2023,
    stock_available: 5,
    image_url: InventorySectionImageTwo,
  },
  {
    id: 3,
    brand_name: "Audi",
    car_name: "A8",
    model_name: "A8 L 60 TFSI quattro",
    price: 47000000,
    release_year: 2023,
    stock_available: 2,
    image_url: InventorySectionImageThree,
  },
  {
    id: 4,
    brand_name: "Lexus",
    car_name: "LS",
    model_name: "LS 500h Executive",
    price: 46000000,
    release_year: 2022,
    stock_available: 4,
    image_url: InventorySectionImageFour,
  },
  {
    id: 5,
    brand_name: "Jaguar",
    car_name: "XJ",
    model_name: "XJL Portfolio",
    price: 42000000,
    release_year: 2021,
    stock_available: 1,
    image_url: InventorySectionImageFive,
  },
  {
    id: 6,
    brand_name: "Porsche",
    car_name: "Panamera",
    model_name: "Panamera 4 E-Hybrid",
    price: 53000000,
    release_year: 2023,
    stock_available: 2,
    image_url: InventorySectionImageSix,
  },
  {
    id: 7,
    brand_name: "Tesla",
    car_name: "Model S",
    model_name: "Plaid",
    price: 48000000,
    release_year: 2023,
    stock_available: 6,
    image_url: InventorySectionImageSeven,
  },
  {
    id: 8,
    brand_name: "Bentley",
    car_name: "Flying Spur",
    model_name: "V8",
    price: 75000000,
    release_year: 2023,
    stock_available: 2,
    image_url: InventorySectionImageEight,
  },
  {
    id: 9,
    brand_name: "Rolls-Royce",
    car_name: "Ghost",
    model_name: "Ghost Extended",
    price: 120000000,
    release_year: 2024,
    stock_available: 1,
    image_url: InventorySectionImageNine,
  },
  {
    id: 10,
    brand_name: "Aston Martin",
    car_name: "Rapide",
    model_name: "Rapide AMR",
    price: 68000000,
    release_year: 2022,
    stock_available: 1,
    image_url: InventorySectionImageTen,
  },
  {
    id: 11,
    brand_name: "Maserati",
    car_name: "Quattroporte",
    model_name: "Trofeo",
    price: 59000000,
    release_year: 2023,
    stock_available: 3,
    image_url: InventorySectionImageEleven,
  },
  {
    id: 12,
    brand_name: "Genesis",
    car_name: "G90",
    model_name: "G90 3.5T E-SC",
    price: 43000000,
    release_year: 2023,
    stock_available: 4,
    image_url: InventorySectionImageTwelve,
  },
  {
    id: 13,
    brand_name: "Cadillac",
    car_name: "CT6",
    model_name: "CT6 Platinum",
    price: 41000000,
    release_year: 2021,
    stock_available: 2,
    image_url: InventorySectionImageThirteen,
  },
  {
    id: 14,
    brand_name: "Infiniti",
    car_name: "Q70",
    model_name: "Q70L 5.6 V8",
    price: 39500000,
    release_year: 2020,
    stock_available: 2,
    image_url: InventorySectionImageFourteen,
  },
  {
    id: 15,
    brand_name: "Lucid",
    car_name: "Air",
    model_name: "Grand Touring",
    price: 69000000,
    release_year: 2024,
    stock_available: 2,
    image_url: InventorySectionImageFifteen,
  },
];

// Inventory page constants ends:

// About page constants starts:

export const AboutPrestigeSection = {
  imageOne: AboutPrestigeSectionImageOne,
  heading: "Legacy of Prestige",
  title: "Precision. Power. Prestige.",
  description:
    "At Auto Empire, we unite the elegance of luxury with the thrill of performance. Our showroom features a handpicked selection of the world’s most coveted luxury cars and adrenaline-charged racing machines — each chosen to ignite passion in every kind of driver. From refined cruisers to track-ready beasts, we deliver vehicles that turn heads and dominate roads.",
  descriptionTwo:
    "Every vehicle in our collection is meticulously selected for its design, engineering excellence, and undeniable presence. We source only from the most respected manufacturers and ensure that each model reflects our standards of quality, performance, and exclusivity. From high-end cruisers designed for comfort and status to track-ready beasts built for speed and control, Auto Empire caters to drivers who refuse to compromise.",
  descriptionThree:
    "But what truly sets us apart is the experience. Our team of knowledgeable enthusiasts is here to guide you through every step — whether you're selecting your dream car, customizing performance packages, or seeking expert advice. We believe buying a vehicle should be as exhilarating as driving one.",
};

export const AboutSignatureSection = {
  image: AboutSignatureSectionImage,
  title: "Auto Empire’s Signature",
  discription:
    "At Auto Empire, we don’t just sell luxury cars we deliver a driving experience defined by elegance, innovation, and prestige. Our signature collection represents a fusion of world class engineering and refined design, offering vehicles that embody status, sophistication, and uncompromising performance.",

  question: "Why choose Auto empire?",

  answerOne: "Curated Excellence:",
  answerDis:
    "Each vehicle in our luxury collection is handpicked to ensure it meets the highest standards of quality and craftsmanship.",

  answerTwo: "Personalized Service:",
  answerDisTwo:
    "Our expert team is dedicated to providing you with a personalized experience, offering insights and assistance tailored to your unique preferences.",

  answerThree: "Innovative Technology:",
  answerDisThree:
    "Experience the latest advancements in automotive technology that enhance your driving pleasure and ensure a seamless journey.",

  answerFour: "Unmatched Comfort:",
  answerDisFour:
    "Indulge in the ultimate in luxury and comfort with features designed to make every drive extraordinary.",

  footer:
    "We invite you to explore our collection and discover the car that perfectly aligns with your lifestyle and aspirations. Our team is here to assist you in finding the ideal vehicle that reflects your personal style and meets your highest expectations.",
};

export const AboutStorySection = {
  heading: "Our Story",
  image: AboutStorySectionImageOne,
  title: "Born from Passion, Built for Drivers",
  description:
    "Auto Empire was founded with a simple yet powerful idea: to create a space where automotive passion meets purpose. Frustrated by soulless spec sheets and shallow reviews, our team of car enthusiasts, storytellers, and industry insiders came together to launch a platform that goes beyond the basics. We set out to capture the thrill, emotion, and innovation that fuel the automotive world bringing you not just information, but inspiration. Auto Empire is more than a destination; it’s the start of every great drive.",
};

export const AboutFounderSection = {
  title: "A Word From Our Founder",
  Image: AboutFounderImageOne,
  author: "Jaxon Reeve, Founder of Auto Empire",
  description:
    "I didn’t just grow up loving cars I grew up living them. From late-night races on back roads to early mornings reading every auto magazine I could find, the spark was always there. But as the industry evolved, I noticed something missing: a place where real passion, deep insights, and bold storytelling could come together. That’s why I started Auto Empire.This isn’t just a platform it’s a movement. A digital garage for dreamers, drivers, and disruptors. Whether you're chasing speed, design, innovation, or heritage, you're one of us. Welcome to Auto Empire. Let’s ride into the future together.",
};

export const AboutTeamSection = {
  title: "Faces of the Empire",
  nameOne: "Henry Cavill",
  postOne: "Chief Driving Visionary",
  roleOne: "Head of Brand Strategy",
  nameTwo: "Benedict Cumberbatch",
  postTwo: "Motor Culture Curator",
  roleTwo: "Content Director",
  nameThree: "Andrew Garfield",
  postThree: "Speed & Style Ambassador",
  roleThree: "Brand Ambassador",
  imageOne: AboutTeamSectionImageOne,
  imageTwo: AboutTeamSectionImageTwo,
  imageThree: AboutTeamSectionImageThree,
};

// About page constants ends:

// Contact page constants starts:

export const ContactHeroSection = {
  image: ContactLocationImage,

  title: "Visit Auto Empire",
  discription:
    "Located in the heart of Rome, Auto Empire offers a premium showroom experience where luxury meets convenience. Whether you're stopping by to explore our exclusive car collection or to speak with our expert team, our doors are always open.",
  subtitle: "Opening Hours:",
  openDay: "🕒 Monday–Saturday: 9:00 AM – 7:00 PM",
  Appointment: "🕒 Sunday: By Appointment Only",
};

export const ContactMessageSection = {
  title: "Get in Touch",
  subtitle: "We’re Just a Message Away",
  description:
    "Looking to book a service, schedule a test drive, or have questions about a vehicle? Our team is here to help just send us a message and we’ll respond shortly.",
};

// Contact page constants ends:
