import * as prettier from "prettier";
import prettierPluginVue from "prettier-plugin-vue";
import * as prettierPluginHtml from 'prettier/parser-html';

export const useCreateCode = () => {
	/**
	 * 创建代码
	 * @param { code, language } 代码
	 * @returns { text } 文件内容
	 */
	const createCode = async ({ code, language = "vue" }: { code: any; language?: string }) => {
		// 创建模板
		const createTemplate = (code) => {
			const deep = (code) => {
				const c: string[] = [];
				code.forEach((v) => {
					c.push(
						`<${v.tag} ${Object.entries(v.props)
							.filter(([key]) => key !== "onClick")
							.map(([key, value]) => `${key}="${value}"`)
							.join(" ")}>`
					);
					if (Array.isArray(v.children) && v.children.length) {
						c.push(deep(v.children)); // 递归子元素
					} else if (v.children) {
						c.push(v.children); // 直接添加内容文本
					}
					c.push(`</${v.tag}>`);
				});
				return c.join("\n");
			};

			return `
<template>
  <div>
	${deep(code)}
  </div>
</template>
`;
		};

		// 文件内容
		const text = `
${createTemplate(code)}

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'App',
  components: { ChildComponent },
  data() {
    return {
      message: 'Hello from Vue!',
      userInput: '',
      counter: 0,
      items: ['苹果', '香蕉', '橙子']
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    handleChildEvent(data) {
      console.log('来自子组件的数据:', data);
    }
  },
  mounted() {
    console.log('组件已挂载');
  }
};
</script>

<style scoped>
.app-container {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
}

input {
  margin-top: 10px;
  padding: 5px;
  width: 80%;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
}

ul {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}

li {
  margin: 5px 0;
}
</style>
`;

		// 文本内容
		const content = await prettier.format(text, {
			parser: "vue",
			plugins: [prettierPluginVue, prettierPluginHtml],
			useTabs: true,
			tabWidth: 4,
			endOfLine: "lf",
			semi: true,
			jsxBracketSameLine: true,
			singleQuote: false,
			printWidth: 100,
			trailingComma: "none"
		});

		return content;
	};

	return {
		createCode
	};
};
