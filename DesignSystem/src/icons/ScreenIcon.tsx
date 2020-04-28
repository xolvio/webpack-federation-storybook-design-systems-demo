import React from "react";

export const ScreenIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100">
    <title>Screen icon</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h100v100H0z" />
      <path fill="#BAE1D3" d="M42 16H6v64h36z" />
      <path
        fill="#3C3F3E"
        fillRule="nonzero"
        d="M9.692 77.002h80.964v-58.16H9.692v58.16zm2-2v-54.16h76.964v54.16H11.692z"
      />
      <path
        fill="#3C3F3E"
        fillRule="nonzero"
        d="M49.174 81.319v-5.317h2v5.317h23.03v2h-48.06v-2h23.03zM22.148 42.296v-2h44.235v2H22.148zm0 13.253v-2h25.659v2h-25.66zm0-6.984v-2h17.3v2h-17.3zm.226-18.171a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm4.933 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm4.933 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"
      />
    </g>
  </svg>
);

export default ScreenIcon;

ScreenIcon.defaultProps = {
  "data-testid": "icon-screen",
};
