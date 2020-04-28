import React from "react";
import { Title } from "xolvioDesignSystem/components/Title";
import { CenteredContentWrapper } from "xolvioDesignSystem/helpers/CenteredContentWrapper";
import { Background } from "xolvioDesignSystem/elements/Background";
import "../index.css";


const defaultTitle = "Let us up your game";
const defaultSubheading = "Services";

export const JustTitle = () => (
  <Title subheading={defaultSubheading} title={defaultTitle} />
);
export const withConfetti = () => (
  <CenteredContentWrapper>
    <Title subheading={defaultSubheading} title={defaultTitle} />
  </CenteredContentWrapper>
);

export const withConfettiAndBackground = () => (
  <CenteredContentWrapper>
    <Background />
    <Title subheading={defaultSubheading} title={defaultTitle} />
  </CenteredContentWrapper>
);

export default { title: "Components/Title" };
