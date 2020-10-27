<template>
    <div>
        <input type="text" v-model='inputTarea'>
        <button @click='agregarTarea'>Agregar Tarea</button>
    </div>
</template>


<script>
export default {
    name:'FormTask',
    data() {
        return {
            inputTarea: '',
        }
    },
    methods:{
        agregarTarea(){
            this.$emit('new-task',this.inputTarea);
            this.inputTarea = '';
        }
    },

}
</script>