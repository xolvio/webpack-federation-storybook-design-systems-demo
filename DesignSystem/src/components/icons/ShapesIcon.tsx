import React from "react";

export const ShapesIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100">
    <title>Geometric shapes icon</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h100v100H0z" />
      <path
        fill="#BAE1D3"
        d="M72 9c-11.045 0-20 8.73-20 19.5S60.955 48 72 48M10 91h16V59H10z"
      />
      <path
        fill="#3C3F3E"
        fillRule="nonzero"
        d="M26.001 29.062L56.002 29l-.004-2-32 .067L24.035 54l2-.002zM36.998 75l.004 2 36-.066-.044-25.936-2 .004.04 23.936z"
      />
      <path
        fill="#323433"
        fillRule="nonzero"
        d="M56 28.5C56 37.06 62.94 44 71.5 44 80.06 44 87 37.06 87 28.5 87 19.94 80.06 13 71.5 13 62.94 13 56 19.94 56 28.5zm2 0C58 21.044 64.044 15 71.5 15S85 21.044 85 28.5 78.956 42 71.5 42 58 35.956 58 28.5z"
      />
      <path
        fill="#3C3F3E"
        fillRule="nonzero"
        d="M13 88h26V62H13v26zm2-2V64h22v22H15z"
      />
    </g>
  </svg>
);

export default ShapesIcon;

ShapesIcon.defaultProps = {
  "data-testid": "icon-shapes",
};
