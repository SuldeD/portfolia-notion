// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
var getSlug = (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
var postComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  },
  image: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`
  },
  og: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
    imageless: { type: "boolean", required: false }
  },
  computedFields: postComputedFields
}));
var projectComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  },
  image: {
    type: "string",
    resolve: (doc) => `/projects/${getSlug(doc)}/image.png`
  }
};
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `project/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    time: { type: "string", required: true },
    url: { type: "string", required: false },
    tags: { type: "json", required: false }
  },
  computedFields: projectComputedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project]
  // mdx: {
  //   rehypePlugins: [() => rehypePrism, rehypeSlug],
  // },
});
export {
  Post,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZFD3YCT3.mjs.map
