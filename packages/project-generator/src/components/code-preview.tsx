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
		const open = ({ code } = {}) => {
			if (code) {
				highlightCode.value = code;
			}
			visible.value = true;
		};

		expose({ open });

		return () => (
			<a-modal title="Code Preview" width="700px" v-model:open={visible.value} footer={null}>
				<div class="code-preview">
					<highlightjs
						language="html"
						code={`
<template>
  <div class='app-container'>
    <h1>{{ message }}</h1>
    <input v-model='userInput' placeholder='输入点什么...' />
    <p>你输入的内容：{{ userInput }}</p>
    
    <button @click='incrementCounter'>点击我：{{ counter }}</button>

    <ul>
      <li v-for='(item, index) in items' :key='index'>{{ item }}</li>
    </ul>

    <child-component @childEvent='handleChildEvent' />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'App',
  components: { ChildComponent },
  data() {
    return {
      message: 'Hello from Vue!',
      userInput: '',
      counter: 0,
      items: ['苹果', '香蕉', '橙子']
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    handleChildEvent(data) {
      console.log('来自子组件的数据:', data);
    }
  },
  mounted() {
    console.log('组件已挂载');
  }
};
</script>

<style scoped>
.app-container {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
}

input {
  margin-top: 10px;
  padding: 5px;
  width: 80%;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
}

ul {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}

li {
  margin: 5px 0;
}
</style>
`}
					/>

					{/* <highlightjs language="JavaScript" autodetect={false} code={highlightCode.value}></highlightjs> */}
				</div>
			</a-modal>
		);
	}
});
