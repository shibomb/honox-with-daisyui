import { createRoute } from "honox/factory";
import CodeBlock from "../islands/code-block";
import OgpMeta from "../components/ogp-meta";

export default createRoute(async (c) => {
  return c.render(
    <>
      <title>Typography Demo</title>
      <meta name="description" content="Typography Demo from daisyUI docs." />
      <OgpMeta
        c={c}
        title="Typography Demo"
        description="Typography Demo from daisyUI docs."
        type="website"
        img="/img/app-ogp-img.png"
      />

      <div class="p-4">
        <div role="alert" class="alert alert-info">
          <span class="">
            This content is copied and modified from{" "}
            <a
              class="link"
              href="https://daisyui.com/docs/layout-and-typography/"
            >
              daisyUI docs: Layout and Typography
            </a>
            .
            <br />
            but the CodeBlocks section is replaced with the original `CodeBlock`
            component.
          </span>
        </div>
      </div>
      <div class="prose prose-base p-4">
        <h1 id="tailwind-css-typography-plugin-demo">
          Tailwind CSS Typography plugin demo
        </h1>
        <p>
          This is a demo of the Tailwind CSS Typography plugin in action. The
          plugin provides a set of prose classes that can be used to style your
          HTML content with minimal effort. When combined with daisyUI, you get
          access to a variety of themes that are fully compatible with the
          Typography plugin.
        </p>
        <h2 id="headers-making-a-statement">Headers: Making a Statement</h2>
        <p>
          Headers are essential for structuring your content and making it easy
          to read. With Tailwind CSS Typography and daisyUI, you can create
          headers that stand out and match your chosen theme.
        </p>
        <h1 id="the-big-heading-for-the-page-title">
          The Big Heading, for the Page Title
        </h1>
        <h2 id="second-heading-for-the-page-subtitle">
          Second Heading, for the Page Subtitle
        </h2>
        <h3 id="third-heading-usually-for-the-section-title">
          Third Heading, usually for the Section Title
        </h3>
        <h4 id="fourth-heading-usually-for-the-subsection-title">
          Fourth Heading, usually for the Subsection Title
        </h4>
        <h5 id="fifth-heading-for-the-subsubsection-title">
          Fifth Heading, for the Subsubsection Title
        </h5>
        <h6 id="sixth-heading-for-the-paragraph-title">
          Sixth Heading, for the Paragraph Title
        </h6>
        <h2 id="text-formatting-adding-emphasis">
          Text Formatting: Adding Emphasis
        </h2>
        <p>
          Text formatting is crucial for emphasizing important information.
          Tailwind CSS Typography makes it simple to apply bold, italic, and
          other text styles.
        </p>
        <h3 id="bold-and-italic">Bold and Italic</h3>
        <ul>
          <li>
            <strong>Bold</strong> text is perfect for highlighting key points.
          </li>
          <li>
            <em>Italic</em> text is great for emphasizing specific words.
          </li>
          <li>
            <strong>
              <em>Bold and Italic</em>
            </strong>
            text can be used for extra emphasis.
          </li>
        </ul>
        <h3 id="blockquotes">Blockquotes</h3>
        <p>
          Blockquotes are an excellent way to highlight quotes or important
          information. They are styled beautifully with the Typography plugin.
        </p>
        <blockquote class="alert not-italic items-start text-xs leading-loose *:m-0!">
          <p>
            This is a blockquote. It stands out and draws attention to important
            information. In HTML, blockquotes are created using the
            <code>&lt;blockquote&gt;</code> tag. When used with the Typography
            plugin and daisyUI, blockquotes receive special styling that
            includes indentation and a different background color - making
            quoted text visually distinct from the rest of the content. This
            styling helps create clear visual hierarchy and improves readability
            while maintaining semantic HTML markup.
          </p>
        </blockquote>
        <h2 id="lists-organizing-information">Lists: Organizing Information</h2>
        <p>
          Lists are a great way to organize information in a structured manner.
          Tailwind CSS Typography makes it easy to create both unordered and
          ordered lists.
        </p>
        <h3 id="unordered-lists">Unordered Lists</h3>
        <p>
          Unordered lists use bullet points to list items. They are perfect for
          listing items without a specific order.
        </p>
        <ul>
          <li>First item</li>
          <li>
            Second item
            <ul>
              <li>Subitem one</li> <li>Subitem two</li>
            </ul>
          </li>
        </ul>
        <h3 id="ordered-lists">Ordered Lists</h3>
        <p>
          Ordered lists use numbers to list items. They are ideal for steps or
          items that need to be in a specific order.
        </p>
        <ol>
          <li>Step one</li>
          <li>
            Step two
            <ol>
              <li>Substep one</li> <li>Substep two</li>
            </ol>
          </li>
        </ol>
        <h2 id="links-and-images-adding-interactivity">
          Links and Images: Adding Interactivity
        </h2>
        <h3 id="links">Links</h3>
        <p>
          Links are essential for navigation and adding interactivity to your
          content. Tailwind CSS Typography ensures that links are styled
          consistently.
        </p>
        <p>
          <a href="https://daisyui.com" rel="nofollow" target="_blank">
            Visit daisyUI
          </a>
        </p>
        <h3 id="images">Images</h3>
        <p>
          Images are a great way to enhance your content visually. The
          Typography plugin makes sure they are displayed beautifully.
        </p>
        <p>
          <img
            src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
            alt="Daisy flowers"
          />
        </p>
        <h2 id="code-showcasing-your-work">Code: Showcasing Your Work</h2>
        <p>
          Code snippets are crucial for technical content. Tailwind CSS
          Typography provides excellent styling for both inline code and code
          blocks.
        </p>
        <h3 id="inline-code">Inline Code</h3>
        <p>
          Inline code is perfect for highlighting small pieces of code within a
          sentence.
        </p>
        <p>
          Here is an example of inline code:
          <code>console.log('Hello, world!');</code>
        </p>
        <h3 id="code-blocks">Code Blocks</h3>
        <p>
          Code blocks are ideal for displaying larger pieces of code. They are
          styled beautifully with the Typography plugin.
        </p>
        <CodeBlock lang="tsx">
          {`function greet() {
  console.log('Hello, world!');
}`}
        </CodeBlock>
        <h2 id="tables-organizing-data">Tables: Organizing Data</h2>
        <p>
          Tables are essential for organizing data in rows and columns. Tailwind
          CSS Typography ensures that tables are styled consistently and look
          great.
        </p>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tailwind CSS</td>
              <td>Utility-first CSS framework</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>daisyUI</td>
              <td>Tailwind CSS component library</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Typography</td>
              <td>Tailwind CSS plugin for styling HTML</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Markdown</td>
              <td>Lightweight markup language</td>
              <td>Popular</td>
            </tr>
            <tr>
              <td>Themes</td>
              <td>Various themes for styling</td>
              <td>Available</td>
            </tr>
          </tbody>
        </table>
        <h2 id="colors-adding-vibrancy">Colors: Adding Vibrancy</h2>
        <p>
          daisyUI provides various color schemes that you can use to add
          vibrancy to your content. Here are some examples:
        </p>
        <ul>
          <li>
            <span class="text-primary">Primary text</span>
          </li>
          <li>
            <span class="text-secondary">Secondary text</span>
          </li>
          <li>
            <span class="text-accent">Accent text</span>
          </li>
          <li>
            <span class="text-info">Info text</span>
          </li>
          <li>
            <span class="text-success">Success text</span>
          </li>
          <li>
            <span class="text-warning">Warning text</span>
          </li>
          <li>
            <span class="text-error">Error text</span>
          </li>
        </ul>
        <h2 id="conclusion">Conclusion</h2>
        <p>
          Styling your Markdown-generated HTML has never been easier, thanks to
          the Tailwind CSS Typography plugin and daisyUI themes. By using
          headers, text formatting, lists, links, images, code snippets, tables,
          and colors, you can create rich and visually appealing content with
          minimal effort. Experiment with these elements and see how they look
          with different daisyUI themes. Happy styling!
        </p>
      </div>
    </>
  );
});
