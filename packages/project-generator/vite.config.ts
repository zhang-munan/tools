import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import { proxy } from "./src/presets/config/proxy";
// import svgLoader from "vite-svg-loader";
import DefineOptions from "unplugin-vue-define-options/vite";
import AutoImports from "unplugin-auto-import/vite";
import { AutoGenerateImports } from "vite-auto-import-resolvers";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

function resolve(dir: string) {
	return path.resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig((prop) => {
	return {
		base: prop.mode === "production" ? "./" : "./",
		plugins: [
			vue(),
			vueJsx(),
			AutoImports({
				dts: "./types/auto-imports.d.ts",
				imports: AutoGenerateImports() // 自动管理，只有对应的包有装时才会自动按需设置预设
			}),
			Components({
				directoryAsNamespace: true,
				include: [/\.vue$/, /\.vue\?vue/, /\.[tj]sx$/, /\.md$/],
				extensions: ["md", "vue", "tsx", "jsx"],
				dts: "./types/components.d.ts",
				types: [
					{
						from: "vue-router",
						names: ["RouterLink", "RouterView"]
					}
				],
				// resolvers: [
				// 	AntDesignVueResolver({
				// 		importStyle: false
				// 	})
				// ]
			}),
			DefineOptions()
		],
		resolve: {
			alias: {
				"/@": resolve("src")
				// "/~": resolve("src/presets"),
			}
		},
		server: {
		  port: 8000,
		  // proxy,
		  hmr: {
		    overlay: true,
		  },
		},
		build: {
			minify: "esbuild", //用于指定 JS 代码压缩的工具，默认是 terser
			assetsDir: "static", //用于指定生成静态资源的存放路径
			// terserOptions: {
			//   compress: {
			//     drop_console: true, //去掉console
			//     drop_debugger: true, //去掉debugger
			//   },
			// }, //用于指定 terser 的配置项
			sourcemap: false, //用于指定是否生成 sourcemap
			rollupOptions: {
				output: {
					chunkFileNames: "static/js/[name]-[hash].js", //用于指定非入口 chunk 的文件名格式
					entryFileNames: "static/js/[name]-[hash].js", //用于指定入口 chunk 的文件名格式
					assetFileNames: "static/[ext]/[name]-[hash].[ext]" //用于指定非 JS/CSS 资源的文件名格式
				}
			} //用于指定 Rollup 的配置项
		}
	};
});
