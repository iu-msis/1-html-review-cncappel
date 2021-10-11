const SomeApp = {
    data() {
      return {
        books: []
      }
    },
    computed: {},
    methods: {
        fetchBookData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
                console.log('hello you');
            })
            .catch( (err) => {
                console.error(err);
                console.log('hello you');
            })
        }
    },
    created() {
        this.fetchBookData();
    }
  }
  
  Vue.createApp(SomeApp).mount('#booksApp');