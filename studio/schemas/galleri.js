export default {
    title: 'Galleri',
    name: 'galleri',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string'
      },
      {
        type: 'slug',
        title: 'Slug',
        name: 'slug',
        options: {
            source: 'title'
        }
      },
      {
        title: 'Bilde',
        name: 'bilde',
        type: 'image',
        options: {
            hotspot: true,
            crop_type: "sanity.imageCrop"
        }
      },
      {
        title: 'Beskrivelse',
        name: 'description',
        type: 'text'
      },
      {
        title: 'Kunstner',
        name: 'author',
        // A reference is a way to point to another document
        type: 'string',
        to: [{type: 'galleri'}]
      }
    ]
  }