import type { StorybookConfig } from "@storybook/react/types";
const path = require("path");
const mainConfig: StorybookConfig = {
  stories: ["../components/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: ["nativewind"],
        babelPlugins: ["nativewind/babel"],
      },
    },
  ],
  staticDirs: ["../static"],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    return {
      ...config,
    };
  },
};

module.exports = mainConfig;
