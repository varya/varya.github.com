---
title: GitHub package — way to go for your private npm packages

date: 2022-08-03
cover: storage.jpg

meta:
  desc: >
    Step-by-step guide on how to use a free GitHub package registry to store private npm packages (often needed for the design systems). The article shows how to set up an automatic workflow for publishing and how to get the packages in use.
---

<div data-excerpt>

Often happens that an npm package should be published to a secure registry. In many cases, organizations have their own and all the internal stuff goes there. But what to do if your oranization does not have anything like that? Apparently, [Github Packages](https://docs.github.com/en/packages) are the way to go. In case your repository is private, its packages will be too! Below, I describe a simple workflow that I set today.

</div>

In this case, the packages are built and published in a pipeline operated by [Github Actions](https://github.com/features/actions). To set a workflow there, you would need to create a YAML file in the `.github/workflows/` folder. This is mine, for a package called `@yourscope/design-library`.

```
name: Release library

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install NodeJS
        uses: actions/setup-node@v3
        with:
          node-version: "16"
          registry-url: "https://npm.pkg.github.com"
          scope: "@yourscope"

      ### Check in, install, and build as your project needs it

      - name: Release package
        run: |
          npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Note that when publishing, there should be the `NODE_AUTH_TOKEN` environmental variable available. However, its value is `GITHUB_TOKEN` taken from secrets. You don't need to generate such a secret, your repository already has it in the background.

Another thing to spot is that when installing Node, you should define the npm registry and the scope. That can be done with additional parameters as shown in the code example.

## How to release?

Releases are happening in a pipeline via GitHub Actions once the `main` branch is updated. Releases are successful if the version number is unique. Practically, that means that a design-system developer needs to change the version number to trigger the release. There is room for improvement — it would be much nicer not to run the publishing job if the package of such a version already exists.

## How to get the package?

### Authentification at GitHub Packages

The GitHub Package registry is not open, you should get an access to it. For that, you need to authenticate.

1. Create your _Personal Access Token_ at GitHub here https://github.com/settings/tokens
   - It's a good habit to have a separate token for each project
   - Name it using the _Note_ field so that later you understand what the token is for
   - The token should at least have _read:packages_ permission
   - Do not forget to copy the token after you have it generated
2. Login to the npm registry:
   ```
   npm login --scope=@yourscope --registry=https://npm.pkg.github.com
   > Username: USERNAME
   > Password: TOKEN
   > Email: PUBLIC-EMAIL-ADDRESS
   ```

For more information, follow the official GitHub documentation: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token

### Installing the design-system package at the very first time

Before installation, you need to communicate that `@yourscope` npm packages should
be taken from GitHub Packages. You can do it by adding an `.npmrc` file to the root of your project. The content of the file should be as the following:

```
@yourscope:registry=https://npm.pkg.github.com
```

Keep the `.npmrc` file under version control so that your colleagues also could get the packages from the right place.

Now, you can install the package:

```
npm install --save @yourscope/design-system
```

or

```
yarn add @yourscope/design-system
```

### Installing project dependencies

If you have a project with `@yourscope/design-system` as a dependency, when being authorized, you should be able to install it together with all the other dependencies:

```
npm install
```

or

```
yarn
```
