const app = Vue.createApp({
    data() {
        return {
            userValue: '',
            paragraphVisible: true,
            bgColor: ''
        }
    },
    computed: {
        paragraphClasses() {
            return {
                user1: this.userValue === 'user1',
                user2: this.userValue === 'user2',
                visible: this.paragraphVisible,
                hidden: !this.paragraphVisible
            }
        }
    },
    methods: {
        toggleParagraphVisibility() {
            this.paragraphVisible = !this.paragraphVisible;
        }
    }
});

app.mount('#assignment');