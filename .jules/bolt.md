## 2026-08-22 - Direct theme derivation vs useEffect state synchronization

**Learning:** Syncing theme-dependent visual props into `useState` via `useEffect` causes an extra state update and cascading re-render cycle on component mount or theme changes.
**Action:** Derive theme visual properties directly during render from `useTheme().resolvedTheme`.

## 2026-08-28 - Custom comparison for React.memo with array literal props

**Learning:** Default shallow equality in `React.memo` fails to prevent re-renders when parent components pass inline array literals (e.g. `classes={["icon"]}`), as new array references are instantiated on every render cycle.
**Action:** Provide a custom `arePropsEqual` comparator to `React.memo` that compares array element values to skip redundant component re-renders.
