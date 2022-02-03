module.exports = {
   extends: ['../../packages/scripts/react/.eslintrc'],
   parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: __dirname,
   },
};
