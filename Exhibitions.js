import React from "react";
import './exhibition.css';
import { Link } from "react-router-dom";
export const Exhibition = () => {
    return (
        <div className="main-bg-container">
            <div className="overlay-container">
                <h4>Opening Monday January,24</h4>
                <h1 className="heading">Modern Art Exhibition</h1>
                <p>Time: 9 pm</p>
                <h6>Location: VIRTUAL</h6>
                <Link to='/OldExhibitions'><button  className="ex-button">View Past Exhibitions</button></Link>
            </div>
        </div>
    )
}

export default Exhibition