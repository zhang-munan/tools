import type { App } from "vue";
import { IconifyIconOffline, IconifyIconOnline, FontIcon } from "./iconify-icon";

export const components: { [key: string]: any } = {
	IconifyIconOffline,
	IconifyIconOnline,
	FontIcon
};

export function useComponent(app: App) {
	for (const i in components) {
		app.component(components[i].name, components[i]);
	}
}

export { IconifyIconOffline, IconifyIconOnline, FontIcon };
