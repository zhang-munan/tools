import { createRouter, createWebHashHistory, RouteRecordRaw, Router } from "vue-router";

// 默认路由
export const routeList: RouteRecordRaw[] = [
	{
		path: "/",
		name: "index",
		component: () => import("/@/pages/index.tsx"),
		// children: [
		// 	// {
		// 	// 	path: "/",
		// 	// 	name: "home",
		// 	// 	component: () => import("/@/pages/home/index.vue"),
		// 	// 	meta: {
		// 	// 		title: "首页"
		// 	// 	}
		// 	// },
		// ]
	},
	{
		path: "/demo",
		name: "demo",
		component: () => import("/@/pages/demo.vue"),
	}
];

// 创建路由器
export const router = createRouter({
	// history: true ? createWebHistory('/') : createWebHashHistory(),
	history: createWebHashHistory(), //true ? createWebHistory('/') : createWebHashHistory(),
	routes: routeList
}) as Router;

router.beforeEach((to, _, next) => {
	// 设置页面标题
	document.title = to.meta.title + " | ";

	next();
});
