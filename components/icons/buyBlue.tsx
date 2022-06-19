const SvgBuy = (props) => (
  <svg width={42} height={42} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"Icon"}</title>
    <defs>
      <radialGradient
        cx="50%"
        cy="50.876%"
        fx="50%"
        fy="50.876%"
        r="79.847%"
        id="a"
      >
        <stop stopColor="#0AD4FA" offset="0%" />
        <stop stopColor="#25BBF1" offset="100%" />
      </radialGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle fill="url(#a)" cx={21} cy={21} r={21} />
      <path
        d="M29.995 29.108 28.882 15.53a.598.598 0 0 0-.604-.542h-3.033v-1.06c0-1.615-1.36-2.929-3.032-2.929h-2.426c-1.672 0-3.032 1.314-3.032 2.93v1.06h-3.033a.598.598 0 0 0-.604.54l-1.113 13.577c-.038.487.136.971.48 1.33.343.358.83.563 1.334.563h14.362c.505 0 .991-.205 1.335-.563.343-.359.517-.843.479-1.33ZM18 14.25c0-1.24.807-2.25 1.8-2.25h2.4c.993 0 1.8 1.01 1.8 2.25V15h-6v-.75Z"
        fill="#000"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgBuy;
