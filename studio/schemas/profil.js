export default {
  title: 'Profil',
  name: 'profile',
  type: 'document',
  fields: [
    {
      title: 'Tittel',
      name: 'title',
      type: 'string'
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
    type: 'array', 
    of: [{
        type: 'block', 
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'Quote', value: 'blockquote'},
        ],
        lists: [{title: 'Bullet', value: 'bullet'}],
        marks: {
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
          ],
          annotations: [
            {
              title: 'URL',
              name: 'link',
              type: 'object',
              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'url',
                },
              ],
            },
          ],
        },
      },
    ],
  },
  ]
}
    

