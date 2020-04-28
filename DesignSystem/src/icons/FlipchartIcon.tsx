import React from "react";

export const FlipchartIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100">
    <title>Flipchart icon</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h100v100H0z" />
      <path fill="#BAE1D3" d="M72 79h22V14H72z" />
      <path
        fill="#3C3F3E"
        fillRule="nonzero"
        d="M57.184 76.385h-14.6L38.84 88.056l-1.904-.61 3.549-11.061H8.837V16.814h40.047V12.53h2v4.284h40.048v59.57H59.285l3.549 11.061-1.904.611-3.746-11.671zm-46.347-2h78.095V18.814H10.837v55.57zm45.253-34.39v-2h13.056v2H56.09zm0 15.21v-2h16.996v2H56.09zm0-7.606v-2H77v2H56.09z"
      />
      <path
        fill="#BAE1D3"
        d="M20.253 46.632c0-7.732 6.464-14 14.437-14v14H20.253z"
      />
      <path
        fill="#323433"
        fillRule="nonzero"
        d="M38.49 36.409c4.425 1.537 7.431 5.608 7.431 10.223 0 5.991-5.021 10.86-11.23 10.86-4.791 0-9.002-2.925-10.582-7.21l-1.877.692c1.871 5.072 6.831 8.519 12.458 8.519 7.301 0 13.231-5.751 13.231-12.861 0-5.481-3.558-10.3-8.775-12.112l-.656 1.889z"
      />
      <path
        fill="#3C3F3E"
        fillRule="nonzero"
        d="M19.253 47.632v-1c0-8.29 6.918-15 15.437-15h1v16H19.253zm14.437-2V33.668c-6.618.471-11.895 5.576-12.398 11.964H33.69z"
      />
    </g>
  </svg>
);

export default FlipchartIcon;

FlipchartIcon.defaultProps = {
  "data-testid": "icon-flipchart",
};
