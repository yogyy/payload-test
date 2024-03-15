import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  auth: false,
  fields: [
    {
      name: "Title",
      type: "text",
    },
    {
      name: "Content",
      type: "richText",
    },
  ],
};

export default Posts;
