// @source: https://levelup.gitconnected.com/how-to-generate-react-components-from-your-terminal-a27741a5b862
const fs = require("fs");
const { component, story, index } = require("./component-templates.js");

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error("You must include a component name.");

// folder prefix to be removed
const dir = `./src/components/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir))
  throw new Error("A component with that name already exists.");

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.js
fs.writeFile(`${dir}/${name}.js`, component(name), writeFileErrorHandler);
// storybook.js
fs.writeFile(`${dir}/${name}.stories.js`, story(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${dir}/index.js`, index(name), writeFileErrorHandler);
