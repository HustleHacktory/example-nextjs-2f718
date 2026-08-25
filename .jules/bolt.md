## 2026-08-22 - Direct theme derivation vs useEffect state synchronization

**Learning:** Syncing theme-dependent visual props into `useState` via `useEffect` causes an extra state update and cascading re-render cycle on component mount or theme changes.
**Action:** Derive theme visual properties directly during render from `useTheme().resolvedTheme`.
