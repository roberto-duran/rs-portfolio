import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title for social skill media',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url'
    })
  ],
})
