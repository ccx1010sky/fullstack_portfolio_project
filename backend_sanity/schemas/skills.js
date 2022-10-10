export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "bgColor",
      title: "BgColor",
      type: "string",
    },

    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
