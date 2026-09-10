interface Props {}

// Pre-allocate stable site key object at module scope to avoid re-allocating
// an object on every hook invocation and preserve referential equality across renders.
const siteKeyResult = {
  siteKey: process.env.ARCJET_SITE ? process.env.ARCJET_SITE : null,
};

/**
 * Use Site Key
 * Returns the Arcjet site key for the active deployment if available.
 */
export default function useSiteKey(props?: Props) {
  return siteKeyResult;
}
