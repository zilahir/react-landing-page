# General

This is a repo for an ongoing development of a landing page written in `react`.

[![Build Status](https://travis-ci.org/zilahir/react-landing-page.svg?branch=master)](https://travis-ci.org/zilahir/react-landing-page)

## List of components

| task                  | status             | props                             |
| --------------------- | ------------------ | --------------------------------- |
| header `h1`           | :white_check_mark: | `text:string`, `className:string` |
| header `h2`           | :white_check_mark: | `text:string`, `className:string` |
| header menu items     | :hammer:           |
| `button`              | :white_check_mark: |
| text block `p`        | :white_check_mark: |
| testimonials `(logo)` | :white_check_mark: |
| map                   | :white_check_mark: |
| team                  | :white_check_mark: |
| phone                 | :white_check_mark: |
| macbook               | :white_check_mark: |

## Code of conduct

PRs are welcome. To contribute to this repo, first `fork` it, create a local `branch` with some meaningful name, and start working. When you are done, submit a `PR` and I'll review it.

### General rules

We are _not_ using `class` based components, only [`stateless function`](https://www.robinwieruch.de/react-function-component#react-stateless-function-component) components. You _must_ follow the rules set by the provided [`ESlint`](https://eslint.org/) configuration. [`husky`](https://github.com/typicode/husky) package is applied, so you will not be able to commit to this repository if the requirements are not met.

Example:

```
/**
* @author zilahir
* @function MenuItem
* */

const MenuItem = () => (
	<div>MenuItem</div>
)

export default MenuItem
```

**NOTE:** Please comment your components under the import section, so it's purpose will be clearly stated.

1. We are using `flex-grid` system in this project. More particularly [this](https://roylee0704.github.io/react-flexbox-grid/) one.

2. We are using [`css modules`](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet), but with `scss` syntax. Keep the `scss` as organizad as possible, try to avoid _endless_ nesting.

3. You are **not** allowed to use `#id` selectors.

4. Write as generic components as possible to help reusability.

5. Using [`prop-types`](https://reactjs.org/docs/typechecking-with-proptypes.html) are mandatory. Read the docs of `prop-types` [here](https://reactjs.org/docs/typechecking-with-proptypes.html) if you are not familiar with it.

6. Try to avoid installing 3rd party `react` components, unless it's a must. Try to implement everything by your own.

## Hooks

Since `hooks` has been introduced to `react`, let's aim to use them.

For example:

```
import React, { useState } from 'react'

const [isVisible, setIsVisible] = useState(false)
```

and when you need to set it's value

```
setIsVisible(true)
```

Read more about `react-hooks` in it's [documentation](https://reactjs.org/docs/hooks-overview.html)

For `hooks` follow the naming conventions, as in the example above. If a variable needs to be set to a specific value, use the `set` in the naming, so it will be consequent, and readable.

## Project structure

Each component have to be in `components` folder.

1. in `common/<component-name>`, if it's a _common_ component.

2. in `pages/<page-name>`, if it's a page.

## Folder structure

The structure of the folders tried to be kept as consistent and self explanary explanatory as possible. Everything goes where it belongs.

```markdown
├── App.js
├── App.test.js
├── actions
│ ├── actionTypes.js
│ └── test.js
├── assets
│ └── img
├── components
│ ├── Footer
│ │ ├── Footer.module.scss
│ │ └── index.js
│ └── common
│ ├── Button
│ │ ├── Button.module.scss
│ │ └── index.js
├── reducers
│ └── test.js
├── pages
│ ├── Home
│ │ ├── Home.module.scss
│ │ └── index.js
└── styles
├── mixins
│ ├── Button.scss
└── variables.scss
```

The `filenames` and `foldernames` should be in the following format:

`<SomeComponent>` / `index.js` / `SomeComponent.module.scss`

## Naming conventions

We are using `camelCase` naming conventons for both variable names, and `classNames`, for example:

`TopHeader`, `isVisible`, etc.

The `scss modules` are always important for a specific component as `styles`.

```
import styles from ./TopHeader.module.scss
```

and then referencing them as:

```
<div className={styles.topHeaderWrapper}>
    ...
</div>
```

`styled-component` are part if this repository also, use it if a component requires styles related props, such as `color`, `width`, etc.

Example:

```
import styled from 'styled-components`

const DemoStyledComponent = styled.span`
    display: flex;
    &:before {
        content: '';
        width: ${props =>  props.width}px;
        ...
        ...
        ...
    }
`
```

And then referencing them as the following:

`<DemoStyledComponent width={200} />`

Using the `!important` rule in `CSS` is strictly forbidden. If you come accross a problem which can be solved by using `!important` you need to redefine your `CSS`, or your `component` or both.

Follow the rules of `HTML` tag nesting, to avoid `validateDOMnesting(...)` warnings.

## Fonts

We are using two different font familier here. Both provided by `Google fonts`.

1. `KoHo`
2. `Roboto`

The headings (`h1`, `h2`, etc.) are `KoHo`, and body texts (`p`, `span`, etc.) are `Roboto`.

## Contents

Even for placeholders, it's **forbidden** to hardcode _any_ texts into the code. Let's _mimic_ some `API`, to help in the future connect some `graphQl`. Future plan is once the initial release is done, port this to [`gatsbyJs`](https://www.gatsbyjs.org/)

Example:

```
export const headerMenu = {
	menuItems: [
		{ key: 1, label: 'Home', slug: 'home' },
		{ key: 2, label: 'About us', slug: 'aboutus' },
	],
	getHeaderMenu: () => headerMenu.menuItems,
}
```

Then reference it as the following:

```
import { headerMenu } from <path-to-file>

const menuItem = headerMenu.getHeaderMenu();

```

## Dependencies

Here's a list of _important_ dependencies we are using in this project:

1. [`gatsbyJS`](https://www.gatsbyjs.org/)
1. [`framer-motion`](https://github.com/framer/motion)
1. [`react-waypoint`](https://github.com/civiccc/react-waypoint)
1. [`redux`](https://github.com/reduxjs/redux)
1. [`redux-thunk`](https://github.com/reduxjs/redux-thunk) (_not in use currently_)
1. [`styled-components`](https://github.com/styled-components/styled-components)
1. [`react-parallax`](https://github.com/RRutsche/react-parallax)
1. [`react-responsive`](https://github.com/contra/react-responsive)

Please read the documentation of these packages if you are not familiar with them.

## Deployments

This project is automatically deployed from branch [`master`](https://github.com/zilahir/react-landing-page/commits/master), using [`netlify`](https://www.netlify.com). You can follow the development process on this [url](https://react-landnig-page.netlify.com/).

## Contact

In case of questions, drop me a [message](mailto:zilahi@gmail.com).

# Misc

- This project is licenced under [MIT](https://choosealicense.com/licenses/mit/) licence.
- The photos are in this repo are from [pexels.com](https://pexels.com)

# Design

If you have design suggestioin, or any type of UI / UX related interaction idea's, open an [issue](https://github.com/zilahir/react-landing-page/issues) and let's discuss it.
