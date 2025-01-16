let app = Vue.createApp({
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleKeyUp(e){
      console.log(e);
    }

  }
  
});

app.mount("#app");
