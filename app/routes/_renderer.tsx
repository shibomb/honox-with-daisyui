import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import Layout from "../components/layout/layout";
import TagManagerHead from "../components/tag-manager-head";
import TagManagerBody from "../components/tag-manager-body";
import { Context } from "hono";

export default jsxRenderer(({ children }, c: Context) => {
  const gtmId = c.env?.GTM_ID as string || '';
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {gtmId && <TagManagerHead gtmId={gtmId} />}
        <link rel="icon" href="/favicon.ico" />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
      </head>
      <body>
        {gtmId && <TagManagerBody gtmId={gtmId} />}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
});
