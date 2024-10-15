export const useCreateCode = () => {
	/**
	 * 创建代码
	 * @param { code, language } 代码
	 * @returns { text } 文件内容
	 */
	const createCode = ({ code, language = "vue" }: { code: any; language?: string }) => {
		// 创建模板
		const createTemplate = (code) => {
			return `
<template>
  <div>
  </div>
</template>
`;
		};

		// 文件内容
		const text = `
      ${createTemplate(code)}
    `;

		return text;
	};

	return {
		createCode
	};
};
