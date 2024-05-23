# Anchor Fabrication Website Frontend
Built with Gatsby / React
[See Gatsby Documentation for more](https://www.gatsbyjs.com/docs/)

## Setup

1. Use `nvm use` when changing into the directory, or [update your shell to do this automatically](https://github.com/nvm-sh/nvm#deeper-shell-integration)
2. If you do not have it installed, install it with: `nvm install 14.16.0`
3. Ensure you install dependencies: `yarn`
4. Start the development server: `yarn dev`

### Orchestration with Back-end

Make sure you have the backend up and running first, or you'll get an error like `Cannot query field "allStrapiTeamMember" on type "Query"  graphql/template-strings`.

### Environment Files
Environment files for development and production need to be created manually on disk, so that Gatsby can pull the proper API URL when running in development mode, or when building. See https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/ for reference.

Best practice states these files should not be checked into version control. Simply create a .env.development file, a .env.staging file, and a .env.production file. Within .env.development, place the following code:
```
GATSBY_API_URL=http://localhost:1337
GATSBY_FRONTEND_URL=http://localhost:8000
```

Do the same for .env.staging and .env.production, replacing the local URL with the remote URL for either the development server or production server. If you need to include the API URL within the app's code, then simply use `{process.env.GATSBY_API_URL}`.

## Creating New Strapi Pages and Collections

- After you create them in Strapi, update `gatsby-config.js` to add it
- [Ensure they are enabled to be consumed publicly](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#step-3-set-roles-permissions)
- Restart your development servers to ensure they are collected
- Use [Grapiql](http://localhost:8000/__graphiql) to verify things are available

## Production
If changes are needing to be pushed to the production or live website, then they will need to be merged into the `production` branch.

#### Apple M1 install (macOS Monterey 12.1)
# Node x.x.x install
* Note: If `current node version < node v15`, node may not work or won't install some node packages.
* Some issues you may encounter:
- using `nvm` to install versions older than `15`, may not be able to compile correctly.
- One Solution to this issue is to change the architecture of your shell from arm64 to x86.
* Let's assume that:
- you already have version `12.20.1` installed using `nvm`. Check architecture of the `node` binary, `node -p process.arch`.
- `arm64` confirms that the arch is for the M1 chip, which is causing the problems.
- run `nvm uninstall 12.20.1`
- run `arch -x86_64 zsh`, this will open a session and should be able to install any node version needed.
- run `nvm install 12.20.1`, or any version that is needed.
- run `node -p process.arch`, if `x64`, this will confirm that it successfully installed the correct `node` binary.
- run `exit`, exit the session.

# Warning: Node Packages Need To Be Installed Before Exiting Session
* Note: `npm` packages need to be installed before switching back to the M1 chip.
- run `arch -x86_64 zsh`, this will open a session and should be able to install any node version needed.
- run `npm install`
- run `exit`, exit the session.

