import * as React from "react";
import { content } from "./content";

import CenteredContentWrapper from "xolvioDesignSystem/helpers/CenteredContentWrapper"
import Background from "xolvioDesignSystem/elements/Background"
import Title from "xolvioDesignSystem/components/Title"
import Sections from "xolvioDesignSystem/components/Sections"

export const Services = () => (
        <CenteredContentWrapper>
            <Background/>
            <Title subheading={content.subheading} title={content.title}/>
            <Sections sections={content.sections}/>
        </CenteredContentWrapper>
);
