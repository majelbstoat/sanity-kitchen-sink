export default {
  widgets: [
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
                  buildHookId: '6092b5d8fe1a3b00c425c17f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-37bp4e62',
                  apiId: 'fc642b28-881e-49ad-943f-43f2a9870471'
                },
                {
                  buildHookId: '6092b5d8fce5fb00e5bb8614',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fvbc9ov8',
                  apiId: 'fbda2dc4-dbe6-4247-8ed1-2af25e8f44e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/majelbstoat/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fvbc9ov8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
