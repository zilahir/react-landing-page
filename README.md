This is a repo for an ongoing development of a landing page written in react.

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

### General rules

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

## Contact

In case of questions, drop me a [message](mailto:zilahi@gmail.com)
