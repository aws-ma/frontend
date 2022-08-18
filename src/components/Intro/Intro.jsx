import React, { useRef, useEffect } from "react";
import "./intro.css";
import mainImg from "../../images/main.svg";
import { introIcon, introData } from "./introData";
import { motion } from "framer-motion";
const Intro = () => {
    const introTittle = useRef(null);
    const interval = useRef(null);
    useEffect(() => {
        const typing = (str) => {
            // to avoid rerender problems from StrictMode
            introTittle.current.textContent = "";
            clearInterval(interval.current);
            //start typing
            const array = [...str]; //to split string in array
            let i = 0;
            interval.current = setInterval(() => {
                introTittle.current.textContent += array[i];
                i += 1;
                if (i >= array.length) {
                    clearInterval(interval.current);
                }
            }, 100);
        };
        typing("Welcom To FrontEnd");
        return () => {
            clearInterval(interval.current);
        };
    }, []);
    return (
        <div className='g-container g-section-container  ' id='home'>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, type: "spring", delay: 2 }}
                className='circle'></motion.div>
            <div className='i-text intro-container'>
                <h1 className='i-text-mh' ref={introTittle}>
                    Welcom To FrontEnd
                </h1>
                <img className='i-main-img' alt='' src={mainImg} />
                <div className='i-icons-row'>
                    {introIcon.map((element, index) => (
                        <span
                            style={{ color: introData[index].color }}
                            key={index}>
                            {element}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Intro;
