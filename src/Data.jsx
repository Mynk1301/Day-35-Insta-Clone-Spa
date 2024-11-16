const Data = [
  {
    name: "Aarav Sharma",
    profession: "Software Engineer",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=60",
    followers: 1200,
    following: 300,
    username: "aarav.sharma",
    description: "Passionate about building scalable software and learning new technologies.",
    posts:[
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400",
        caption: "Sunsets at Santorini 🇬🇷 #TravelGoals",
        likes: 580,
        posted: "1-06-2023"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        caption: "A little self-care goes a long way ✨ #SelfLove",
        likes: 340,
        posted: "12-06-2023"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
        caption: "Morning workout 🏋️ #NoExcuses",
        likes: 450,
        posted: "10-06-2023"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1731445516807-46c5d43c8f82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
        caption: "Healthy meal prep 🍲 #CleanEating",
        likes: 330,
        posted: "8-06-2023"
      },
      {
        id: 5,
        image: "https://plus.unsplash.com/premium_photo-1677362425101-a11ef7eaae03?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
        caption: "City vibes in Paris 🥐 #ParisDiaries",
        likes: 660,
        posted: "5-06-2023"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1731407938169-38633d8a6dd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
        caption: "Staying fit with my morning routine 💪 #FitnessGoals",
        likes: 720,
        posted: "05-07-2023"
      },
      {
        id: 7,
        image: "https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
        caption: "Nature walk for the soul 🌱 #Mindfulness",
        likes: 400,
        posted: "8-06-2023"
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=400",
        caption: "Sketching the night away 🎨 #ArtLife",
        likes: 210,
        posted: "5-05-2023"
      },
      {
        id: 9,
        image: "https://plus.unsplash.com/premium_photo-1697368110005-d1b5c2a83836?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Fitness is a journey 💪 #FitLife",
        likes: 620,
        posted: "1-07-2023"
      },
      {
        id: 10,
        image: "https://images.unsplash.com/photo-1731243583659-2258b4baf410?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
        caption: "New project preview 🖼️ #ArtPreview",
        likes: 450,
        posted: "05-08-2023"
      }
    ]
  },

  {
    name: "Liam Johnson",
    profession: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400",
    followers: 950,
    following: 420,
    username: "liam.johnson",
    description: "Creating visual stories through art and design.",
    posts: [
      { id: 11, image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=400", caption: "Sketching the night away 🎨 #ArtLife", likes: 210, posted: "5-05-2023" },
      { id: 12, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400", caption: "Exploring color palettes 🌈 #DesignInspiration", likes: 120, posted: "3-06-2023" },
      { id: 13, image: "https://images.unsplash.com/photo-1731432249224-942197e64524?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D", caption: "Outdoor sketching session 🌅 #ArtOutside", likes: 190, posted: "1-07-2023" },
      { id: 14, image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400", caption: "Design process insights 💡 #BehindTheScenes", likes: 310, posted: "5-07-2023" },
      { id: 15, image: "https://images.unsplash.com/photo-1727775447812-117baa795bcf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D", caption: "New project preview 🖼️ #ArtPreview", likes: 450, posted: "05-08-2023" }
    ]
  },
  {
    name: "Olivia Brown",
    profession: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    followers: 2300,
    following: 510,
    username: "olivia.brown",
    description: "Exploring the world, one city at a time.",
    posts: [
      { id: 16, image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400", caption: "Sunsets at Santorini 🇬🇷 #TravelGoals", likes: 580, posted: "5-06-2023" },
      { id: 17, image: "https://images.unsplash.com/photo-1720048171527-208cb3e93192?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cGN8ZW58MHx8MHx8fDA%3D", caption: "City vibes in Paris 🥐 #ParisDiaries", likes: 660, posted: "5-06-2023" },
      { id: 18, image: "https://images.unsplash.com/photo-1603969409447-ba86143a03f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGN8ZW58MHx8MHx8fDA%3D", caption: "Beach day in Bali 🌊 #IslandLife", likes: 720, posted: "10-07-2023" },
      { id: 19, image: "https://images.unsplash.com/photo-1635514569148-7a8b9b63d63f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGN8ZW58MHx8MHx8fDA%3D", caption: "Exploring the Swiss Alps 🏔️ #MountainLife", likes: 540, posted: "2-07-2023" },
      { id: 20, image: "https://plus.unsplash.com/premium_photo-1678565546661-bf43274dd428?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBjfGVufDB8fDB8fHww", caption: "Safari adventure in Kenya 🦁 #Wildlife", likes: 830, posted: "3-07-2023" }
    ]
  },
  {
    name: "Noah Evans",
    profession: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
    followers: 3100,
    following: 560,
    username: "noah.evans",
    description: "Helping you achieve your best self.",
    posts: [
      { id: 21, image: "https://images.unsplash.com/photo-1488134684157-fea2d81a5ec4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D", caption: "Morning workout 🏋️ #NoExcuses", likes: 450, posted: "10-06-2023" },
      { id: 22, image: "https://images.unsplash.com/photo-1671418203939-c54f3ec6f9f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFtYm98ZW58MHx8MHx8fDA%3D", caption: "Healthy meal prep 🍲 #CleanEating", likes: 330, posted: "1-06-2023" },
      { id: 23, image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400", caption: "Stay hydrated 💧 #HealthTips", likes: 280, posted: "8-06-2023" },
      { id: 24, image: "https://images.unsplash.com/photo-1648594756894-151b3eb89400?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFtYm98ZW58MHx8MHx8fDA%3D", caption: "Outdoor run 🌲 #Running", likes: 500, posted: "05-07-2023" },
      { id: 25, image: "https://images.unsplash.com/photo-1622481585786-96f376c5d564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbWJvfGVufDB8fDB8fHww", caption: "Fitness is a journey 💪 #FitLife", likes: 620, posted: "5-07-2023" }
    ]
  },
  {
    name: "Emma Watson",
    profession: "Lifestyle Blogger",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
    followers: 1500,
    following: 230,
    username: "emma.watson",
    description: "Curating life with style and grace.",
    posts: [
      { id: 26, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", caption: "A little self-care goes a long way ✨ #SelfLove", likes: 340, posted: "12-06-2023" },
      { id: 27, image: "https://images.unsplash.com/photo-1525394737913-7072174ccfd3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFjaW5nJTIwYmlrZXN8ZW58MHx8MHx8fDA%3D", caption: "Organized workspace 🖥️ #Productivity", likes: 290, posted: "8-06-2023" },
      { id: 28, image: "https://images.unsplash.com/photo-1516906233847-e379772c9085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFjaW5nJTIwYmlrZXN8ZW58MHx8MHx8fDA%3D", caption: "Nature walk for the soul 🌱 #Mindfulness", likes: 400, posted: "8-06-2023" },
      { id: 29, image: "https://images.unsplash.com/photo-1489731007795-388eee095ff6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFjaW5nJTIwbW90b3JiaWtlc3xlbnwwfHwwfHx8MA%3D%3D", caption: "Delicious brunch 🥞 #Foodie", likes: 380, posted: "10-07-2023" },
      { id: 30, image: "https://images.unsplash.com/photo-1529178049551-f9c70bdd8f6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhY2luZyUyMG1vdG9yYmlrZXN8ZW58MHx8MHx8fDA%3D", caption: "Summer vibes 🌸 #ChillTime", likes: 420, posted: "05-07-2023" }
    ]
  }
  // Repeat similar patterns for remaining users.
];







export default  Data;





