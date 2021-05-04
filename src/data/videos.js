const allVideos = [
  {
    id: "FT143",
    name: "20 MIN FULL BODY WORKOUT",
    image: "https://img.youtube.com/vi/UBMk30rjy0o/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/UBMk30rjy0o",
    channel: "Pamela Reif",
    views: "43M views",
    uploaded: "2 years ago",
    cateogory: "Home Workout",
  },
  {
    id: "FT156",
    name: "BURN FAT FAST From Home | No Equipment",
    image: "https://img.youtube.com/vi/jzUpUe29lXI/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/jzUpUe29lXI",
    channel: "CHRIS HERIA",
    views: "1M views",
    uploaded: "1 years ago",
    cateogory: "fat burning",
  },
  {
    id: "FT146",
    name: "Easy Yoga Class for Athletes to Boost Recovery",
    image: "https://img.youtube.com/vi/rsuO6K2RUtI/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/rsuO6K2RUtI",
    channel: "Breathe&Flow",
    views: "364K views",
    uploaded: "1 years ago",
    cateogory: "yoga",
  },

  {
    id: "FT142",
    name: "Day 1 | 30 Minute at Home Strength Workout | Clutch Life",
    image: "https://img.youtube.com/vi/YdB1HMCldJY/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/YdB1HMCldJY",
    channel: "BodyBuilding.com",
    views: "17M views",
    uploaded: "5 years ago",
    cateogory: "gym",
  },
  {
    id: "FT101",
    name: "30-Minute HIIT Cardio - No Equipment at Home | SELF",
    image:
      "https://i.ytimg.com/vi/ml6cT4AZdqI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2Yakf4nieopGux521AsbN50n9ig",
    videoLink: "https://www.youtube.com/embed/ml6cT4AZdqI",
    channel: "SELF",
    cateogory: "Home Workout",
  },

  {
    id: "FT144",
    name: " Min Daily Yoga Routine for Beginners",
    image: "https://img.youtube.com/vi/s2NQhpFGIOg/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/s2NQhpFGIOg",
    channel: "FitTuber",
    views: "10M views",
    uploaded: "1 years ago",
    cateogory: "yoga",
  },
  {
    id: "FT145",
    name: "20 min Full Body STRETCH/YOGA for STRESS & ANXIETY Relief",
    image: "https://img.youtube.com/vi/sTANio_2E0Q/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/sTANio_2E0Q",
    channel: "MadFit",
    views: "7.9M views",
    uploaded: "1 years ago",
    cateogory: "yoga",
  },

  {
    id: "FT147",
    name: "30-Minute STRONG by Zumba® Cardio and Full-Body Toning Workout",
    image: "https://img.youtube.com/vi/QRZcZgSgSHI/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/QRZcZgSgSHI",
    channel: "PopSugarFitness",
    views: "7.8M views",
    uploaded: "1 years ago",
    cateogory: "zumba",
  },
  {
    id: "FT148",
    name: "Morning Routine to Burn Belly Fat | 22 MIN Beginner Friendly ",
    image: "https://img.youtube.com/vi/GDKXYnhOuiY/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/GDKXYnhOuiYI",
    channel: "ZumbaClass",
    views: "3.8M views",
    uploaded: "10months ago",
    cateogory: "zumba",
  },
  {
    id: "FT149",
    name: "Exercise To Lose Weight FAST || Zumba Class",
    image: "https://img.youtube.com/vi/vG_Bs0QLc3I/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/vG_Bs0QLc3I",
    channel: "ZumbaClass",
    views: "32M views",
    uploaded: "1 years ago",
    cateogory: "zumba",
  },
  {
    id: "FT150",
    name: "BEST Aerobics WORKOUT At HOME || 15 MIN Workout for WEIGHT LOSS",
    image: "https://img.youtube.com/vi/aTGb9NEH2NI/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/aTGb9NEH2NI",
    channel: "Mukti Gautam",
    views: "5.9M views",
    uploaded: "1 years ago",
    cateogory: "aerobics",
  },
  {
    id: "FT151",
    name:
      "https://www.youtube.com/watch?v=tj9d6aBOzDo&ab_channel=ShemarooGoodHealth24%2F7",
    image: "https://img.youtube.com/vi/tj9d6aBOzDo/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/tj9d6aBOzDo",
    channel: "Shemaroo Good Health 24/7",
    views: "67M views",
    uploaded: "6 years ago",
    cateogory: "aerobics",
  },
  {
    id: "FT152",
    name: "30-Minute Standing Cardio Workout",
    image: "https://img.youtube.com/vi/-YJXpabrX4k/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/-YJXpabrX4k",
    channel: "PopSugarFitness",
    views: "47M views",
    uploaded: "2 years ago",
    cateogory: "cardio",
  },
  {
    id: "FT153",
    name: "15 MIN BEGINNER CARDIO Workout",
    image: "https://img.youtube.com/vi/VWj8ZxCxrYk/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/VWj8ZxCxrYk",
    channel: "MadFit",
    views: "1.2M views",
    uploaded: "6months ago",
    cateogory: "cardio",
  },
  {
    id: "FT154",
    name: "10 minute POWER CARDIO Workout",
    image: "https://img.youtube.com/vi/LCOy-6BcRkI/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/LCOy-6BcRkI",
    channel: "Heather Robertson",
    views: "792K views",
    uploaded: "10 months ago",
    cateogory: "cardio",
  },
  {
    id: "FT155",
    name: "10 MINUTE FAT BURNING MORNING ROUTINE",
    image: "https://img.youtube.com/vi/7KSNmziMqog/maxresdefault.jpg",
    videoLink: "https://www.youtube.com/embed/7KSNmziMqog",
    channel: "RowanRow",
    views: "23M views",
    uploaded: "9months ago",
    cateogory: "fat burning",
  },
  {
    id: "FT104",
    name: "30-Minute Bodyweight Abs Workout - HIIT Cardio At Home | SELF",
    image:
      "https://i.ytimg.com/vi/YJVtJMIQmkU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCDdxIbB4cmd_yL8djITaMAbO74yg",
    videoLink:
      "https://www.youtube.com/embed/YJVtJMIQmkU?list=PL7Ax6CP9_hgOYc7jvUgz6ClmBh3DHdwu9",
    channel: "Home Workout",
  },
  {
    id: "FT141",
    name: "No Gym Full Chest Workout At Home",
    image: "https://img.youtube.com/vi/qml_YVfm0z0/sddefault.jpg",
    videoLink: "https://www.youtube.com/embed/qml_YVfm0z0",
    channel: "Yash Anand",
    views: "28M views",
    uploaded: "1 years ago",
    cateogory: "Home workout",
  },
];

export default allVideos;
