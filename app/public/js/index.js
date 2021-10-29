const SomeApp = {
    data() {
      return {
        books: [],
        bookForm: {},
        selectedBook: null
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
        },
        postNewBook(evt) {
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.bookForm = {};
              });
          },
          handleEditBooks(book) {
            this.selectedBook = book;
            this.bookForm = Object.assign({}, this.selectedBook);
          },
          handleResetEdit() {
            this.selectedBook = null;
            this.bookForm = {};
          },
          postBooks(evt) {
            console.log ("Test:", this.selectedBook);
          if (this.selectedBook) {
              this.postEditBooks(evt);
          } else {
              this.postNewBook(evt);
          }
        },
        postEditBook(evt) {
          this.bookForm.id = this.selectedBook.id;
          
          console.log("Editing!", this.offerForm);
  
          fetch('api/book/update.php', {
              method:'POST',
              body: JSON.stringify(this.bookForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.offers = json;
              
              // reset the form
              this.handleResetEdit();
            });
        },
        postDeleteBook(o) {  
          if ( !confirm("Are you sure you want to delete the book from " + o.title + "?") ) {
              return;
          }  

          console.log("Delete!", o);
  
          fetch('api/books/delete.php', {
              method:'POST',
              body: JSON.stringify(o),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.books = json;
              
              // reset the form
              this.handleResetEdit();
            });
        },
        selectBook(o) {
          this.selectedBook = o;
          this.bookForm = Object.assign({}, this.selectedBook);
        },
    },
    created() {
        this.fetchBookData();
    }
  }
  
  Vue.createApp(SomeApp).mount('#booksApp');