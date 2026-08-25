import { memo } from "react";

type Props = {
  classes?: string[];
};

// Bolt Optimization: Wrap icon component with React.memo to prevent unnecessary re-renders when parent re-renders.
export const IconMenu = memo(function IconMenu(props: Props) {
  let cls = "icon icon-menu";
  if (props.classes) cls = `${cls} ${props.classes.join(" ")}`;

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
