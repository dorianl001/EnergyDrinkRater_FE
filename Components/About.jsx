import React from 'react';

function About(props) {
    return (
        <div className="About">
            
            <div className="image1">
            <img src="https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_timeline_pic/81222d59917/f7e167a90e719f87a9849/1469746366_image.jpg" alt='Man pouring kerosene into blender'/>
            </div>

            <div className="aboutText">
            <h1>About us</h1>
            <p>Welcome to EnergyDrinkRater! This is a community for energy drink enthusiasts<br/>
            to gather together and talk about their favorite energy drinks. You are able<br/>
            to rate your favorite or least favorite drinks, post comments, and look up some<br/>
            caffeine stats available in each drink. 
            </p>
            <button className="button">Learn More</button>
            </div>
        </div>
    );
}

export default About;
