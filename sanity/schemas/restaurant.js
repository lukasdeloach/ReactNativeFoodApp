
export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "string",
      type: "string",
      title: "Restaurant Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitute of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Address of the Restaurant",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a number between 1 and 5",
      validation: (Rule) => Rule.required()
        .max(5)
        .min(1)
        .error("Please enter a valid number between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{type: "category"}],
    },
    {
      name: "dishes",
      type: "array",
      tite: "Dishes",
      of: [{type: "reference", to: [{type: "dish"}]}],
    }
  ],
};
