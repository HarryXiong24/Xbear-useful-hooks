// plopfile.js
const path = require('path');

module.exports = (plop) => {
  plop.setGenerator('hook', {
    description: 'create new hooks',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'hook name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve(__dirname, '../packages/hooks/{{name}}/index.ts'),
        templateFile: path.resolve(
          __dirname,
          '../templates/hook-template/index.hbs'
        ),
        // data: {
        //   a: 1,
        //   b: 2,
        //   c: 3,
        // },
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../packages/hooks/{{name}}/doc.md'),
        templateFile: path.resolve(
          __dirname,
          '../templates/hook-template/doc.hbs'
        ),
      },
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../src/pages/{{pascalCase name}}Page/index.tsx'
        ),
        templateFile: path.resolve(
          __dirname,
          '../templates/page-template/index.hbs'
        ),
      },
    ],
  });
};
