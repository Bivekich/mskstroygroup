// schemas/excelUpload.js
export default {
    name: 'excelFile',
    title: 'Прайс-лист',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Name of the Excel file',
      },
      {
        name: 'file',
        title: 'File',
        type: 'file',
        description: 'Upload your Excel file here',
        options: {
          accept: '.xls, .xlsx',
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Description of the Excel file content',
      },
    ],
  };
  