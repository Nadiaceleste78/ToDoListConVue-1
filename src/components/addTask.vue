<template>
    <div>
        <input type="text" v-model='inputTarea'>
        <button @click='addTask'>Agregar Tarea</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputTarea: '',
        }
    },
    methods: {
        addTask(){
            this.$emit('add-task',this.inputTarea);
            this.inputTarea = '';
        }
    },
}
</script>