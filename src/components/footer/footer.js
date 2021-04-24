import React from "react";
import {
  FooterContainer,
  FooterWrap,
  WebsiteRights,
} from "./footerElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
            <WebsiteRights>
              ORSI © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
