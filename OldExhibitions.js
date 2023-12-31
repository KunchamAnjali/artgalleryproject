import React from "react";
import './pastexhibitions.css';
import { Link } from "react-router-dom";

// OldExhibitions.js
const exhibitionData = [
  {
    //example1
    imageSrc: "https://thumbs.dreamstime.com/b/creative-paper-art-environmental-conservation-celebrating-world-environment-day-world-water-day-earth-s-water-creative-276308440.jpg",
    title: "Sustainability in Art: Eco-Friendly Creations",
    date: "26/07/2023-26/08/2023",
    description: "The 'Sustainability in Art: Eco-Friendly Creations' exhibition is a compelling exploration of artistic expressions that align with environmental consciousness. Each featured artwork is created using sustainable materials, highlighting the artists' commitment to eco-friendly practices.",
    curator: "James Williams",
    artists: [
      { 
        name: "Sirisha",
        bio: "passionate environmentalist and artist. .",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist1_profile_page",
      },
      { 
        name: "Asha",
        bio: "passionate environmentalist and artist. ",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist2_profile_page",
      },
      { 
        name: "Anjali",
        bio: "passionate environmentalist and artist.  ",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist2_profile_page",
      }
    ],
    artworks: [
      {
        title: "Artwork 1",
        ArtworkImage : "https://www.artlex.com/wp-content/uploads/2022/04/6DA2415C-16C2-4983-A3D4-F2AB0030E6E8.jpeg",
        ArtworkImage1 : "https://www.artlex.com/wp-content/uploads/2022/04/808D73E2-6ED3-4476-8419-0A26FD70B931.jpeg",
        materialsUsed: "Recycled paper, wood",
        description: "A thought-provoking piece reflecting the delicate balance between nature and human impact.",
      },
      {
        title: "Artwork 2",
        ArtworkImage : "https://www.artlex.com/wp-content/uploads/2022/04/6DA2415C-16C2-4983-A3D4-F2AB0030E6E8.jpeg",
        ArtworkImage1 : "https://www.artlex.com/wp-content/uploads/2022/04/808D73E2-6ED3-4476-8419-0A26FD70B931.jpeg",
        materialsUsed: "Upcycled plastic, metal",
        description: "An exploration of the beauty that can emerge from materials typically considered waste.",
      },
    ],
    theme: "The 'Sustainability in Art: Eco-Friendly Creations' exhibition...",
    venue: " Art Gallery",
    pressReleases: "Read the latest press release [here].",
    openingNight: "July 26, 2023, at 6:00 PM",
    artistTalks: "Scheduled artist talks every weekend during the exhibition period.",
    visitorFeedback: "Visitors were impressed by the innovative use of sustainable materials and the powerful messages conveyed through the artworks.",
  },
  //example2
  {
    imageSrc: "https://img.freepik.com/premium-vector/freeform-expressions-nature-abstract-watercolor-exploration_978250-2063.jpg?w=2000",
    title: "Whimsical Wonders: Fantasy Art Extravaganza",
    date: "05/10/2024-05/11/2024",
    description: "Step into the realm of imagination with 'Whimsical Wonders: Fantasy Art Extravaganza.' Let your mind wander as artists bring fantastical worlds and creatures to life....",
    curator: "John Curator",
    artists: [
      { 
        name: "Sirisha",
        bio: "passionate environmentalist and artist. .",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist1_profile_page",
      },
      { 
        name: "Asha",
        bio: "passionate environmentalist and artist. ,",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist2_profile_page",
      },
      { 
        name: "Anjali",
        bio: "passionate environmentalist and artist. , ",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist2_profile_page",
      }
    ],
    artworks: [
      {
        title: "Artwork 1",
        ArtworkImage : "https://www.artlex.com/wp-content/uploads/2022/04/6DA2415C-16C2-4983-A3D4-F2AB0030E6E8.jpeg",
        ArtworkImage1 : "https://www.artlex.com/wp-content/uploads/2022/04/808D73E2-6ED3-4476-8419-0A26FD70B931.jpeg",
        materialsUsed: "Recycled paper, wood",
        description: "A thought-provoking piece reflecting the delicate balance between nature and human impact.",
      },
      {
        title: "Artwork 2",
        ArtworkImage : "https://www.artlex.com/wp-content/uploads/2022/04/6DA2415C-16C2-4983-A3D4-F2AB0030E6E8.jpeg",
        ArtworkImage1 : "https://www.artlex.com/wp-content/uploads/2022/04/808D73E2-6ED3-4476-8419-0A26FD70B931.jpeg",
        materialsUsed: "Upcycled plastic, metal",
        description: "An exploration of the beauty that can emerge from materials typically considered waste.",
      },
    ],
    theme: "The 'Sustainability in Art: Eco-Friendly Creations' exhibition...",
    venue: " Art Gallery",
    pressReleases: "Read the latest press release [here].",
    openingNight: "July 26, 2023, at 6:00 PM",
    artistTalks: "Scheduled artist talks every weekend during the exhibition period.",
    visitorFeedback: "Visitors were impressed by the innovative use of sustainable materials and the powerful messages conveyed through the artworks.",
  },
  // Example 3
  {
    imageSrc: "https://img.freepik.com/premium-photo/portrait-beautiful-girl-with-flowers-her-hair-digital-painting_856795-215.jpg",
    title: "Digital Art Revolution",
    date: "15/09/2023-15/10/2023",
    description: "Discover the cutting-edge world of digital art with our 'Digital Art Revolution' exhibition. Immerse yourself in the vibrant and dynamic works that redefine traditional artistic boundaries.",
    curator: "Emily Curator",
    artists: [
      { 
        name: "Sirisha",
        bio: "passionate environmentalist and artist. .",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist1_profile_page",
      },
      { 
        name: "Asha",
        bio: "passionate environmentalist and artist. , ",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist2_profile_page",
      },
      { 
        name: "Anjali",
        bio: "passionate environmentalist and artist. , ",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist2_profile_page",
      }
    ],
    artworks: [
      {
        title: "Digital Artwork 1",
        ArtworkImage : "https://www.artlex.com/wp-content/uploads/2022/04/6DA2415C-16C2-4983-A3D4-F2AB0030E6E8.jpeg",
        ArtworkImage1 : "https://www.artlex.com/wp-content/uploads/2022/04/808D73E2-6ED3-4476-8419-0A26FD70B931.jpeg",
        materialsUsed: "Digital media",
        description: "An exploration of the limitless possibilities in the digital realm, showcasing the fusion of technology and artistic expression.",
      },
      {
        title: "Digital Artwork 2",
        ArtworkImage : "https://www.artlex.com/wp-content/uploads/2022/04/6DA2415C-16C2-4983-A3D4-F2AB0030E6E8.jpeg",
        ArtworkImage1 : "https://www.artlex.com/wp-content/uploads/2022/04/808D73E2-6ED3-4476-8419-0A26FD70B931.jpeg",
        materialsUsed: "Algorithmic design",
        description: "Artworks generated through algorithmic processes, pushing the boundaries of what is traditionally considered 'art.'",
      },
    ],
    theme: "Immerse yourself in the vibrant and dynamic works...",
    venue: "TechArt Gallery",
    pressReleases: "Visit our website for the latest press releases.",
    openingNight: "September 15, 2023, at 7:00 PM",
    artistTalks: "Join us for insightful discussions with the digital artists every Saturday.",
    visitorFeedback: "Visitors were fascinated by the innovative use of technology and its impact on the art world.",
  },
  // Example 4
  {
    imageSrc: "https://obj.shine.cn/files/2021/10/29/11b60328-76b5-40e6-8d08-e0b6e0bd254b_0.jpg",
    title: "Impressionist Masterpieces",
    date: "05/11/2023-05/12/2023",
    description: "Step back in time and experience the beauty of Impressionist Masterpieces. This exhibition showcases the timeless works of renowned artists who pioneered the Impressionist movement.",
    curator: "Olivia Curator",
    artists: [
      { 
        name: "Sirisha",
        bio: "passionate environmentalist and artist. .",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist1_profile_page",
      },
      { 
        name: "Asha",
        bio: "passionate environmentalist and artist. , ",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist2_profile_page",
      },
      { 
        name: "Anjali",
        bio: "passionate environmentalist and artist. , ",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist2_profile_page",
      }
    ],
    artworks: [
      {
        title: "Masterpiece 1",
        ArtworkImage : "https://www.artlex.com/wp-content/uploads/2022/04/6DA2415C-16C2-4983-A3D4-F2AB0030E6E8.jpeg",
        ArtworkImage1 : "https://www.artlex.com/wp-content/uploads/2022/04/808D73E2-6ED3-4476-8419-0A26FD70B931.jpeg",
        materialsUsed: "Oil on canvas",
        description: "A quintessential example of the Impressionist style, capturing the fleeting beauty of nature through loose brushstrokes.",
      },
      {
        title: "Masterpiece 2",
        ArtworkImage : "https://www.artlex.com/wp-content/uploads/2022/04/6DA2415C-16C2-4983-A3D4-F2AB0030E6E8.jpeg",
        ArtworkImage1 : "https://www.artlex.com/wp-content/uploads/2022/04/808D73E2-6ED3-4476-8419-0A26FD70B931.jpeg",
        materialsUsed: "Watercolor on paper",
        description: "A delicate watercolor piece highlighting the artist's mastery in capturing light and atmosphere.",
      },
    ],
    theme: "Step back in time and experience the beauty of Impressionist Masterpieces...",
    venue: "Timeless Art Museum",
    pressReleases: "Read about the exhibition in the latest art magazines.",
    openingNight: "November 5, 2023, at 6:30 PM",
    artistTalks: "Learn about the history of Impressionism in our weekly educational sessions.",
    visitorFeedback: "Visitors were enchanted by the charm and elegance of the Impressionist artworks.",
  },
  // Example 5
  {
    imageSrc: "https://cdn.openart.ai/uploads/image_M9JUraLy_1687960871828_512.webp",
    title: "Abstract Explorations",
    date: "18/01/2024-18/02/2024",
    description: "Embark on a journey of 'Abstract Explorations' where artists push the boundaries of form and color to create visually stunning and thought-provoking abstract artworks.",
    curator: "Alex Curator",
    artists: [
      { 
        name: "Sirisha",
        bio: "passionate environmentalist and artist. .",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist1_profile_page",
      },
      { 
        name: "Asha",
        bio: "passionate environmentalist and artist. , ",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist2_profile_page",
      },
      { 
        name: "Anjali",
        bio: "passionate environmentalist and artist. , ",
        profileImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
        profileLink: "link_to_artist2_profile_page",
      }
    ],
    artworks: [
      {
        title: "Abstract Artwork X",
        ArtworkImage : "https://www.artlex.com/wp-content/uploads/2022/04/6DA2415C-16C2-4983-A3D4-F2AB0030E6E8.jpeg",
        ArtworkImage1 : "https://www.artlex.com/wp-content/uploads/2022/04/808D73E2-6ED3-4476-8419-0A26FD70B931.jpeg",
        materialsUsed: "Mixed media",
        description: "A captivating mix of textures and colors, challenging traditional notions of representation.",
      },
      {
        title: "Abstract Artwork Y",
        ArtworkImage : "https://www.artlex.com/wp-content/uploads/2022/04/6DA2415C-16C2-4983-A3D4-F2AB0030E6E8.jpeg",
        ArtworkImage1 : "https://www.artlex.com/wp-content/uploads/2022/04/808D73E2-6ED3-4476-8419-0A26FD70B931.jpeg",
        materialsUsed: "Acrylic on canvas",
        description: "A bold and expressive piece that invites viewers to interpret and engage with the artwork on a personal level.",
      },
    ],
    theme: "Embark on a journey of 'Abstract Explorations'...",
    venue: "Gallery of Modern Abstractions",
    pressReleases: "Stay updated with our press releases on social media.",
    openingNight: "January 18, 2024, at 7:30 PM",
    artistTalks: "Join our artists in exploring the nuances of abstract art every Sunday.",
    visitorFeedback: "Visitors were intrigued by the diverse interpretations and emotional impact of abstract artworks.",
  },
];

const OldExhibitions = () => {
  return (
    <div>
        <h3 className="text-center mt-2">No Ongoing Exhibitions</h3>
      {exhibitionData.map((exhibition, index) => (
        <div key={index} className="exhibition-container">
          <img src={exhibition.imageSrc} className="card-image" alt={`Exhibition ${index + 1}`} />
          <div className="description">
            <h3>{exhibition.title}</h3>
            <h6>{exhibition.date}</h6>
            <p>{exhibition.description}</p>
            <Link to={`/exhibitions/${index}`}><button className="btn btn-dark">See More</button></Link>
          </div>
        </div>
      ))}
      <Link to='/exhibitions'><h6 className="text-center description-title">View Upcoming Exhibitions</h6></Link>
    </div>
  );
}

export { exhibitionData, OldExhibitions };
