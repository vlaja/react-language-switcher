# Contributing

We are open to, and grateful for, any contributions made by the community. By contributing to `react-language-switcher`, you agree to abide by the [code of conduct](https://github.com/vlaja/react-language-switcher/blob/master/CODE_OF_CONDUCT.md).

## Reporting Issues and Asking Questions

Before opening an issue, please search the [issue tracker](https://github.com/vlaja/react-language-switcher/issues) to make sure your issue hasn't already been reported.

## Development

Visit the [Issue tracker](https://github.com/vlaja/react-language-switcher/issues) to find a list of open issues that need attention.

Fork, then clone the repo:

```
git clone https://github.com/your-username/react-language-switcher.git
```

Install dependencies

```
yarn install
```

We are using yarn internally, so please if you do use npm, do not commit the package-lock.json file with your changes.

### Building the library

Running the `build` task will create both a CommonJS build with declarations for all files.

```
yarn build
```

### Building the documentation

Running the `build-storybook` task will build a new static version of storybook documentation with your included changes.

Please if you change or add new documentation, runa build before submitting a PR.

```
yarn build-storybook
```

### Linting

This project is linted via eslint, along with configs and packages for maintaining file imports, prettier and typescript support.

To run the tests:

```
yarn lint
```

In case you have some linting issues reported when runing `yarn lint` which are not popping up inside your IDE, let us know and we will help you get to the bottom of this.

You can however let our config fix it for you by running `yarn lint:fix`.

### Testing

Currently this library doesn't have any tests, but we plan on adding them via jest and enzyme after the core functionality is covered, and we move closer to 1.0.0 release.

### New Features

Please open an issue with a proposal for a new feature or refactoring before starting on the work. We don't want you to waste your efforts on a pull request that we won't want to accept.

This library is intended to be flexible and as unopinionated as possible, and we will especially weight in features that should be inside the core of the package.

### New Middleware

Please open an issue with a proposal for a new middleware integration or refactoring before starting on the work.

Most of the new or 3rd party features should be done via middlewares, so we can keep the library very lean for people who will not use these features.

## Submitting Changes

-   Open a new issue in the [Issue tracker](https://github.com/vlaja/react-language-switcher/issues).
-   Fork the repo.
-   Create a new feature branch based off the `develop` branch.
-   Make sure there are no linting errors.
-   Submit a pull request, referencing any issues it addresses.

Please try to keep your pull request focused in scope and avoid including unrelated commits. If you want to contribute, but you have issues with maintaining the history of your git commits, let us know and we will gladly help you out with that.

After you have submitted your pull request, we'll try to get back to you as soon as possible. We may suggest some changes or improvements, but we thank you for all improvements that you want to bring to this library.

Thank you for contributing!
