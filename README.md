# React Native bootcamp - What's the weather today

## Prerequisite

- Know TypeScript
- Setup NodeJS and Yarn

## Getting started

1. Completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup?guide=native&platform=android&package-manager=yarn) instructions till "Creating a new application" step, before proceeding.
1. Create a new application using

```bash
npx react-native init YourProjectName --template react-native-template-typescript
```

From RN v0.71, you can omit `--template react-native-template-typescript`

## Tech stack

| Library                 | Category           | Version | Description                                    |
| ----------------------- | ------------------ | ------- | ---------------------------------------------- |
| React Native            | Mobile Framework   | v0.72   |                                                |
| React                   | UI Framework       | v18     |                                                |
| TypeScript              | Language           | v4      |                                                |
| React Navigation        | Navigation         | v6      |                                                |
| apisauce                | REST client        | v2      | A wrapper for Axios. Communicate with back-end |
| react-native-config     | Config             | v1.5    | dotenv for React Native                        |
| react-native-fast-image | Component          | v8.6    | Better Image component                         |
| Flipper                 | Debugger           |         | Native debugging                               |
| React Native Debugger   | Inspector/Debugger |         | JS debugging                                   |
| Hermes                  | JS engine          |         | Fine-tuned JS engine for RN                    |
| Jest                    | Test Runner        | v29     | Standard test runner for JS apps               |
| date-fns                | Date library       | v2      | Excellent date library                         |

## Project structure

- `.env` contain secrets that you don't want them on git. Require `react-native-config`
- `app`
  - `assets` static resource such as images, icons,...
  - `components` shared custom component
  - `config` store environment variables and provide typing for `.env` file. You can have different config base on `__DEV__` flag
  - `constants`
  - `models` data types for `service` output and components. Can combine with Redux or MobX-State-Tree
  - `navigators` this is where your `react-navigation` navigators will live.
  - `screens` this is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along **components** or **other helper** files.
  - `services` any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).
  - `utils` this is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.
