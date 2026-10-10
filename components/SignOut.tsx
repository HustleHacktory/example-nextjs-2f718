import { signOut } from "@/lib/auth";

// Bolt Optimization: Hoist server action to module scope to avoid re-allocating
// function closures on every component render pass.
async function handleSignOut() {
  "use server";
  await signOut();
}

export function SignOut() {
  return (
    <form action={handleSignOut}>
      <button type="submit" className="button-secondary">
        Sign out
      </button>
    </form>
  );
}
