// schemas/project.js
export default {
  name: 'project',
  title: 'Наши проекты',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
  ],
}
