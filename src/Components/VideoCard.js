import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export const VideoCard = (props) => {  
    const styles = {
        backgroundColor : props.bgColor
    }
    return (
        <div className="video-card" style={styles}>
            <figure>
                <img src={props.imgSrc}/>
            </figure>
            <div className="body-text">
                <div  className="heading-text">{props.headingText}</div>
                <p>{props.paragraph}</p>
            </div>
            <button>Learn more</button>   
        </div>
    )
}