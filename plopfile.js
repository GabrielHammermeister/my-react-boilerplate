module.exports = plop => {
    plop.setGenerator('component', {
        description: 'application component logic',
        prompts: [
           {
              type: 'input',
              name: 'name',
              message: 'component name please'
           }
        ],
        actions: [
           {
              type: 'add',
              path: './src/components/{{pascalCase name}}/{{pascalCase name}}.index.tsx',
              templateFile: 'generators/templates/components/index.tsx.hbs'
           },
           {
              type: 'add',
              path: './src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
              templateFile: 'generators/templates/components/styles.ts.hbs'
           }
        ]
     })
}