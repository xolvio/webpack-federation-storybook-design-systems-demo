import * as React from "react";
import { ShapesIcon } from "xolvio_ui/icons/ShapesIcon";
import { ScreenIcon } from "xolvio_ui/icons/ScreenIcon";
import { FlipchartIcon } from "xolvio_ui/icons/FlipchartIcon";

export const content = {
  title: "Let us up your game",
  subheading: "SERVICES",
  sections: [
    {
      heading: "Modernization",
      description:
        "We can help you with your software delivery strategy to sustainably increase the " +
        "productivity of your entire team and ensure you are continuously shipping valuable " +
        "software to your customersss.",
      icon: <ShapesIcon />,
    },
    {
      heading: "Bespoke development",
      description:
        "We help to transform systems, modernize solutions and renovate development ecosystems.",
      icon: <ScreenIcon />,
    },
    {
      heading: "Training",
      description:
        "Prepare your team and product for success. Team or 1-1 tuition on all aspects of test " +
        "automation.",
      icon: <FlipchartIcon />,
    },
  ],
};
