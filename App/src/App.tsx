import * as React from "react";
import { Title } from "xolvio_ui/components/Title";
import { Sections } from "xolvio_ui/components/Sections";
import { CenteredContentWrapper } from "xolvio_ui/helpers/CenteredContentWrapper";
import { Background } from "xolvio_ui/elements/Background";
import { content } from "./content";

function App() {
  return (
    <CenteredContentWrapper>
      <Background />
      <Title subheading={content.subheading} title={content.title} />
      <Sections sections={content.sections} />
    </CenteredContentWrapper>
  );
}
export default App;
