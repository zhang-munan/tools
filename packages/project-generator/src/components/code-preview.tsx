import { defineComponent } from "vue";

export default defineComponent({
	name: "code-preview",
	props: {
		code: {
			type: String
		}
	},
	setup(props, { expose }) {
		const highlightCode = ref(props.code);
		const visible = ref(false);

		/**
		 * 打开预览
		 */
		const open = ({ code }: { code: string } = { code: "" }) => {
			if (code) {
				highlightCode.value = code;
			}
			visible.value = true;
		};

		expose({ open });

		return () => (
			<a-modal title="Code Preview" width="700px" v-model:open={visible.value} footer={null}>
				<div class="code-preview">
					<highlightjs language="html" code={highlightCode.value} />
				</div>
			</a-modal>
		);
	}
});
