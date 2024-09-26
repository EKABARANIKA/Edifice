import "./card.css";
import React from "react";
export default function Card(props){
    return(
        <div className="card">
            <div className="card-head">
                <p>{props.duration}</p>
                <span>{props.price}</span>
            </div>
            <div className="card-feature">
                <span>{props.featureOne}</span>
                <span>{props.featureTwo}</span>
                <span>{props.featureThree}</span>
                <span>{props.featureFour}</span>
                <span>{props.featureFive}</span>
                <button type="submit">Join this Plan</button>
            </div>
            
        </div>
    )
}