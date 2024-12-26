import { defineComponent } from "vue";

export default defineComponent({
	name: "props-edit",
	setup(_, { expose }) {
		const activeKey = ref("1");
		const editProps = ref({});

		/**
		 * 分组
		 * @returns
		 */
		const renderGroup = ({ title }: { title: string }) => {
			return (
				<>
					<div class="px-4 py-3">
						<div class="py-2 flex items-center justify-between text-gray-500">
							<div class="text-sm font-bold">{title}</div>
							<a-space>
								<iconify-icon-online
									class=" text-lg"
									icon={false ? "fluent:minimize-16-filled" : "fluent:add-16-filled"}
								/>
							</a-space>
						</div>
						<div class="flex flex-wrap text-xs gap-2 pb-1">
							<div class="flex items-center bg-gray-100 rounded h-[32px] w-full"></div>
						</div>
					</div>
					<a-divider class="my-0" />
				</>
			);
		};

		/**
		 * 顶部标签页
		 */
		const renderTabs = () => {
			return (
				<div class="px-4 props-edit-tabs">
					<a-tabs v-model:activeKey={activeKey.value}>
						<a-tab-pane key="1" tab="样式"></a-tab-pane>
						<a-tab-pane key="2" tab="事件"></a-tab-pane>
					</a-tabs>
				</div>
			);
		};

		/**
		 * 设置属性
		 * @param props
		 */
		const set = (props) => {
			editProps.value = props;
		};

		expose({
			set
		});

		return () => (
			<>
				<div>{renderTabs()}</div>
				<a-divider class="my-0" />
				<div class="px-4 py-3 flex justify-between items-center">
					{[
						"fluent:align-left-28-filled",
						"fluent:align-center-vertical-28-filled",
						"fluent:align-right-28-filled",
						"fluent:align-top-28-filled",
						"fluent:align-center-horizontal-28-filled",
						"fluent:align-bottom-28-filled"
					].map((v) => {
						return <iconify-icon-online class="text-gray-300" icon={v}></iconify-icon-online>;
					})}
				</div>
				<a-divider class="my-0" />
				<div class="p-4">
					<div class="flex flex-wrap text-xs gap-2">
						<div class="flex items-center bg-gray-100 rounded h-[32px] w-[100px]">
							<div class="text-gray-500 w-8 text-center">W</div>
							<div class="flex items-center flex-1">
								<input class="bg-transparent outline-none w-full" placeholder="请输入" />
							</div>
						</div>
						<div class="flex items-center bg-gray-100 rounded h-[32px] w-[100px]">
							<div class="text-gray-500 w-8 text-center">H</div>
							<div class="flex items-center flex-1">
								<input class="bg-transparent outline-none w-full" placeholder="请输入" />
							</div>
						</div>
						<div class="flex items-center bg-gray-100 rounded h-[32px] w-[100px]">
							<div class="text-gray-500 w-8 text-center"></div>
							<div class="flex items-center flex-1">
								<input class="bg-transparent outline-none w-full" placeholder="请输入" />
							</div>
						</div>
					</div>
				</div>
				<a-divider class="my-0" />
				{renderGroup({
					title: "填充"
				})}
				{renderGroup({
					title: "文字"
				})}
			</>
		);
	}
});
