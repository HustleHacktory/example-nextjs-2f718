## 2026-08-22 - Direct theme derivation vs useEffect state synchronization

**Learning:** Syncing theme-dependent visual props into `useState` via `useEffect` causes an extra state update and cascading re-render cycle on component mount or theme changes.
**Action:** Derive theme visual properties directly during render from `useTheme().resolvedTheme`.

## 2026-08-22 - Pre-instantiating Arcjet rule clients vs per-request instantiation

**Learning:** Calling `arcjet.withRule(...)` inside dynamic route handlers creates new Arcjet rule instances and client clones on every incoming HTTP request.
**Action:** Pre-instantiate static Arcjet rule clients at module scope outside handler functions and select the pre-instantiated client at request time.

## 2026-08-22 - Pre-instantiating Zod form resolvers vs per-render instantiation

**Learning:** Instantiating `zodResolver(schema)` inside React client form components creates new resolver closures on every render pass, causing unnecessary allocations and unstable resolver references in `useForm`.
**Action:** Pre-instantiate static `zodResolver(schema)` instances at module scope outside component render bodies.

## 2026-09-04 - Static className props and memoization for icon components vs inline array props

**Learning:** Passing inline array literals (`classes={["..."]}`) to unmemoized SVG icon components causes array allocations per render, string joining overhead (`.join(" ")`), and breaks referential equality, forcing icons to re-render whenever parent layouts update.
**Action:** Support string `className` props on SVG icon components, wrap them with `React.memo`, and pass static string class names from parent components.
