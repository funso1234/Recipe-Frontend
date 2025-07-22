import React from "react";
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {

    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Loerem ipsum dolor sit amet consectetur. Maecenas adipiscing elit, sed diam.",
        },
        {
            image: ChooseMeals,
            title: "Choose Now Often",
            text: "Loerem ipsum dolor sit amet consectetur. Maecenas adipiscing elit.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Delivery",
            text: "Loerem ipsum dolor sit amet consectetur. Maecenas adipiscing diam.",
        },
    ]
    return <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <p className="primary-heading">How It Works</p>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. Maecenas adipiscing elit.
            </p>
        </div>
        <div className="work-section-bottom">
            {
                workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt=""/>
                        </div>
                        <h2>{data.title}</h2>
                        <h2>{data.text}</h2>
                    </div>
                ))
            }
        </div>
    </div>
}
export default Work;