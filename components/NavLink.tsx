"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, type ComponentProps } from "react";

// Using `ComponentProps` as the exported `LinkProps` is incomplete.

// Bolt Optimization: Wrap NavLink with React.memo to prevent unnecessary re-renders
// when parent components or layout state change but NavLink props remain unchanged.
export const NavLink = memo(function NavLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  // Simple check that should be sufficient for our use case.
  const isActive = props.href === pathname;

  return <Link {...props} data-active={isActive} />;
});
