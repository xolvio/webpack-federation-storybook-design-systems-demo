import React from "react";
import { Title } from "xolvio_ui/components/Title";
import { CenteredContentWrapper } from "xolvio_ui/helpers/CenteredContentWrapper";
import { Background } from "xolvio_ui/elements/Background";
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
