export default {
    name: 'contactDetails',
    title: 'Контакты',
    type: 'document',
    fields: [
      {
        name: 'phone1',
        title: 'Phone Number 1',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'phone2',
        title: 'Phone Number 2',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'workingHours',
        title: 'Working Hours',
        type: 'string',
        validation: Rule => Rule.required()
      }
    ]
  }