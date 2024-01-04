# emerald-json-editor-react-example

Example project showcasing how to use [emerald-json-editor-react](https://www.npmjs.com/package/emerald-json-editor-react) npm package.

Clone repo and cd into emerald-json-editor-react-example

Install:

#### `npm install`

To start in browser, usually on port 3000:

#### `npm start`

## Guide

#### /components

- JsonForm.js component that imports the JsonEditorWrapper from emerald-json-editor-react. Takes schema, data, setData, and importFile as props.

#### /services

- schema.json [View](src/services/schema.json). This schema is what is used to populate the json editor. In this example it uses a string, number, boolean and url field.
- importFile.js [View](src/services/importFile.js). This is an example of a file upload function. To make it work you need to add your own url to this function, and include tokens if necessary.

#### /styles

- index.css imports tailwind and fonts.
- form.css displays an example of customised styling for the json editor.
