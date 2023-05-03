const plugins = ["@babel/plugin-transform-runtime", "react-refresh/babel"]

module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-typescript"
    ],
    plugins: plugins
}