const app = Vue.createApp({
  data() {
    return {
      name: ''
    };
  },
  methods: {
    handleKeyUp(event) {
      this.name = event.target.value;
    }
  }
});

app.mount("#app");