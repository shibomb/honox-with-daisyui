import { createHighlighter } from "shiki";
import { raw } from "hono/html";

export type CodeBlockProps = {
  code: string;
  lang?: string;
  theme?: string;
};

export default async function CodeBlock({
  code,
  lang = "tsx",
  theme = "github-dark-dimmed",
}: CodeBlockProps) {
  const highlighter = await createHighlighter({
    themes: [theme],
    langs: [lang],
  });

  const highlightedCode = highlighter.codeToHtml(code, {
    lang: lang,
    theme: theme,
  });

  highlighter.dispose();

  return <div class="code-block">{raw(highlightedCode)}</div>;
}
