import React from "react";
import ProfilePic from "../Assets/Sammy.jpg"
import {AiFillStar} from "react-icons/ai"

const Testimonial = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">
                    Lorem ipsum dolor sit amet, consetetur
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" width="50%"/>
                <p>
                    Lorem ipsum dolor sit amet, consetetur
                    Dolor turpis. Maecenas adipiscing elit.
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <h2>Sam Loco</h2>
            </div>
        </div>
    )
}
export default Testimonial;