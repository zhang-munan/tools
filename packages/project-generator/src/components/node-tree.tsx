import { defineComponent, h, ref, resolveComponent } from "vue";

export default defineComponent({
	name: "node-tree",
	props: {
		tree: {
			type: Object,
			required: true
		}
	},
	setup(props) {
		const parent = ref<HTMLElement | null>(null);
		const posStyle = ref();
		const selectStyle = ref();
		const currentHoverRect = ref({});
		const currentSelectRect = ref({});
		const currentHoverKey = ref("");
		const currentClickKey = ref("");

		// 监听窗体大小变化
		window.addEventListener("resize", () => {
		  selectStyle.value = {}
		})

		const handleMouseEvent = (e) => {
			// 获取元素的唯一标识
			const key = e.target.getAttribute("data-key");
			if (currentHoverKey.value === key) return;
			if (parent.value) {
				currentHoverKey.value = key;

				const parentRect = parent.value.getBoundingClientRect();
				const childRect = (e.target as HTMLElement).getBoundingClientRect();

				const top = childRect.top - parentRect.top;
				const left = childRect.left - parentRect.left;
				const width = childRect.width.toFixed(0);
				const height = childRect.height.toFixed(0);
				posStyle.value = `visibility: visible; top: ${top}px; left: ${left}px; width: ${width}px; height: ${height}px;`;
				console.log("posStyle.value", posStyle.value);
			}
		};

		const wrapperLeave = () => {
			posStyle.value = `visibility: hidden;`;
		}

		const node = (obj) => {
			return h(
				resolveComponent(obj.tag),
				{
					...obj.props,
					class: `${obj.props?.class || ""} cursor-pointer`,
					onClick: () => {
						currentClickKey.value = obj.key;
						selectStyle.value = posStyle.value;
					  if (obj.props?.onClick) {
					    obj.props.onClick?.();
						}
					}
				},
				obj.children
			);
		};

		const renderTree = (tree) => {
			function deep(list) {
				return list.map((e) => {
					let children;
					if (Array.isArray(e.children)) {
						children = deep(e.children);
					} else {
						children = e.children;
					}
					return node({ ...e, children });
				});
			}
			return deep(tree);
		};

		return () => (
			<div ref={parent} class="relative" onMouseleave={wrapperLeave}>
				<div
					data-key="wrapper"
					onMousemove={handleMouseEvent}
					onMouseenter={handleMouseEvent}
					// onClick={onClick}
					// onDoubleClick={this.onDoubleClick}
					// style={{ height: overlayHeight }}
				>
					{renderTree(props.tree)}
				</div>
				{/* hover */}
				<div
					class={`border border-dashed border-gray-600 bg-[rgba(102,102,102,0.05)] absolute cursor-pointer pointer-events-none`}
					style={posStyle.value}></div>
				{/* select */}
				<div
					class={`border-[${selectStyle.value ? 2 : 0}px] border-solid border-blue-600 bg-[rgba(102,102,102,0.05)] absolute cursor-pointer pointer-events-none`}
					style={selectStyle.value}>
						
					</div>
			</div>
		);
	}
});
