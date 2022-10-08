
// 举例：works is an array. works [work1, work2,work3]
// 举例：work is object. work {title: 'xx', description:'xxx',projectLink:'xxxx2',codeLink:'xxx1'，imgUrl:'xxxx'，tags:'xxxxx1'}
export default {
  name: "works",
  title: "Works",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },

    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
};
