import React from "react";
import styled from "styled-components";
// import "./typography.css"
import { device } from "../helpers/device";
import { TextBlack, AcceptanceGreen, TextMedium } from "../helpers/colors";

export const maxColumnWidth = "457px";

type TextProps = {
  font?: string;
  fontSize?: string;
  bold?: boolean;
  color?: string;
  style?: React.CSSProperties;
};

export const Header = styled.h1<TextProps>`
  width: 100%;
  font-weight: bold;
  letter-spacing: -0.6px;
  max-width: ${maxColumnWidth};
  text-align: center;

  font-family: ${(props) => props.font || "inherit"};
  color: ${(props) => props.color || "rgba(60, 63, 62, 1.0)"};

  @media ${device.tablet} {
    text-align: left;
  }
`;
export const SectionHeader = styled(Header)`
  font-size: 48px;
  letter-spacing: -0.46px;
  color: ${TextBlack};

  @media ${device.mobile} {
    font-size: 36px;
    letter-spacing: -0.34px;
  }
`;

export const SectionHeaderSmall = styled(SectionHeader)`
  font-size: 36px;
  letter-spacing: -0.34px;

  @media ${device.mobile} {
    font-size: 27px;
    letter-spacing: -0.25px;
  }
`;

export const Subheading = styled(Header)`
  font-size: 12px;
  letter-spacing: 0.55px;
  color: ${AcceptanceGreen};
`;

export const TextBody = styled.p<TextProps>`
  text-align: center;
  max-width: ${maxColumnWidth};
  font-size: ${(props) => props.fontSize || "18px"};
  line-height: 1.5;
  letter-spacing: -0.2px;
  color: ${(props) => props.color || TextMedium};
  ${(props) => (props.bold ? "font-weight: bold" : "")};
  font-family: ${(props) => props.font || "inherit"};

  @media ${device.tablet} {
    text-align: left;
  }
`;
