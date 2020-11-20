export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb7b6de9c03bafefcf082ff',
                  title: 'Sanity Studio',
                  name: 'julekalender-sanity-studio',
                  apiId: '20907761-9351-449f-b150-9b328062a229'
                },
                {
                  buildHookId: '5fb7b6df5c170af027f56fa1',
                  title: 'Landing pages Website',
                  name: 'julekalender-sanity',
                  apiId: '4ffcaa30-4cec-4ee1-9628-c4b20c79d420'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frisol97/julekalender-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://julekalender-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
