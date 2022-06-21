export default {
    title: 'Gallery',
    name: 'gallery',
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
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
            hotspot: true,
            crop_type: "sanity.imageCrop"
        }
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text'
      },
      {
        title: 'Dimensions',
        name: 'dimensions',
        type: 'string'
      },
      {
        title: 'Artist',
        name: 'author',
        // A reference is a way to point to another document
        type: 'string',
        to: [{type: 'galleri'}]
      }
    ]
  }