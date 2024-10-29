// schemas/partnerLogos.js

export default {
  name: 'partnerLogo',
  title: 'Партнеры',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the partner (e.g., Apple, Samsung, Huawei).',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: "Upload the partner's logo image here.",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: "URL to the partner's website or relevant page.",
    },
  ],
}
