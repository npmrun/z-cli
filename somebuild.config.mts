import { defineRootConfig } from "somebuild";
import RawPlugin from 'esbuild-plugin-raw';
import { TsconfigPathsPlugin } from '@esbuild-plugins/tsconfig-paths'

export default defineRootConfig({
    mode: "lib",
    lib: {
        outDir: "./dist",
        name: "z",
        entry: "src/index.tsx",
        config: {
            sourcemap: false,
            bin: true,
            esbuildPlugins: [
                TsconfigPathsPlugin({}),
                RawPlugin(),
            ],
        }
    },
})