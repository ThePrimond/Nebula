import { SVGProps, Ref, forwardRef } from 'react';

const SVGPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 1.9231V0.923096H5V1.9231V4.99994H1.9231H0.923096V6.99994H1.9231H5V10.0768V11.0768H7V10.0768V6.99994H10.0768H11.0768V4.99994H10.0768H7V1.9231Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SVGPlus);
export default ForwardRef;
