// ExhibitionDetail.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import { exhibitionData } from "./OldExhibitions";
import './ExhibitionDetail.css';

const ExhibitionDetail = () => {
  const { exhibitionId } = useParams();
  const exhibition = exhibitionData[exhibitionId];

  if (!exhibition) {
    return <div>Exhibition not found</div>;
  }

  return (
    <div className="text-center">
        <img src={exhibition.imageSrc} className="banner-image"></img>
        <div className="top-container">
            <h1>{exhibition.title}</h1>
            <h6>Date: {exhibition.date}</h6>
            <p>{exhibition.description}</p>
        </div>
      <strong>Curator:</strong>{exhibition.curator}

        <div>
            <h2 className="mt-3">Artists Participated</h2>
            <ul className="artists-bio-container">
                {exhibition.artists.map((artist, index) => (
                <li key={index}>
                    <img src={artist.profileImage} className="profile-image-artist"></img>
                    <p><strong>{artist.name}</strong></p>
                    <p>{artist.bio}</p>
                </li>
                ))}
            </ul>
        </div>
        
        <h2>Artworks Exhibited</h2>
        <div className="artworks-container">
            {exhibition.artworks.map((artwork, index) => (
                <div key={index}>
                <h3>Title: {artwork.title}</h3>
                <div className="artwork-images-container">
                    <img src={artwork.ArtworkImage} className="Artwork-image"></img>
                    <img src={artwork.ArtworkImage1} className="Artwork-image"></img>
                </div>
                <p>Materials Used: {artwork.materialsUsed}</p>
                <p>{artwork.description}</p>
                </div>
            ))}
        </div>

      <h2>Description/Theme:</h2>
      <p>{exhibition.theme}</p>

      <h2>Venue:</h2>
      <p>{exhibition.venue}</p>

      <h2>Event Highlights:</h2>
      <p>Opening Night Reception: {exhibition.openingNight}</p>
      <p>Artist Talks: {exhibition.artistTalks}</p>
      <p>Visitor Feedback: {exhibition.visitorFeedback}</p>

      <Link to='/oldexhibitions'>View All Exhibitions</Link>
    </div>
  );
};

export default ExhibitionDetail;
