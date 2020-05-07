import React from "react";

import {
  Header,
  SectionHeader,
  SectionHeaderSmall,
  Subheading,
  TextBody,
} from "xolvio_ui/elements/typography";

export default { title: "Elements/Typography" };

export const DefaultHeader = () => <Header>Welcome to Xolv.io!</Header>;
export const DefaultSectionHeader = () => (
  <SectionHeader>Welcome to Xolv.io!</SectionHeader>
);
export const DefaultSectionHeaderSmall = () => (
  <SectionHeaderSmall>Welcome to Xolv.io!</SectionHeaderSmall>
);
export const DefaultSubheading = () => (
  <Subheading>Welcome to Xolv.io!</Subheading>
);
export const DefaultTextBody = () => <TextBody>Welcome to Xolv.io!</TextBody>;
