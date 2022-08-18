import React from "react";
import "./socialMedia.css";
import { socialMediaData } from "./socialMediaData";
import { motion } from "framer-motion";
const SocialMediaItem = ({ link, icon, index }) => {
    return (
        <motion.a
        initial={{scale:0}}
        whileInView={{scale:1}}
        viewport={{ once: true }}
        transition={{delay:index*0.1,duration:0.3,type:'tween'}}
            className={`sm-item-container sm-item-h-${index}`}
            href={link}
            target='_blank'
            rel='noreferrer'>
            {icon}
        </motion.a>
    );
};
const SocialMedia = () => {
    return (
        <div className='sm-container'>
            {socialMediaData.map((socialMediaItem, index) => {
                return (
                    <SocialMediaItem
                        key={index}
                        index={index}
                        {...socialMediaItem}
                    />
                );
            })}
        </div>
    );
};

export default SocialMedia;
