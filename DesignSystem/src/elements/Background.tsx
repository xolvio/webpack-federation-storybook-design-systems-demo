import styled from "styled-components";
import { device } from "../helpers/device";
import { spacing } from "../helpers/spacing";

export const Background = styled.div`
  position: absolute;
  height: 100%;
  right: 50%;
  width: 100%;
  background: #f4f7f6;
  z-index: -1;

  @media ${device.tabletVertical} {
    right: calc(100% - ${spacing.desktop.maxContentWidth}px / 2 + 395px);
    width: 100vw;
  }
`;

export default Background;
