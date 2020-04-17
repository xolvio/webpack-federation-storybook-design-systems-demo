import styled from "styled-components";
import { ButtonPrimary } from "./ButtonPrimary";
import * as colors from "../helpers/colors";

export const ButtonInline = styled(ButtonPrimary)`
  font-size: 18px;
  color: ${colors.AcceptanceGreen};
  background-color: transparent;
`;

export const ButtonInlineLink = styled(ButtonInline)<{
  as?: string;
  href?: string;
  target?: string;
  rel?: string;
}>`
  cursor: pointer;
  display: inline-block;
  padding: 15px 0;
  text-decoration: none;
  letter-spacing: 0;
  line-height: 1.2;
`;
