"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, type ComponentProps } from "react";

// Using `ComponentProps` as the exported `LinkProps` is incomplete.

// Bolt Optimization: Wrap NavLink in React.memo to prevent unnecessary re-renders
// when parent layout re-renders unless props or active pathname changes.
export const NavLink = memo(function NavLink(
  props: ComponentProps<typeof Link>,
) {
  const pathname = usePathname();

  // Simple check that should be sufficient for our use case.
  const isActive = props.href === pathname;

  return <Link {...props} data-active={isActive} />;
});

NavLink.displayName = "NavLink";
