import * as React from "react";
import { content } from "./content";

const CenteredContentWrapper = React.lazy(() =>
  import("xolvioDesignSystem/CenteredContentWrapper")
);
const Title = React.lazy(() => import("xolvioDesignSystem/Title"));
const Background = React.lazy(() => import("xolvioDesignSystem/Background"));
const Sections = React.lazy(() => import("xolvioDesignSystem/Sections"));

export const Services = () => (
  <React.Suspense fallback="Loading Components from the Design System">
    <CenteredContentWrapper>
      <Background />

      <Title subheading={content.subheading} title={content.title} />

      <Sections sections={content.sections} />
    </CenteredContentWrapper>
  </React.Suspense>
);
