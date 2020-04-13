import { spacing } from "./spacing";

const wide =
    spacing.desktop.maxContentWidth + 2 * spacing.mobile.padding.default;

export const breakpoints = {
    mobile: {
        end: 768,
    },
    tabletVertical: {
        start: 600,
        end: 768,
    },
    tablet: {
        start: 769,
        end: 1024,
    },
    desktop: {
        start: 1025,
        end: wide - 1,
    },
    wide: {
        start: wide,
        end: 1499,
    },
    superWide: {
        start: 1500,
    },
};

export const device = {
    mobile: `(max-width: ${breakpoints.tablet.end}px)`,
    tabletVertical: `(min-width: ${breakpoints.tabletVertical.start}px)`,
    tablet: `(min-width: ${breakpoints.tablet.start}px)`,
    tabletOnly: `(min-width: ${breakpoints.tablet.start}px) and (max-width: ${breakpoints.tablet.end}px)`,
    desktop: `(min-width: 1025px)`,
    desktopWithPaddingOnly: `(min-width: ${
        breakpoints.desktop.start
    }px) and (max-width: ${breakpoints.wide.start +
    2 * spacing.mobile.padding.default}px)`,
    wide: `(min-width: ${breakpoints.wide.start}px)`,
    superWide: `(min-width: ${breakpoints.superWide.start}px)`,
};
