import styled from "styled-components";
import { device } from "./device";
import { spacing } from "./spacing";

export const CenteredContentWrapper = styled.div`
  margin: 0 ${spacing.mobile.padding.default}px;
  max-width: 100%;

  @media ${device.desktop} {
    max-width: ${spacing.desktop.maxContentWidth}px;
    margin-left: ${spacing.mobile.padding.default}px;
    margin-right: ${spacing.mobile.padding.default}px;
  }

  @media ${device.wide} {
    max-width: ${spacing.desktop.maxContentWidth}px;
    margin-left: auto;
    margin-right: auto;
  }
`;
