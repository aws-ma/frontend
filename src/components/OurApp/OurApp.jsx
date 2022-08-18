import React from "react";
import GooglePlayImg from "../../images/googleplay.png";
import { FaAppStoreIos, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "./ourApp.css";
const OurApp = () => {
    const transition = { duration: 1.5, type: "spring" };
    return (
        <div className='g-container g-section-container' id='app'>
            <h1 className='g-section-heading'>Our App</h1>
            <div className=' o-app-container'>
                <motion.a
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={transition}
                    className='app-link'
                    href='https://www.google.com'
                    target='_blank'
                    rel='noreferrer'>
                    <img className='o-gp-icon' src={GooglePlayImg} alt='' />
                    <h4 className='store-name'>Googleplay</h4>
                    <span className='app-rate'>
                        <span>4.3</span> <FaStar className='rate-star' />
                    </span>
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={transition}
                    className='app-link'
                    href='https://www.google.com'
                    target='_blank'
                    rel='noreferrer'>
                    <FaAppStoreIos className='o-as-icon' />
                    <h4 className='store-name'>AppStore</h4>
                    <span className='app-rate'>
                        <span>4.1</span> <FaStar className='rate-star' />
                    </span>
                </motion.a>
            </div>
        </div>
    );
};

export default OurApp;
