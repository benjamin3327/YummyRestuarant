import React from 'react';
import Meat from '../assets/images/meat.png';


const Intro = () => {
    return (
        <div>
            <div id="home" className="intro route bg-image">
                <div className="overlay-itro"></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className="intro-title mb-4">Welcome to Yummy Restaurant</h1>
                            <p className="intro-subtitle"><span className="text-slider-items">Delicious Meals </span><strong class="text-slider"></strong></p>
                            <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Browse Shop</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Intro;