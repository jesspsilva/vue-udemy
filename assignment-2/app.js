const app = Vue.createApp({
    data() {
        return {
            userValue: '',
            confirmedValue: ''
        }
    },
    methods: {
        showAlert() {
            alert('Button clicked!')
        },
        setValue(event) {
            this.userValue = event.target.value;
        },
        confirmValue() {
            this.confirmedValue = this.userValue;
        }
    }
});

app.mount('#assignment');