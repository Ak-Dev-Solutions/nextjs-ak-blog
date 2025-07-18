import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers';
import OnThisPage from "@/components/onthispage";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

export async function generateStaticParams() {
  const files = fs.readdirSync("content");
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default async function Page({ params }) {
  const filepath = `content/${params.slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound(); // Triggers 404 page
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-6xl p-4 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">{data.title}</h1>
      <p className="pl-4 mb-2 text-base italic border-l-4 border-gray-500">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-2">
        <p className="mb-4 text-sm italic text-gray-500">By {data.author}</p>
        <p className="mb-4 text-sm text-gray-500">{data.date}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>
      <OnThisPage htmlContent={htmlContent} />
    </div>
  );
}
