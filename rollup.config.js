import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
// import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/bundle.js",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-env"],
      }),
      copy({
        targets: [{ src: "public/WFTlogo.svg", dest: "dist" }],
      }),
      postcss({
        // Configure the PostCSS plugin
        extract: true, // Extract CSS to separate file
        minimize: true, // Minimize CSS output
        modules: true, // Enable CSS modules
        // Add any other PostCSS options here
      }),
    ],
  },
];
