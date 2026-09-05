import { forwardRef, memo } from "react";

interface Props {
  classes?: string[];
  className?: string;
}

// Bolt Optimization: Wrap ArrowExternal in React.memo and support className string
// to avoid inline array allocations and redundant re-renders.
const ArrowExternal = memo(
  forwardRef<SVGSVGElement, Props>((props: Props, ref) => {
    let cls = "icon icon-arrow-external";
    if (props.className) cls += " " + props.className;
    if (props.classes) cls += " " + props.classes.join(" ");

    return (
      <svg ref={ref} viewBox="0 0 128 128" className={cls}>
        <path
          stroke="currentColor"
          d="M31.5527 96.4395L96.0369 31.9553"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
        />
        <path
          stroke="currentColor"
          d="M57.4629 31.6903L96.3029 31.6903L96.3029 70.5304"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
        />
      </svg>
    );
  }),
);
ArrowExternal.displayName = "ArrowExternal";

export default ArrowExternal;
