# react-language-switcher

`react-language-switcher` is a package that provides a set of components for handling the language switching logic in React applications, based on React >=16.8.0 and React Hooks.

Its main purpose is to provide a flexible and easy way of being able to switch a language inside your application, while staying very lean in terms of external dependencies and as unopinionated as possible in terms of how you should use the library or style its components.

However, this package does not intend to solve other specific localization or internationalization issues. For this purpose we suggest using `react-intl`.

That being said, we are building this as a modular system, and do consider adding integrations with other some other popular libraries like routers, through middleware components.

## Installation

To install the latest stable version:

_yarn_

```
yarn add @prototyp/react-language-switcher
```

_npm_

```
npm install @prototyp/react-language-switcher
```

## Usage

### Gist

The gist of using this plugin consists of two components. A Language provider that provides the language context and the ways of using it, and the Language Switcher component that allows you to style and use this logic.

```jsx
<LanguageProvider config={{ language: 'en', languageList: ['en', 'de', 'fr'] }}>
    <LanguageSwitcher />
</LanguageProvider>
```

### Detailed usage

You can read more about the package and how to use it in more complex scenarios at [our documentation](https://vlaja.github.io/react-language-switcher/?path=/docs/*).

## Reasoning

This package is a result of having to handle language switching logic often, but not being completely comfortable with other similar packages due to the following concerns:

-   lack of TypeScript support
-   default styling which needs to be overriden
-   opinionated thinking how stuff should be styled
-   lack of support for styled components or other CSS-in-JS patterns.
-   dependencies on other localisation libraries

## Dependencies

-   React >=16.8.0

## Key features

-   Very lightweight
-   Requires only React as peer dependency
-   Written in TypeScript
-   Unopinionated in terms of styling
-   Upcoming integrations through middleware
