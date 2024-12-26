import { message } from "ant-design-vue";
import { useCreateCode } from "/@/hooks/useCreateCode";

export default defineComponent({
	name: "Edit",
	props: {},
	setup() {
		const { createCode } = useCreateCode();
		const pageConfig = reactive([
			{
				tag: "div",
				props: {
					"data-key": "page"
				},
				children: [
					{
						tag: "div",
						props: {
							class: "px-5 py-10 w-[80%] mx-auto",
							"data-key": "1"
						},
						children: [
							{
								tag: "div",
								props: {
									class: "text-2xl font-bold mb-10 text-center w-full",
									"data-key": "2"
								},
								children: "产品与服务"
							},
							{
								tag: "div",
								props: {
									class: "flex",
									"data-key": "3"
								},
								children: [
									{
										tag: "div",
										props: {
											class: "flex-1 h-[200px] bg-blue-100 flex flex-col items-center py-5",
											"data-key": "4"
										},
										children: [
											{
												tag: "div",
												props: {
													class: "w-[60px] h-[60px] bg-blue-200 mb-5 hover:bg-red-300",
													"data-key": "5",
													onClick: () => {
														message.info("点击了第一个");
													}
												}
											},
											{
												tag: "div",
												props: {
													class: "text-xl text-center mb-3",
													"data-key": "6"
												},
												children: "一站式业务接入"
											},
											{
												tag: "div",
												props: {
													class: "text-sm text-center",
													"data-key": "7"
												},
												children: "支付、结算、核算接入产品效率翻四倍"
											}
										]
									},
									{
										tag: "div",
										props: {
											"data-key": "15",
											class: "flex-1 h-[200px] bg-blue-100 flex flex-col items-center py-5"
										},
										children: [
											{
												tag: "div",
												props: {
													class: "w-[60px] h-[60px] bg-blue-200 mb-5",
													"data-key": "8",
													onClick: () => {
														message.info("点击了第二个");
													}
												}
											},
											{
												tag: "div",
												props: {
													class: "text-xl text-center mb-3",
													"data-key": "9"
												},
												children: "一站式事中风险监控"
											},
											{
												tag: "div",
												props: {
													class: "text-sm text-center",
													"data-key": "10"
												},
												children: "在所有需求配置环节事前风险控制和质量控制能力"
											}
										]
									},
									{
										tag: "div",
										props: {
											"data-key": "14",
											class: "flex-1 h-[200px] bg-blue-100 flex flex-col items-center py-5"
										},
										children: [
											{
												tag: "div",
												props: {
													class: "w-[60px] h-[60px] bg-blue-200 mb-5",
													"data-key": "11",
													onClick: () => {
														message.info("点击了第三个");
													}
												}
											},
											{
												tag: "div",
												props: {
													class: "text-xl text-center mb-3",
													"data-key": "12"
												},
												children: "一站式数据运营"
											},
											{
												tag: "div",
												props: {
													class: "text-sm text-center",
													"data-key": "13"
												},
												children: "沉淀产品接入效率和运营小二工作效率数据"
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]);

		const el = ref<HTMLElement | null>(null);
		const codePreviewInstance = ref<{ open: ({ code }: { code: string }) => void } | null>(null);
		const propsEditInstance = ref<{ set: (props: Record<string, any>) => void } | null>(null);
		const currentSelectProps = ref<Record<string, any>>({});

		const { style } = useDraggable(el, {
			initialValue: { x: 40, y: 40 }
		});

		// 代码查看
		const onCodePreview = async () => {
			const code = await createCode({
				code: pageConfig,
				language: "vue"
			});
			codePreviewInstance.value?.open({
				code
			});
		};

		/**
		 * 点击节点
		 * @param props
		 */
		const handleTreePropsChange = ({ props }) => {
			// currentSelectProps.value = props;
			propsEditInstance.value?.set(props);
		};

		onMounted(() => {
			if (el.value === null) {
				console.error("DOM element not initialized");
			} else {
				console.log("DOM element initialized:", el.value);
			}
		});

		/**
		 * 顶部渲染
		 * @returns JSX Element
		 */
		const renderTop = () => {
			return (
				<div class="fixed top-0 left-0 right-0 h-[50px] bg-[#2C2C2C]">
					<a-button type="primary" onClick={onCodePreview}>
						导出
					</a-button>
				</div>
			);
		};

		// const renderSide = () => {
		// 	return (
		// 		<div class="fixed left-0 top-[50px] bottom-0 w-[260px] shadow-[0_0_20px_-8px_rgba(0,0,0,0.3)]"></div>
		// 	);
		// };

		/**
		 * 主体渲染
		 * @returns JSX Element
		 */
		const renderMain = () => {
			return (
				<div class="fixed left-0 right-[300px] top-[50px] bottom-0 border border-solid border-gray-100 flex flex-col overflow-hidden">
					{/* <div class="h-7 bg-gray-200 px-3 flex items-center">
						<a-space>
							<div class="w-3 h-3 rounded-full bg-red-500"></div>
							<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
							<div class="w-3 h-3 rounded-full bg-green-500"></div>
						</a-space>
					</div> */}
					<div class="flex-1 overflow-y-auto">
						<node-tree tree={pageConfig} onChange={handleTreePropsChange}></node-tree>
					</div>
				</div>
			);
		};

		const renderProps = () => {
			return (
				<div class="fixed right-0 top-[50px] bottom-0 w-[300px] shadow-[0_0_20px_-8px_rgba(0,0,0,0.3)]">
					<props-edit ref={propsEditInstance}></props-edit>
				</div>
			);
		};

		const activeKey = ref(["1"]);
		const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;

		const classDraggable = ref("cursor-all-scroll");

		return () => (
			<div class="relative">
				<div class="">{renderTop()}</div>
				{/* <div class="">{renderSide()}</div> */}
				<div class="">{renderMain()}</div>
				<div class="">{renderProps()}</div>
				<div
					ref={el}
					class={`fixed h-[700px] w-[360px] bg-white rounded-lg shadow-lg ${classDraggable}`}
					style={unref(style)}>
					{/* 顶部 */}
					<div class="h-[60px] bg-[#5A75D5] rounded-t-lg"></div>
					{/* Tab */}
					<div class=""></div>
					{/* 内容 */}
					<a-collapse
						v-model:activeKey={activeKey.value}
						bordered={false}
						style="background: rgb(255, 255, 255)">
						{{
							default: () => {
								return (
									<>
										<a-collapse-panel key="1" header="常用">
											<div class="grid grid-cols-4 gap-3 text-gray-600">
												<div class="flex flex-col items-center">
													<div class="w-8 h-8 bg-red-500"></div>
													<div class="text-xs mt-2">文本</div>
												</div>
												<div class="flex flex-col items-center">
													<div class="w-8 h-8 bg-red-500"></div>
													<div class="text-xs mt-2">文本</div>
												</div>
												<div class="flex flex-col items-center">
													<div class="w-8 h-8 bg-red-500"></div>
													<div class="text-xs mt-2">文本</div>
												</div>
												<div class="flex flex-col items-center">
													<div class="w-8 h-8 bg-red-500"></div>
													<div class="text-xs mt-2">文本</div>
												</div>
											</div>
										</a-collapse-panel>
										<a-collapse-panel key="2" header="基础">
											<p>{text}</p>
										</a-collapse-panel>
										<a-collapse-panel key="3" header="组合">
											<p>{text}</p>
										</a-collapse-panel>
									</>
								);
							}
							// expandIcon: ({ isActive }) => <caret-right-outlined rotate={isActive ? 90 : 0} />
						}}
					</a-collapse>
				</div>
				<code-preview ref={codePreviewInstance} />
			</div>
		);
	}
});
