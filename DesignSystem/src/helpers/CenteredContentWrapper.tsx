import React from "react";
import styled from "styled-components";
import { device } from "./device";
import { spacing } from "./spacing";

type props = { children: React.ReactNode; id?: string | undefined };
export const CenteredContentWrapper = ({ children, id }: props) => (
  <ExternalWrapper>
    <InternalWrapper>{children}</InternalWrapper>
  </ExternalWrapper>
);

export default CenteredContentWrapper;

const ExternalWrapper = styled.div`
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

const InternalWrapper = styled.div`
  position: relative;
  @media ${device.tabletVertical} {
    display: flex;
    padding: 0 0 250px 0;

    * {
      text-align: left;
    }
  }
`;
