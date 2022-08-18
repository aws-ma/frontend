import React from "react";
import { coursesData } from "./coursesData";
import Course from "./Course";
import "./Courses.css";
const Courses = () => {
    return (
        <div className='g-container  g-section-container' id="courses">
            <h1 className='g-section-heading'>Courses</h1>
            <div className='courses-container'>
                {coursesData.map((course, index) => {
                    return <Course key={index} index={index} {...course} />;
                })}
            </div>
        </div>
    );
};

export default Courses;
