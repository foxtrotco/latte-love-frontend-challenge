const path = require('path');

module.exports = {
    stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config, { configType }) => {
        config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
        config.resolve.alias = {
            ...config.resolve.alias,
            '@utils': path.resolve(__dirname, '../utils/index'),
            '@api': path.resolve(__dirname, '../api/index'),
            '@components': path.resolve(__dirname, '../components/index'),
            public: path.resolve(__dirname, '../public'),
        };

        config.module.rules.push({
            test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
            use: [
                {
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]',
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        });

        return config;
    },
};
