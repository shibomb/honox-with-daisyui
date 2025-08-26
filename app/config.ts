import { Context } from "hono";

export const appConfig = {
    name: "HonoX with daisyUI",
    description: "The template of HonoX with daisyUI",
    author: "Authors",
    author_url: "https://github.com/shibomb/",
    createdYear: "YYYY",
    defaultLcale: "ja_JP",
    gtmId: "GTM-Z99ZZ999",
} as const;

export const getBaseUrl = (c: Context) => {
    const host = c.req.header("host");
    const protocol = c.req.header("x-forwarded-proto") || "http";
    return `${protocol}://${host}`;
}; 