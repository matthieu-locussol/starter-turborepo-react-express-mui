module.exports = {
   extends: ['../scripts/node/.eslintrc'],
   parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: __dirname,
   },
};
