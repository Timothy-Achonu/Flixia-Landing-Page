import React from "react";


export const VideoCard = (props) => {  
    const styles = {
        backgroundColor : props.bgColor
    }
    return (
        <div className="video-card" style={styles}>
            <figure>
                <img src={props.imgSrc} alt={props.headingText}/>
            </figure>
            <div className="body-text">
                <div  className="heading-text">{props.headingText}</div>
                <p>{props.paragraph}</p>
            </div>
            <button>Learn more</button>   
        </div>
    )
}