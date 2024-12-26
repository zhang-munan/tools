import { h, defineComponent } from "vue";
import { Icon as IconifyIcon, addIcon } from "@iconify/vue/dist/offline";

// 没有导入本地的图标插件
// import TableLine from "@iconify-icons/ri/table-line";

// addIcon("ri-table-line", TableLine);

// Iconify Icon在Vue里本地使用（用于内网环境）https://docs.iconify.design/icon-components/vue/offline.html
export default defineComponent({
	name: "iconify-icon-offline",
	components: { IconifyIcon },
	props: {
		icon: {
			type: String,
			default: ""
		}
	},
	render() {
		const attrs = this.$attrs;
		return h(
			IconifyIcon,
			{
				icon: `${this.icon}`,
				style: attrs?.style ? Object.assign(attrs.style, { outline: "none" }) : { outline: "none" },
				...attrs
			},
			{
				default: () => []
			}
		);
	}
});
