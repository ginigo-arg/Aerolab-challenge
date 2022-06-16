const SvgArrowRight = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 45 50"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"arrow-up"}</title>
    <g fill="none" fillRule="evenodd">
      <circle stroke="#D9D9D9" cx={24} cy={24} r={23.5} />
      <path
        fill="#D9D9D9"
        d="m20.295 28.295 4.58-4.59-4.58-4.59 1.41-1.41 6 6-6 6z"
      />
    </g>
  </svg>
);

export default SvgArrowRight;
