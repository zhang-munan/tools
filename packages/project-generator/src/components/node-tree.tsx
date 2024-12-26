import { defineComponent, h, ref, resolveComponent } from "vue";

export default defineComponent({
	name: "node-tree",
	props: {
		tree: {
			type: Object,
			required: true
		}
	},
	emits: ["change"],
	setup(props, { emit }) {
		const parent = ref<HTMLElement | null>(null);
		const posStyle = ref();
		const selectStyle = ref();
		const currentHoverRect = ref({});
		const currentSelectRect = ref({});
		const currentHoverKey = ref("");
		const currentClickKey = ref("");

		// 监听窗体大小变化
		window.addEventListener("resize", () => {
			selectStyle.value = {};
		});

		// 鼠标移动
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
			}
		};

		// 鼠标移出节点
		const wrapperLeave = () => {
			posStyle.value = `visibility: hidden;`;
		};

		// 判断是否为原生标签
		const isNativeTag = (tag) => {
			const nativeTags = [
				"div",
				"span",
				"a",
				"button",
				"input",
				"p",
				"ul",
				"li",
				"img",
				"form",
				"table",
				"thead",
				"tbody",
				"tr",
				"td",
				"th"
			]; // 可根据需要扩展
			return nativeTags.includes(tag);
		};

		// 渲染节点
		const node = (obj) => {
			return h(
				isNativeTag(obj.tag) ? obj.tag : resolveComponent(obj.tag),
				{
					...obj.props,
					class: `${obj.props?.class || ""} cursor-pointer`,
					onClick: (e) => {
						currentClickKey.value = obj.props["data-key"];
						emit("change", { props: obj.props, event: e });
						selectStyle.value = posStyle.value;
						if (obj.props?.onClick) {
							obj.props.onClick?.();
						}
					}
				},
				obj.children
			);
		};

		// 渲染树
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
					class={`${selectStyle.value ? "border-2" : ""} border-solid border-blue-600 bg-[rgba(102,102,102,0.05)] absolute cursor-pointer pointer-events-none`}
					style={selectStyle.value}></div>
			</div>
		);
	}
});
