const app = Vue.createApp({
    data(){
        return {
            name: 'Jéssica',
            imageUrl: 'https://vuejs.org/images/logo.png'
        }
    },
    methods: {
        getAge() {
            // Not getting the actual age because of the months difference
            const actualYear = new Date().getFullYear();
            const birthYear = 1995;
            const age = actualYear - birthYear;
            return age;
        },
        getAgePlus5() {
            const actualAge = this.getAge();
            return actualAge + 5;
        },
        getRandomNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

app.mount('#assignment');