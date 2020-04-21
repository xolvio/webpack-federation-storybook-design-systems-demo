import React from "react";
import "../index.css";
import { Section, Sections } from "./Sections";
import { ShapesIcon } from "./icons/ShapesIcon";
import { ScreenIcon } from "./icons/ScreenIcon";
import { FlipchartIcon } from "./icons/FlipchartIcon";
export default { title: "Section" };

const sectionDescriptions = [
  {
    heading: "Modernization",
    description:
      "We can help you with your software delivery strategy to sustainably increase the productivity of your entire team and ensure you are continuously shipping valuable software to your customers.",
    icon: <ShapesIcon />,
    onClick: () => console.log("clicked"),
    url: "/services/modernization",
    sectionId: "consulting",
  },
  {
    heading: "Bespoke development",
    description:
      "We help to transform systems, modernize solutions and renovate development ecosystem.",
    icon: <ScreenIcon />,
    onClick: () => console.log("clicked"),
    url: "/services/development",
    sectionId: "development",
  },
  {
    heading: "Training",
    description:
      "Prepare your team and product for success. Team or 1-1 tuition on all aspects of test automation.",
    icon: <FlipchartIcon />,
    onClick: () => console.log("clicked"),
    url: "/services/training",
    sectionId: "training",
  },
];

export const oneSection = () => <Section {...sectionDescriptions[0]} />;

export const multipleSections = () => (
  <Sections sections={sectionDescriptions} />
);
