<template>
    <form @submit.prevent="sendData">
        <div>
            <label>Name</label>
            <input type="text" v-model="name"/>
        </div>
        <div>
            <label>Age</label>
            <input type="number" v-model="age"/>
        </div>
        <button>Update User</button>
    </form>
</template>

<script>
export default {
    emits: ['send-data'],
    data() {
        return {
            name: '',
            age: null
        }
    },
    methods: {
        sendData() {
            this.$emit('send-data', this.name, this.age);
        }
    }
}
</script>
