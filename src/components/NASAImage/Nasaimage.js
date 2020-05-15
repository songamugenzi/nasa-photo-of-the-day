import React, { useState, useEffect } from "react";

const Nasaimage = (props) => {
    return (
        <div className="placeholder">
            <img src={props.url} alt="NASA image of the day" />
        </div>
    )
}

export default Nasaimage;