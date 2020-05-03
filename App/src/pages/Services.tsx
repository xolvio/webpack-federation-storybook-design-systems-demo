import * as React from "react";
import { content } from "./content";
import { Background } from "xolvio_ui/elements/Background";
import { Title } from "xolvio_ui/components/Title";
import { Sections } from "xolvio_ui/components/Sections";
import { CenteredContentWrapper } from "xolvio_ui/helpers/CenteredContentWrapper";

export const Services = () => (
  <CenteredContentWrapper>
    <Background />
    <Title title={content.title} subheading={content.subheading} />
    <Sections sections={content.sections} />
  </CenteredContentWrapper>
);
