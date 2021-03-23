const App = {
  data() {
    return {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum laoreet dui, id mollis orci rhoncus vitae. Sed rutrum ut nulla sit amet facilisis. Cras cursus luctus mi id tincidunt. Proin consequat sem aliquet facilisis ullamcorper. Mauris placerat nulla volutpat, gravida diam non, ultricies est. Quisque sed eros turpis. Donec laoreet arcu commodo fermentum ultrices. Curabitur rutrum bibendum ligula in congue.\n\nVestibulum a facilisis sem, aliquet varius turpis. In tincidunt a nisi in sodales. Sed viverra sit amet sapien quis egestas. Mauris porta diam est, sagittis iaculis sem fringilla mattis. Vestibulum sit amet lectus blandit, porttitor urna ut, pretium tellus. Aliquam faucibus urna non massa auctor egestas. In condimentum dui vel nisl malesuada gravida. Sed vel arcu justo. Curabitur sit amet sapien vulputate, consectetur urna a, dapibus quam. Ut non purus nisl.`,
      words: 'sit nulla dui',
      result: ''
    }
  },
  methods: {
    highlightWords() {
      const words = this.words.split(' ').filter(i => i)
      let text = this.text.replace(/(?:\r\n|\r|\n)/g, '<br>')
      for (const word of words) {
        const random = Math.floor(Math.random() * Math.floor(360))
        const randomColor = `hsl(${random}deg 100% 80%)`
        const rx = new RegExp(`(${word})`, 'ig')
        text = text.replace(rx, '<span style="background-color: ' + randomColor + ';">$1</span>')
      }
      this.result = text
    }
  },
  mounted() {
    this.highlightWords()
  }
}

Vue.createApp(App).mount('#app')
