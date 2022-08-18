import React from "react";
import "./course.css";
import { motion } from "framer-motion";

const Course = ({
    index,
    primaryColor,
    secondaryColor,
    title,
    description,
    date,
    icon,
}) => {
    const ok = index % 2 === 0;
    const transition = { duration: 0.6, type: "tween" };
    const transitionX = { duration: 0.6, type: "tween",delay:0.6 };
    return (
        <motion.div
        
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={transition}
            className={`c-container ${ok ? "f-d-row" : "f-d-r-reverse"}`}>
            <div className={`c-info ${ok ? "f-d-row" : "f-d-r-reverse"}`}>
                <div className={`c-descr ${ok ? "sh-br" : "sh-br-reverse"}`}>
                    <h4 className='c-title' style={{ color: primaryColor }}>
                        {title}
                    </h4>
                    <p className='c-paragraph'>{description}</p>
                </div>
                <div
                    className={`c-date ${ok ? "br" : "br-reverse"}`}
                    style={{ backgroundColor: primaryColor }}>
                    <h4 className='c-title'>{date}</h4>
                </div>
            </div>
            <div className='c-icon' style={{ backgroundColor: secondaryColor }}>
                {icon}
                <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1}}
                    viewport={{ once: true }}
                    transition={transitionX}
                    className={`line-x ${ok ? "" : "line-x-reverse"}`}
                    style={{ backgroundColor: secondaryColor }}></motion.span>
                <motion.span
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1}}
                    transition={transitionX}
                    viewport={{ once: true }}
                    className={`${index !== 3 ? "line-y" : ""}`}
                    style={{ backgroundColor: secondaryColor }}></motion.span>
            </div>
        </motion.div>
    );
};

export default Course;
