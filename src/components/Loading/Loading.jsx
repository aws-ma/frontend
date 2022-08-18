import React from "react";
import { RiseLoader } from "react-spinners";
import "./loading.css";
const Loading = () => {
    return (
        <div className='g-container loading-container'>
            <span className='loading-text'>Loading...</span>
            <RiseLoader size={25} color='#0084ff' />
            <span className='loading-text'>
                MADE BY :<br /> AWS MAAROUF
            </span>
        </div>
    );
};

export default Loading;
