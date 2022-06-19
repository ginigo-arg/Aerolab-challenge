import * as React from "react";

const SvgCoin = (props) => (
  <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"money"}</title>
    <defs>
      <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="68.628%" id="b">
        <stop stopColor="#FFCF00" offset="0%" />
        <stop stopColor="#F7AE15" offset="100%" />
      </radialGradient>
      <filter
        x="-9.1%"
        y="-9.1%"
        width="128.3%"
        height="128.3%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset dx={2} dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={2}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g
      filter="url(#a)"
      transform="translate(-177 -109)"
      fill="none"
      fillRule="evenodd"
    >
      <g transform="translate(179 111)">
        <circle fill="url(#b)" cx={13} cy={13} r={13} />
        <path
          d="M13 3.095c-5.454 0-9.905 4.452-9.905 9.905 0 5.454 4.452 9.905 9.905 9.905 5.454 0 9.905-4.452 9.905-9.905 0-5.454-4.452-9.905-9.905-9.905Zm0 18.649c-4.821 0-8.744-3.923-8.744-8.744S8.179 4.256 13 4.256 21.744 8.179 21.744 13 17.821 21.744 13 21.744Z"
          fill="#F8B013"
          fillRule="nonzero"
        />
        <path
          d="M13 5.296C8.768 5.296 5.296 8.77 5.296 13c0 4.232 3.474 7.704 7.704 7.704 4.232 0 7.704-3.474 7.704-7.704 0-4.232-3.474-7.704-7.704-7.704Zm0 14.229A6.532 6.532 0 0 1 6.475 13 6.532 6.532 0 0 1 13 6.475 6.532 6.532 0 0 1 19.525 13 6.532 6.532 0 0 1 13 19.525Z"
          fill="#F8B013"
          fillRule="nonzero"
        />
      </g>
    </g>
  </svg>
);

export default SvgCoin;
