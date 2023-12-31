import React from "react";
import './home.css';
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <div className="bg-container">
                <div className="main-sub-container">
                        <div className="main-description-container">
                            <h1>Eclectic Style Collection</h1>
                            <p>Artwork To mix with Textures,time periods,trends, and color Tones.</p>
                            <Link to="/display">
                                <button className="shop-btn">Shop The Collection       
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg>
                                </button>
                            </Link>
                        </div>
                </div>
            </div>
            <div>
                <h1 className="popular-medium-heading">Popular Mediums</h1>
                <div className="cards-container">
                    <div className="card-with-heading">
                        <div className="each-card-container">
                            <img src="https://artist.com/photos/arts/big/-love-couple-original-oil-painting--104083277.jpg" height="200px" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Oil Paintings</h5>
                                <p class="card-text">Oil paintings are artworks made by blending colored pigments with a special type of oil.</p>
                                <Link to="/display" class="btn btn-dark">See All</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-with-heading">
                        <div className="each-card-container">
                            <img src="https://skyryedesign.com/wp-content/uploads/2023/02/image-11.png" height="200px" class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Watercolor Paintings</h5>
                                <p class="card-text">Watercolor paintings are beautiful artworks made by using pigments mixed with water.</p>
                                <Link to="/display" class="btn btn-dark">See All</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-with-heading">
                        <div className="each-card-container">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKJYACfAay7gLctdJO79xF3ufd1bQ712JOQ&usqp=CAU" class="card-img-top" height="200px" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Acrylic Paintings</h5>
                                <p class="card-text">Acrylic paintings are vibrant and versatile artworks crafted with a type of paint that dries quickly.</p>
                                <Link to="/display" class="btn btn-dark">See All</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-container">
                <img className="about-image" src="https://a.storyblok.com/f/165154/1280x720/1d75d692c3/hero-image_1280x720-3.jpg/m/"></img>
                <p className="about-description">Welcome to Our Art Gallery, where creativity knows no bounds. Our gallery is more than just a virtual space; it's a celebration of art in all its forms. Established with a passion for connecting artists and art enthusiasts worldwide, we strive to create a platform that transcends boundaries and fosters a deep appreciation for the beauty of human expression.

                At our Gallery, we curate a diverse collection of artworks that reflect the richness and diversity of the global art scene. From established masters to emerging talents, we believe that every artist has a unique voice, and every artwork tells a story. Our mission is to provide a space where these voices can be heard and these stories can be shared.</p>
            </div>
        </div>
    )
}

export default Home