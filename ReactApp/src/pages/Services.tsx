import React from "react";
import { CenteredContentWrapper } from "../helpers/CenteredContentWrapper";
import { Title } from "../components/Title";
import { Background } from "../elements/Background";
import { SectionProps, Sections } from "../components/Sections";

type ServicesProps = {
  title: string;
  id?: string;
  subheading: string;
  sections: SectionProps[];
  style?: React.CSSProperties;
};

export const Services = (props: ServicesProps) => (
  <CenteredContentWrapper id={props.id}>
    <Background />

    <Title subheading={props.subheading} title={props.title} />

    <Sections sections={props.sections} />
  </CenteredContentWrapper>
);


// this should be only in the app, not a component, it's a page
