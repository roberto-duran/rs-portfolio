import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),
    defineField({
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'companyLogo',
      title: 'CompanyLogo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'companyName',
      title: 'CompanyName',
      type: 'string',
    }),
    defineField({
      name: 'companyDescription',
      title: 'CompanyDescription',
      type: 'text',
    }),
    defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    }),
    defineField({
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of:[{ type: "string" }],
    }),
  ],
})
