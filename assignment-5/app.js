const app = Vue.createApp({
    data() {
        return {
            taskVal: '',
            tasks: [],
            listVisible: true
        }
    },
    computed: {
        btnCaption() {
            return this.listVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            if(this.taskVal !== '') {
                this.tasks.push(this.taskVal);
                this.taskVal = '';
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        toggleList() {
            this.listVisible = !this.listVisible;
        }
    }
});

app.mount('#assignment');