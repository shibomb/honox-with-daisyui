import type { Context } from "hono";
import { appConfig, getBaseUrl } from "../config";

export default function OgpMeta({
  c,
  title,
  description,
  type,
  img,
}: {
  c: Context;
  title: string;
  description: string;
  type: string /* website, article */;
  img: string;
}) {
  const baseUrl = getBaseUrl(c);

  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={c.req.url} />
      <meta property="og:image" content={`${baseUrl}${img}`} />
      <meta property="og:site_name" content={appConfig.name} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={appConfig.defaultLcale} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}${img}`} />
    </>
  );
}
