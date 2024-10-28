export default {
  name: 'commercialRealEstate',
  title: 'Commercial Real Estate Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title of the section',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description text for the section',
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'string',
      description: 'Text for the "Experience" field',
    },
    {
      name: 'qualification',
      title: 'Qualification',
      type: 'string',
      description: 'Text for the "Qualification" field',
    },
    {
      name: 'individualApproach',
      title: 'Individual Approach',
      type: 'string',
      description: 'Text for the "Individual Approach" field',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the consultation button',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {hotspot: true},
      description: 'Images for the carousel',
    },
  ],
}
