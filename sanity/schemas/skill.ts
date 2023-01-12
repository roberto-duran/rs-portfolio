import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the skill',
      type: 'string',
    }),
    defineField({
      name: 'progress',
      title: 'progress',
      type: 'number',
      description: 'Progress of the skills 0 to 100%',
      validation: (Rule) => Rule.min(0).max(100)
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'color',
      title: 'Color',
      description: 'Color of the skill',
      type: 'string',
    }),
  ],
})
