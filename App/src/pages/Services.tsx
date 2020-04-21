import * as React from "react";
import { content } from "./content";
const AudiButton = React.lazy(() => import("audi_core_ui/AudiButton"));

// import Text from "xolviods/Text";
// const Text = { text: "elo" };
// const CenteredContentWrapper = React.lazy(() =>
//   import("xolviods/CenteredContentWrapper")
// );
// const Title = React.lazy(() => import("xolviods/Title"));
// const Background = React.lazy(() => import("xolviods/Background"));
// const Sections = React.lazy(() => import("xolviods/Sections"));
//
// export const Services = () => (
//   <React.Suspense fallback="Loading Components from the Design System">
//     <CenteredContentWrapper>
//       <Background />
//
//       <Title subheading={content.subheading} title={content.title} />
//
//       <Sections sections={content.sections} />
//     </CenteredContentWrapper>
//   </React.Suspense>
// );

export const Services = () => (
  <div>
    MyText
    <div>{Text.text}</div>
    <React.Suspense fallback="Loading Audi Component Button...">
      <AudiButton variant="primary" size="large" onClick={() => {}}>
        Add notification
      </AudiButton>
    </React.Suspense>
  </div>
);
// this should be only in the app, not a component, it's a page
