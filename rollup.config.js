import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/bundle.js",
      format: "esm",
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      image(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-env"],
      }),
      copy({
        targets: [{ src: "public/WFTlogo.jpg", dest: "dist/public" }],
      }),
    ],
  },
];
