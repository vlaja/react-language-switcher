const path = require('path');

module.exports = {
    stories: [
        '../stories/documentation/welcome.stories.mdx',
        '../stories/documentation/*.stories.mdx',
        '../stories/components/*.stories.mdx',
        '../stories/examples/*.stories.mdx',
        '../stories/**/*.stories.(ts|tsx|js|jsx|mdx)'
    ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        {
            name: '@storybook/preset-create-react-app',
            options: {
                tsDocgenLoaderOptions: {
                    tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
                }
            }
        },
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true
            }
        }
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]]
            }
        });

        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    }
};
