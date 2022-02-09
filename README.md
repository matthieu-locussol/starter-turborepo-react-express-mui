# Starter using Turborepo ✨ [![CodeQL](https://img.shields.io/github/workflow/status/matthieu-locussol/starter-turborepo-react-express-mui/CodeQL?label=CodeQL&logo=github&logoColor=white)](https://github.com/matthieu-locussol/starter-turborepo-react-express-mui/actions/workflows/codeql.yml) [![Deploy](https://img.shields.io/github/workflow/status/matthieu-locussol/starter-turborepo-react-express-mui/Deploy?label=Vercel%20deployment&logo=vercel&logoColor=white)](https://github.com/matthieu-locussol/starter-turborepo-react-express-mui/actions/workflows/deploy.yml)

## Structure

This starter is based on my personal preferences and has been made to provide an extendable template
for web applications requiring a separated front-end & back-end repositories. All repositories are
using TypeScript and I use `yarn` as the monorepo package manager. It is opiniated and organized the
way I like:

-  ### Apps
   -  **app-frontend**: front-end for your application, using React & Vite
   -  **app-backend**: back-end for your application, using Express & esbuild
   -  **website**: a static website using Next.js automatically deployed on Vercel using a workflow
-  ### Packages
   -  **scripts**: shared ESlint & Jest configurations
   -  **tsconfig**: shared TypeScript configurations for Vite, React & Node applications
   -  **ui**: shared UI components with Storybook
   -  **utils**: shared utility functions

You can access packages from other packages by listing them in a repository's dependencies and
importing from them using the suffix `@packages/`. As an example, you can import `_assert` using
`import { _assert } from '@packages/utils'`.

This starter comes with some additional features:

-  **Commitlint** to ensure every commit you add to the repository follow some
   [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) good practices
-  **Husky** to ensure that ESlint, Prettier & TypeScript pass successfully before commiting any
   changes
-  **Standard-version** to easily release a new application version & generate a CHANGELOG.md file
   from your commits (just commit your work and run `yarn release --release-as [patch|minor|major]`)
-  Built-in extendable **GitHub workflow** to automatically deploy `website` app on Preview
   environment (for PR) or Production environment (if merged in `master`). Deployment only occurs
   after ESlint, Prettier, tsc & tests correctly pass the CI.

## Setup environment

In order for the built-in GitHub workflow to run properly, you will need to add the following GitHub
secrets to your repository:

| Secret name            | How can I find it?                                                                                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VERCEL_PROJECT_ID      | Under your project settings: [https://vercel.com/<ORGANIZATION_ID>/<PROJECT_ID>/settings](https://vercel.com/<ORGANIZATION_ID>/<PROJECT_ID>/settings) (bottom of the page) |
| VERCEL_ORGANIZATION_ID | You can find it under: [https://vercel.com/account](https://vercel.com/account) (bottom of the page)                                                                       |
| VERCEL_TOKEN           | You need to generate a new access token from your account: [https://vercel.com/account/tokens](https://vercel.com/account/tokens)                                          |

_**Note:** make sure to set the **Root directory** to `apps/website` in your project settings to
deploy the correct ap on Vercel._
