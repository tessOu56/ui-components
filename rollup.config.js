import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import babel from '@rollup/plugin-babel';

export default [
  // JavaScript 打包（ESM 與 CJS）
  {
    input: "src/index.ts",
    output: [
      { file: "dist/index.js", format: "esm", sourcemap: true },
      { file: "dist/index.cjs.js", format: "cjs", sourcemap: true },
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        extensions: [".css"],
        minimize: true,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({ babelHelpers: 'bundled' })
    ],
  },
  // 型別定義打包
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];