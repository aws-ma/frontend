import React from "react";
import { motion } from "framer-motion";
import "./card.css";

const Card = ({ icon, color, title, description, index }) => {
    return (
        <motion.div
            className='card-container'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.28, type: "tween", delay: 0.17 * index }}>
            <img src={icon} alt='' className='card-icon' />
            <h3 style={{ color: color }}>{title}</h3>
            <p className='card-descr'>{description}</p>
        </motion.div>
    );
};

export default Card;
