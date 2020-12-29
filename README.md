<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="./src/images/gatsby.svg" width="60" />
  </a>
  <a href="https://tailwindcss.com">
    <img alt="Gatsby" src="./src/images/tailwind.svg" width="60" />
  </a>
  <a href="https://emotion.sh">
    <img alt="Gatsby" src="./src/images/emotion.png" width="60" />
  </a>
</p>
<h1 align="center">
  Tailwind CSS ➕ Emotion Starter for Gatsby
</h1>

Kick off your project with this bare-bones Tailwind CSS + Emotion starter for Gatsby. This starter ships with the packages and configuration files you need to get hit the ground running on your next Tailwind CSS project.

## 📦 Example components

To use Tailwind CSS classes inside of your components you use the `twin.macro` package. You can also create richer styled components using a combination of both Tailwind's classes and your own custom CSS with Emotion. Laslty, if needed, you can use PostCSS to write your own custom CSS as well.

### Standalone Tailwind Classes

```js
import tw from "twin.macro"
import React from "react"

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`

export default () => (
  <div>
    <Heading>Hello, world!</Heading>
  </div>
)
```

### Styled Components with Emotion

```js
import tw, { styled } from "twin.macro"
import React from "react"

import pattern from "../images/pattern.png"

const Container = styled.div`
    ${tw`bg-gray-100 w-full`}
    background-image: url(${background});
    padding: 15px;
`

export default () => (
  <Container>
    <h1>Hello, world!</h1>
  </Container>
)
```

### Combined Standalone + Styled Components Example

```js
import tw, { styled } from "twin.macro"
import React from "react"

import pattern from "../images/pattern.png"

const Container = styled.div`
    ${tw`bg-gray-100 w-full`}
    background-image: url(${background});
    padding: 15px;
`

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`

export default () => (
  <Container>
    <Heading>Hello, world!</Heading>
  </Container>
)
```

### CSS Prop to inline Tailwind Classes

```js
import tw, { css } from "twin.macro"
import React from "react"

export default () => (
  <div
    css={css`
      ${tw`flex items-center justify-between px-4 py-3`}
    `}
  >
    <h1>Hello, world!</h1>
    <h2>I'm a flex item too!</h2>
  </div>
)
```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── src
    ├── .babelrc
    ├── .eslintignore
    ├── .gitignore
    ├── .nvmrc
    ├── .prettierignore
    ├── .prettierrc
    ├── .stylelint.config.js
    ├── babel-plugin-macros.config.js
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    └── tailwind.config.js

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.babelrc`**: This configuration file allows us to fine-tune [Babel's configuration settings](https://babeljs.io/docs/en/configuration). In this starter we are adding the [`babel-preset-gatsby`](https://github.com/gatsbyjs/gatsby/tree/master/packages/babel-preset-gatsby) preset to allow us to customize Babel as needed.

1. **`.eslintignore`**: This file specifies files and folders that we want to exclude from linting with Eslint.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1. **`.nvmrc`**: The `.nvmrc` allows you to lock down a project's node version when using [nvm.](https://github.com/nvm-sh/nvm)

1.  **`.prettierignore`**: This file allows us to specifiy files that we want to exclude from formatting with Prettier.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1. **`.stylelint.config.js`**: [Stylelint](https://stylelint.io/) configuration file to customize stylelint rules in the project. Styleline is enabled to tame CSS errors displayed in some editors due to TailwindCSS's syntaxt inside CSS files.

1.  **`babel-plugin-macros.config.js`**: This file helps us configure Tailwind CSS macros to be used with [Emotion](https://emotion.sh), our CSS-in-JS tool of choice.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser. By default we are injecting Tailwind's [base styles](https://tailwindcss.com/docs/adding-base-styles/#app) into the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1. **`LICENSE`**: Gatsby is licensed under the MIT license.

1. **`package-lock.json`**: (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`postcss.config.js`**: This configuration file allows us to customize our [PostCSS](https://postcss.org/) settings. PostCSS is used to compile the custom css we write outside of Emotion.

1. **`README.md`**: A text file containing useful reference information about your project.

1. **`tailwind.config.js`**: This is the default [Tailwind CSS configuration](https://tailwindcss.com/docs/configuration/) file.
