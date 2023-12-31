import React, { useState } from "react";
import './about.css';

export const About = () => {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const [artworksCount, setArtworksCount] = useState(() => getRandomNumber(1000, 2000));
    const [artistsCount, setArtistsCount] = useState(() => getRandomNumber(200, 400));

    return (
        <div>
            <div>
                <h1 className="available-heading">Availability</h1>
                <div className="available-container">
                    <div className="artworks-card">
                        <h3 className="artworks-heading">Artworks</h3>
                        <h1>{artworksCount}+</h1>
                    </div>
                    <div className="artworks-card1">
                        <h3 className="artworks-heading">Artists</h3>
                        <h1>{artistsCount}+</h1>
                    </div>
                </div>
            </div>

            <div className="about-container">
                <img className="about-image" src="https://a.storyblok.com/f/165154/1280x720/1d75d692c3/hero-image_1280x720-3.jpg/m/"></img>
                <p className="about-description">Welcome to Our Art Gallery, where creativity knows no bounds. Our gallery is more than just a virtual space; it's a celebration of art in all its forms. Established with a passion for connecting artists and art enthusiasts worldwide, we strive to create a platform that transcends boundaries and fosters a deep appreciation for the beauty of human expression.

                At our Gallery, we curate a diverse collection of artworks that reflect the richness and diversity of the global art scene. From established masters to emerging talents, we believe that every artist has a unique voice, and every artwork tells a story. Our mission is to provide a space where these voices can be heard and these stories can be shared.</p>
            </div>
        </div>
    );
};

export default About;
