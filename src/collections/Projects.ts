import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
  slug: "projects",
  auth: false,
  fields: [
    {
      name: "Title",
      label: "Project name",
      type: "text",
    },
    {
      name: "Description",
      label: "Project Description",
      type: "text",
    },
    {
      name: "Github",
      label: "Project Github URL",
      type: "text",
    },
    {
      name: "Demo",
      label: "Project Demo URL",
      type: "text",
    },
    {
      name: "type",
      label: "Project Tech Stack",
      type: "text",
    },
  ],
};

export default Projects;
