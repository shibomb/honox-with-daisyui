/**
 * see vite.config.ts for prismjs config
 */

import { highlightElement } from "prismjs";
import { useLayoutEffect, useRef } from "hono/jsx";

export default function CodeBlock({
  children,
  lang,
}: {
  children: string;
  lang: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (ref.current) highlightElement(ref.current);
  }, [children, lang]);

  return (
    <pre>
      <code class={`lang-${lang}`} ref={ref}>
        {children}
      </code>
    </pre>
  );
}
