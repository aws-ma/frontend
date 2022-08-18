import React from "react";
import { cardsData } from "./cardsData";
import Card from "./Card";
const Cards = () => {
    return (
        <div className='g-container g-section-container ' id="future-coures" >
            <h1 className='g-section-heading'>Future Courses</h1>
            <div className='cards-container'>
                {cardsData.map((card, index) => {
                    return <Card key={index} index={index} {...card} />;
                })}
            </div>
        </div>
    );
};

export default Cards;
