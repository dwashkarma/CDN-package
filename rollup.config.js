import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";

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
    ],
  },
];
