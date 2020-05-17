const {
    addWebpackAlias,
    addLessLoader,
    fixBabelImports,
    override,
    addDecoratorsLegacy
} = require('customize-cra')
const path = require('path')

module.exports = override(
    addDecoratorsLegacy(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@@': path.resolve(__dirname, 'src/components')
    })
)