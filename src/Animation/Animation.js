import React from 'react';
import Lottie from "react-lottie";
import happyPig from './happyPig.json';
import '../index.css';


const Animation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: happyPig,
    };

    return (
        <div className='anim-container'>
            <Lottie
            options={defaultOptions}
            className="animacion"
            />
        </div>
    )
};

export default Animation;