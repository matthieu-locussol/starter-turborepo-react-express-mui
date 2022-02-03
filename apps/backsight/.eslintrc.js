module.exports = {
   extends: ['../../packages/scripts/node/.eslintrc'],
   parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: __dirname,
   },
};
