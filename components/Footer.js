import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrapper>
            <p>© {new Date().getFullYear()} Lisis Araujo. All rights reserved.</p>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 5px;
  left: 10px;
  background: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  color: #F5A9B8; /* Labels color */
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.50rem; /* Small font size */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  z-index: 1000;
`;

export default Footer;