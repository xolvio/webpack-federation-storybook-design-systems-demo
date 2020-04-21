import styled from "styled-components";
import { AcceptanceGreen } from "../helpers/colors";

export const ButtonPrimary = styled.button`
  border-radius: 2px;
  border: none;
  font-family: "HK Grotesk";
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: -0.2px;
  text-align: center;
  color: #ffffff;
  padding: 11px 21px;
  background-color: ${AcceptanceGreen};
  cursor: pointer;
  outline: none;
`;

export const ButtonPrimaryLink = styled(ButtonPrimary)<{
  as?: string;
  href?: string;
  target?: string;
  rel?: string;
}>`
  text-decoration: none;
  display: inline-block;
`;
