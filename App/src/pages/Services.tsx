import * as React from "react";
import { content } from "./content";

export const Services = () => (
  <div>
    <h1>{content.subheading}</h1>
    <h2>{content.title}</h2>
    {content.sections.map((s) => (
      <div>{JSON.stringify(s)}</div>
    ))}
  </div>
);

//
