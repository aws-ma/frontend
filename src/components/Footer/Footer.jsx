import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import wave from "../../images/wave.png";
import { BsHeartFill } from "react-icons/bs";
import "./footer.css";

const Footer = () => {

    return (
        <div className='f-container'>
            <img className='f-bg-image' src={wave} alt='' />
            <div className='f-content'>
                <span className='f-made'>
                    Made With
                    <BsHeartFill style={{ color: "red", margin: "0 10px" }} />
                    By Aws Maarouf
                </span>
                <SocialMedia />
            </div>
        </div>
    );
};

export default Footer;
