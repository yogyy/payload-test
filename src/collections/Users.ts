import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: "username",
  },
  fields: [
    {
      name: "username",
      type: "text",
      required: true,
      unique: true,
      saveToJWT: true,
    },
  ],
};

export default Users;
