//@ts-check

"use strict";

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { readFileSync } = require("fs");
const path = require("path");
const { ContextReplacementPlugin } = require("webpack");

/**@type {import('webpack').Configuration}*/
const config = {
    target: "node",
    mode: "none",
    node: {
        __dirname: true,
        __filename: true
    },

    entry: "./src/extension.ts",
    context: __dirname,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "extension.js",
        libraryTarget: "commonjs2"
    },
    devtool: "nosources-source-map",
    externals: {
        vscode: "commonjs vscode",
        iohook: "iohook"
    },
    resolve: {
        extensions: [".ts", ".js", ".node"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        includeDependency("iohook", {
            ignore: ["**/node_modules/**"]
        }),

        new ContextReplacementPlugin(/iohook/)
    ]
};

function includeDependency(pkg, globOptions) {
    const pkgJson = path.join(pkg, "package.json");
    const pkgJsonPath = require.resolve(pkgJson);
    const pkgPath = path.join(pkgJsonPath, "../");

    const content = readFileSync(pkgJsonPath, {
        encoding: "utf8"
    });
    const pkgName = pkg; // JSON.parse(content).name;

    return new CopyPlugin({
        patterns: [
            {
                from: pkgPath,
                to: path.resolve(__dirname, `./dist/node_modules/${pkgName}`),
                globOptions
            }
        ]
    });
}

module.exports = config;
