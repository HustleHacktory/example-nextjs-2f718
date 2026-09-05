import { memo } from "react";

type Props = {
  classes?: string[];
  className?: string;
};

// Bolt Optimization: Wrap IconMenu in React.memo and support className string
// to avoid inline array allocations and redundant re-renders.
export const IconMenu = memo(function IconMenu(props: Props) {
  let cls = "icon icon-menu";
  if (props.className) cls += " " + props.className;
  if (props.classes) cls += " " + props.classes.join(" ");

  return (
    <svg viewBox="0 0 128 128" className={cls} stroke="currentColor">
      <title>Menu</title>
      <path
        d="M12 66H116"
        strokeLinecap="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M26 104H102"
        strokeLinecap="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M26 28H102"
        strokeLinecap="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
});
