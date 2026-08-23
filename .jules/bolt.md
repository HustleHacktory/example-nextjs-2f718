## 2026-08-23 - Derive state directly from props/hooks instead of useState + useEffect
**Learning:** Storing derived state (such as theme-dependent SVG paths) in `useState` and setting it in `useEffect` on mount causes an unnecessary cascading re-render. Deriving the values directly during render removes the extra state and prevents redundant re-renders.
**Action:** Inspect client components for `useState` + `useEffect` combinations that mirror external context/hook state, and replace them with direct render derivation.
