import React from 'react';

const Header = () => {
    
    
    return (
        <div className="header">
            <div className="header-btns">
                <span id="close-btn">
                    <i className="fas fa-times"></i>
                </span>
                <span id="minimize-btn">
                    <i className="far fa-window-minimize"></i>
                </span>
                <span id="maximize-btn">
                    <i className="far fa-square"></i>
                </span>
            </div>

            <div className="mode">
                Basic Mode
                <i class="fas fa-chevron-down"></i>
            </div>

            <div className="options">
                <i class="fas fa-bars"></i>
            </div>


        </div>
    )
}

export default Header;