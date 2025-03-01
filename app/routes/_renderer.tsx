import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import Layout from "../components/layout/layout";

export default jsxRenderer(({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
});
