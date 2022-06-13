/** @format */

module.exports = {
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
