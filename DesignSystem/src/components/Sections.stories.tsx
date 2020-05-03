import React from "react";
import "../index.css";

import { Section, Sections } from "xolvio_ui/components/Sections";
import { ShapesIcon } from "xolvio_ui/icons/ShapesIcon";
import { ScreenIcon } from "xolvio_ui/icons/ScreenIcon";
import { FlipchartIcon } from "xolvio_ui/icons/FlipchartIcon";

const section = {
  heading: "Modernization",
  description:
    "We can help you with your software delivery strategy to sustainably increase the productivity of your entire team and ensure you are continuously shipping valuable software to your customers.",
  icon: <ShapesIcon />,
  onClick: () => console.log("clicked"),
  url: "/services/modernization",
  sectionId: "consulting",
};

export const oneSection = () => (
  <Section
    heading={section.heading}
    description={section.description}
    icon={section.icon}
    onClick={section.onClick}
    url={section.url}
    sectionId={section.sectionId}
  />
);

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

export const multipleSections = () => (
  <Sections sections={sectionDescriptions} />
);

export default { title: "Components/Section" };
