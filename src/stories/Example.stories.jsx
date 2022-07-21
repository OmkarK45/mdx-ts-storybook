import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDX from "@mdx-js/runtime";

export default {
  title: "ExampleMDX_Error"
};

export const MDXExample = () => (
  <MDXProvider components={{}}>
    <MDX>{"# HEADER"}</MDX>
  </MDXProvider>
);
