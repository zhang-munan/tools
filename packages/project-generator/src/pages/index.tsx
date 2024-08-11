export default defineComponent({
	name: "Edit",
	props: {},
	setup() {
		const pageConfig = reactive([
			{
				tag: "div",
				props: {
					class: "px-5 py-10 w-[80%] mx-auto"
				},
				children: [
					{
						tag: "div",
						props: {
							class: "text-2xl font-bold mb-10 text-center"
						},
						children: "产品与服务"
					},
					{
						tag: "div",
						props: {
							class: "flex"
						},
						children: [
							{
								tag: "div",
								props: {
									class: "flex-1 h-[200px] bg-blue-100 flex flex-col items-center py-5"
								},
								children: [
									{
										tag: "div",
										props: {
											class: "w-[60px] h-[60px] bg-blue-200 mb-5"
										}
									},
									{
										tag: "div",
										props: {
											class: "text-xl text-center mb-3"
										},
										children: "一站式业务接入"
									},
									{
										tag: "div",
										props: {
											class: "text-sm text-center"
										},
										children: "支付、结算、核算接入产品效率翻四倍"
									}
								]
							},
							{
								tag: "div",
								props: {
									class: "flex-1 h-[200px] bg-blue-100 flex flex-col items-center py-5"
								},
								children: [
									{
										tag: "div",
										props: {
											class: "w-[60px] h-[60px] bg-blue-200 mb-5"
										}
									},
									{
										tag: "div",
										props: {
											class: "text-xl text-center mb-3"
										},
										children: "一站式业务接入"
									},
									{
										tag: "div",
										props: {
											class: "text-sm text-center"
										},
										children: "支付、结算、核算接入产品效率翻四倍"
									}
								]
							},
							{
								tag: "div",
								props: {
									class: "flex-1 h-[200px] bg-blue-100 flex flex-col items-center py-5"
								},
								children: [
									{
										tag: "div",
										props: {
											class: "w-[60px] h-[60px] bg-blue-200 mb-5"
										}
									},
									{
										tag: "div",
										props: {
											class: "text-xl text-center mb-3"
										},
										children: "一站式业务接入"
									},
									{
										tag: "div",
										props: {
											class: "text-sm text-center"
										},
										children: "支付、结算、核算接入产品效率翻四倍"
									}
								]
							}
						]
					}
				]
			}
		]);

		const renderTop = () => {
			return <div class="fixed top-0 left-0 right-0 h-[50px] bg-[#2C2C2C]"></div>;
		};
		const renderSide = () => {
			return (
				<div class="fixed left-0 top-[50px] bottom-0 w-[260px] shadow-[0_0_20px_-8px_rgba(0,0,0,0.3)]"></div>
			);
		};

		const renderMain = () => {
			return (
				<div class="fixed left-[280px] right-[280px] top-[70px] bottom-5 border border-solid border-gray-100 rounded-lg flex flex-col overflow-hidden">
					<div class="h-7 bg-gray-200 px-3 flex items-center">
						<a-space>
							<div class="w-3 h-3 rounded-full bg-red-500"></div>
							<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
							<div class="w-3 h-3 rounded-full bg-green-500"></div>
						</a-space>
					</div>
					<div class="flex-1 overflow-y-auto">
						<node-tree tree={pageConfig}></node-tree>
					</div>
				</div>
			);
		};

		const renderProps = () => {
			return (
				<div class="fixed right-0 top-[50px] bottom-0 w-[260px] shadow-[0_0_20px_-8px_rgba(0,0,0,0.3)]"></div>
			);
		};

		return () => (
			<div class="relative">
				<div class="">{renderTop()}</div>
				<div class="">{renderSide()}</div>
				<div class="">{renderMain()}</div>
				<div class="">{renderProps()}</div>
			</div>
		);
	}
});
