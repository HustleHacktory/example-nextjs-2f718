import { WhatNext } from "@/components/compositions/WhatNext";

export default function IndexPage() {
  // Bolt Optimization: Direct process.env lookup avoids importing and executing hook logic
  // in a Next.js Server Component, matching the pattern used in other page components.
  const siteKey = process.env.ARCJET_SITE ? process.env.ARCJET_SITE : null;

  return (
    <div className="page">
      <section className="section">
        <h1 className="heading-primary">Form submitted</h1>
        <p className="typography-primary">
          If this were a real form, your message would have been submitted.
        </p>
      </section>

      <hr className="divider" />

      <WhatNext deployed={siteKey != null} />
    </div>
  );
}
