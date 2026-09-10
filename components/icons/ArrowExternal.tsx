import { forwardRef, memo } from "react";

interface Props {
  classes?: string[];
}

function arePropsEqual(prevProps: Props, nextProps: Props) {
  if (prevProps.classes === nextProps.classes) return true;
  if (!prevProps.classes || !nextProps.classes)
    return prevProps.classes === nextProps.classes;
  if (prevProps.classes.length !== nextProps.classes.length) return false;
  return prevProps.classes.every(
    (val, index) => val === nextProps.classes![index],
  );
}

// Bolt Optimization: Memoize IconArrowExternal with custom prop comparison to prevent unnecessary re-renders even when parent components pass inline array literals for classes.
const ArrowExternal = memo(
  forwardRef<SVGSVGElement, Props>(({ classes }: Props, ref) => {
    const cls = classes?.length
      ? `icon icon-arrow-external ${classes.join(" ")}`
      : "icon icon-arrow-external";

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
  arePropsEqual,
);
ArrowExternal.displayName = "ArrowExternal";

export default ArrowExternal;
