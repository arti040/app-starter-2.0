
module.exports = {
    frameworks: {
        bootstrap: true,
        gridBootstrapOnly: false,
        sources: {
            bootstrap: 'bootstrap-loader',
            grid: 'bootstrap-sass-grid'
        }
    },
    settings: {
        prod: {
            minHTML: true,
            minJS: true
        },
        assetsDir: 'assets'
    }
}