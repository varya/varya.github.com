```js noeditor
const Color = require("./Colors.js").Color;
const colorScheme = require("./Colors.js").colorScheme;

let colorSet = [];
Object.keys(colorScheme).forEach((i) => {
  colorSet.push(
    <Color color={i} key={`color-${i}`}>
      {i}
    </Color>
  );
});

<div>{colorSet}</div>;
```
