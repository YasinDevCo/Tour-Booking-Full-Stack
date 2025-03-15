import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "پل وست‌مینستر",
    city: "لندن",
    address: "آدرس",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "این توضیحات است",
    reviews: [
      {
        name: "جان دو",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "بالی، اندونزی",
    city: "اندونزی",
    address: "آدرس",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "این توضیحات است",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "کوه‌های برفی، تایلند",
    city: "تایلند",
    address: "آدرس",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "این توضیحات است",
    reviews: [
      {
        name: "جان دو",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "طلوع خورشید زیبا، تایلند",
    city: "تایلند",
    address: "آدرس",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "این توضیحات است",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "نوسا پندیا بالی، اندونزی",
    city: "اندونزی",
    address: "آدرس",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "این توضیحات است",
    reviews: [
      {
        name: "جان دو",
        rating: 4.6,
      },
      {
        name: "جان دو",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "بهار شکوفه‌های گیلاس",
    city: "ژاپن",
    address: "آدرس",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "این توضیحات است",
    reviews: [
      {
        name: "جان دو",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "هولمن لوفوتن",
    city: "فرانسه",
    address: "آدرس",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "این توضیحات است",
    reviews: [
      {
        name: "جان دو",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "کوه‌های برفی، تایلند",
    city: "تایلند",
    address: "آدرس",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "این توضیحات است",
    reviews: [
      {
        name: "جان دو",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
