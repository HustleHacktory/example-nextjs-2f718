import { memo } from "react";

type Props = {
  classes?: string[];
};

function arePropsEqual(prevProps: Props, nextProps: Props) {
  if (prevProps.classes === nextProps.classes) return true;
  if (!prevProps.classes || !nextProps.classes)
    return prevProps.classes === nextProps.classes;
  if (prevProps.classes.length !== nextProps.classes.length) return false;
  return prevProps.classes.every(
    (val, index) => val === nextProps.classes![index],
  );
}

// Bolt Optimization: Memoize IconMenu with custom prop comparison to prevent unnecessary re-renders even when parent components pass inline array literals for classes.
export const IconMenu = memo(function IconMenu({ classes }: Props) {
  const cls = classes?.length
    ? `icon icon-menu ${classes.join(" ")}`
    : "icon icon-menu";

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
}, arePropsEqual);
