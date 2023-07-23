import React, { Fragment } from 'react';
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import "github-markdown-css/github-markdown.css"
import "github-markdown-css/github-markdown-dark.css"
import { Box } from "@chakra-ui/react";

const Preview = ({value}) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeHighlight, {
      ignoreMissing: true,
    })
    .use(rehypeReact, {
      createElement: React.createElement,
      Fragment,
    })
    .processSync(value).result;

  return <Box p={2} className="preview markdown-body">{md}</Box>
};

export default Preview;