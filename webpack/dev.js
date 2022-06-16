const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./common');

module.exports = merge(
    common, {
        mode: 'development',
        devServer: {
            host: 'local-ip',
            open: false,
            https: false,
            allowedHosts: 'all',
            hot: false,
            watchFiles: ['app/**'],
            static: {
                watch: true,
                directory: path.join(__dirname, '../app/assets')
            },
            client: {
                logging: 'none',
                overlay: true
            }
        }
    }
);