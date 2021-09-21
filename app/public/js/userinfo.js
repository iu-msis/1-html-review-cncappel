const Offer = {
    data() {
      return {
        "person": {},
        "offers": [
                {
                    "id": 1,
                    "name": "Janet Doe",
                    "salary": 120000,
                    "bonus": 9000,
                    "company":"EY",
                    "offerDate": "2021-09-08"
                },
                {
                    "id": 2,
                    "name": "Jordan Doe",
                    "salary": 80000,
                    "bonus": 2000,
                    "company":"IU",
                    "offerDate": "2021-08-09"
                }
            ]
        }
    },
    computed: {
        prettyBirthday() {
        // change date format
            return dayjs(this.person.dob.date).format('DD MMM YYYY')
        }
        // userProfile() {
        //     return url(this.person.picture.large)
        //     }
    },

    methods: {
        fetchUserData() {
        fetch ('https://randomuser.me/api/')
        .then (response => response.json())
        .then((responseJson) => {
            console.log ('wow you did it');
            this.person = responseJson.results[0];
        })
        .catch((err) => {
            console.error(err);
        })
    }
    },
    created() {
        this.fetchUserData()
    } //end created
} // end Offer config
  
Vue.createApp(Offer).mount('#offerApp');