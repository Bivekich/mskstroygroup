// schemas/service.js
export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    {
      name: 'icon',
      type: 'image', // or "string" if you're using a text/icon library instead of images
      title: 'Icon',
      options: {
        hotspot: true, // Enable hotspot for better image cropping
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
}
