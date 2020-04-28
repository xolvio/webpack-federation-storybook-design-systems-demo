import React from "react";
import { Title } from "xolvioDesignSystem/components/Title";
import { CenteredContentWrapper } from "../helpers/CenteredContentWrapper";
import { Background } from "../elements/Background";
import "../index.css";

export default { title: "Title" };

const defaultTitle = "Let us up your game";
const defaultSubheading = "Services";

export const JustTitle = () => (
  <Title subheading={defaultSubheading} title={defaultTitle} />
);
export const withConfetti = () => (
  <CenteredContentWrapper>
    <JustTitle />
  </CenteredContentWrapper>
);

export const withConfettiAndBackground = () => (
  <CenteredContentWrapper>
    <Background />
    <JustTitle />
  </CenteredContentWrapper>
);
