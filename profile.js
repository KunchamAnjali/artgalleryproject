import React from "react";
import './profile.css';
export const Profile = () => {
    return (
        <div>
            <div className="container-fluid d-flex flex-row justify-content-center">
                <div className="row">
                    <div className="text-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" className="profile-image"></img>
                        <h3>Swarna</h3>
                        <p>self learned artist</p>
                        <p>Comissioned artworks avaible</p>
                        <p>Contact me to Buy</p>
                    </div>
                    <hr></hr>
                    <div className="details-container">
                        <h3>POSTS : 4</h3>
                        Active Challenges : 0
                    </div>
                    <hr className="div-hr-line"></hr>
                    <div>
                        <h1 className="text-center">
                            <img src="https://img.freepik.com/premium-photo/beautiful-watercolor-flowers-painting-pastel-mood_710157-506.jpg?w=2000" height="300" width="300"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CHaCF_K3tt1gpEAz0gBo1mTLGgWwtLi3DA&usqp=CAU" height="300" width="300"/>
                            <img src="https://5.imimg.com/data5/ANDROID/Default/2020/10/ZH/QL/HP/87662716/product-jpeg-500x500.jpg" height="300" width="300"/>
                            <img src="https://www.mayfairgallery.com/media/wysiwyg/a-royal-palace-in-morocco-benjamin-jean-joseph-constant.jpg" height="300" width="300"/></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile