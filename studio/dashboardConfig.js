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
                  buildHookId: '5ebb45787a239beafa4cd934',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pagesu-studio',
                  apiId: '3fe239b3-0998-4ea0-9c5a-fd800df044c7'
                },
                {
                  buildHookId: '5ebb4578938b7b2fa0376520',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pagesu',
                  apiId: 'df6aae67-2da7-4be9-8ad5-e1cb1aefd7cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davidevaliante/sanity-nextjs-landing-pagesu',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pagesu.netlify.app', category: 'apps'}
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
