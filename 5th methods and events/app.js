let app = Vue.createApp({
  data() {
    return {
      count:0
    };
  },
  methods: {
    increase(){
      this.count = this.count + 1;
    },
    deCrease(){
      this.count = this.count - 1;
    },
  }
});

app.mount("#app");
