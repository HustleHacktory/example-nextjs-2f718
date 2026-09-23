import { isDevelopment } from "@arcjet/env";
import * as nosecone from "@nosecone/next";

const noseconeConfig: nosecone.NoseconeOptions = {
  ...nosecone.defaults,
  contentSecurityPolicy: {
    ...nosecone.defaults.contentSecurityPolicy,
    directives: {
      ...nosecone.defaults.contentSecurityPolicy.directives,
      imgSrc: [
        ...nosecone.defaults.contentSecurityPolicy.directives.imgSrc,
        "https://vercel.com", // Deploy button
        "https://www.netlify.com", // Deploy button
      ],
      scriptSrc: [
        // We have to use unsafe-inline because next-themes and Vercel Analytics
        // do not support nonce
        // https://github.com/pacocoursey/next-themes/issues/106
        // https://github.com/vercel/analytics/issues/122
        //...nosecone.defaults.contentSecurityPolicy.directives.scriptSrc,
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        "https://plausible.io", // Analytics
      ],
      connectSrc: [
        ...nosecone.defaults.contentSecurityPolicy.directives.connectSrc,
        "https://plausible.io", // Analytics
      ],
      // We only set this in production because the server may be started
      // without HTTPS
      upgradeInsecureRequests: !isDevelopment(process.env),
    },
  },
  crossOriginEmbedderPolicy: {
    policy: "credentialless", // Allows embedding the deploy buttons
  },
} as const;

const noseconeMiddleware = nosecone.createMiddleware(
  process.env.VERCEL_ENV === "preview"
    ? nosecone.withVercelToolbar(noseconeConfig)
    : noseconeConfig,
);

// Bolt Optimization: Export matcher config to bypass middleware for static assets,
// image optimization requests, and favicons, reducing request latency for static resources.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, favicon.png, favicon-light.png (favicon and static icons)
     */
    "/((?!_next/static|_next/image|favicon\\.ico|favicon\\.png|favicon-light\\.png).*)",
  ],
};

export default noseconeMiddleware;
