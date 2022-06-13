/** @format */
const path = require("path");

module.exports = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: "node",

  // tell webpack the root file of our
  // server application
  entry: "./src/index.js",

  // tell webpack where to put the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  // tell webpack to run babel on every file it runs through HINT:( module : { rules: [ { } ] } )

  module: {
    rules: [
      {
        // check for js files.
        test: /\.js?$/,

        // tell webpack which loader to use , in this case babel-loader.
        loader: "babel-loader",

        // tell webpack which directories to ignore, in this acse, node-modules.
        exclude: /node-modules/,

        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
