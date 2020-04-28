import * as React from "react";
import { content } from "./content";

export const Services = () => (
  <div>
    <h1>{content.title}</h1>
    <h2> {content.subheading}</h2>
    <div>Sections: {JSON.stringify(content.sections)}</div>
  </div>
);
