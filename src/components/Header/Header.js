import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const StyledHeaderContainer = styled.div`
    background-image: url(https://images.unsplash.com/photo-1451188502541-13943edb6acb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80);
    font-size: 1.6rem;
    padding: 5% 8%;
`

const StyledLogo = styled.div`
    display: inline-block;
    padding: 2rem 1rem;
    font-size: 1.4rem;
`;

const Header = (props) => {
    return (
        // <StyledHeaderContainer className="placeholder">
        //     <StyledLogo className="placeholder">&lt; 💅 &gt;</StyledLogo>
        // </StyledHeaderContainer>
        <div className="placeholder">
            <p>{props.date}</p>
            <h2>{props.title}</h2>
        </div>
    )
};

export default Header;