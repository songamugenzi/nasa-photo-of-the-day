import React, { useState, useEffect } from "react";

const Header = (props) => {
    return (
        <div className="placeholder">
            <p>{props.date}</p>
            <h2>{props.title}</h2>
        </div>
    )
};

export default Header;