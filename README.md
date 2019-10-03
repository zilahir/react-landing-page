This is a repo for an ongoing development of a landing page written in `react`.

## List of components

| task              | status   |
| ----------------- | -------- |
| header `h1`       | :hammer: |
| header `h2`       | :hammer: |
| header menu items | :hammer: |
| `button`          | :hammer: |
| text block `p`    | :hammer: |

## Code of conduct

PRs are welcome. To contribute to this repo, first `fork` it, create a local `branch` with some meaningful name, and start working. When you are done, submit a `PR` and I'll review it.

## General rules

We are _not_ using `class` based components, only `stateless function` components. You must follow the rules set by the provided `esLint` configuration. `husky` package is applied, so you will not be able to commit to this repository if the requirements are not set.

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

**NOTE:** Please comment your components under the import section, so it will it's purpose will be clearly stated.

1. We are using `css-grid` system in this project. More particularly [this](https://github.com/jxnblk/react-css-grid) one.

2. We are using [`css modules`](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet), but with `scss` syntax. Keep the `scss` as organizad as possible, try to avoid _endless_ nesting.

3. You are **not** allowed to use `#id` selectors.

4. Write as generic components as possible to help reusability.

5. Using `prop-types` are mandatory.

6. Try to avoid installing 3rd party `react` components, unless it's a must. Try to implement everything by your own.

## File structure

Each component have to be in `components` folder.

1. in `common/<component-name>`, if it's a _common_ component.

2. in `screens/<screen-name>`, if it's a page.

## Folder structure

- **components**
  - **MenuItem**
    - [index.js](components/MenuItem/index.js)
    - [MenuItem.module.scss](components/MenuItem/MenuItem.module.scss)
  - **api**
    - [headerMenu.js](components/api/headerMenu.js)
  - **common**
  - [list.md](components/list.md)
  - **TopHeader**
    - [TopHeader.module.scss](components/TopHeader/TopHeader.module.scss)
    - [index.js](components/TopHeader/index.js)

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

## Dependencies

Here's a list of _important_ dependencies we are using in this project:

1. [`framer-motion`](https://github.com/framer/motion)
2. [`react-waypoint`](https://github.com/civiccc/react-waypoint)
3. [`redux`](https://github.com/reduxjs/redux)
4. [`redux-thunk`](https://github.com/reduxjs/redux-thunk)
5. [`styled-components`](https://github.com/styled-components/styled-components)

Please read the documentation of these packages if you are not familiar with them.

## Deployments

This project is automatically deployed from branch `master`, using [`netlify`](https://www.netlify.com). You can follow the development process on this [url](https://react-landnig-page.netlify.com/).

## Contact

In case of questions, drop me a [message](mailto:zilahi@gmail.com).
