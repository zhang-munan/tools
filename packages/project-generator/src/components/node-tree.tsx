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

		const node = (obj) => {
			return h(
				resolveComponent(obj.tag),
				{
					...obj.props,
					class: `${obj.props?.class || ""} cursor-pointer`,
					onMouseenter: (e) => {
						if (parent.value) {
							const parentRect = parent.value.getBoundingClientRect();
							const childRect = (e.target as HTMLElement).getBoundingClientRect();

							const top = childRect.top - parentRect.top;
							const left = childRect.left - parentRect.left;
							const width = childRect.width.toFixed(0);
							const height = childRect.height.toFixed(0);
							posStyle.value = `top: ${top}px; left: ${left}px; width: ${width}px; height: ${height}px;`;
							console.log("posStyle.value", posStyle.value);
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
			<div ref={parent} class="relative">
				{renderTree(props.tree)}
				<div
					class={`border border-dashed border-gray-600 bg-[rgba(102,102,102,0.05)] absolute cursor-pointer`}
					style={posStyle.value}></div>
			</div>
		);
	}
});
