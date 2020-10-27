<template>
    <div>
        <form-task @new-task='newTask'></form-task>
        Cantidad de tareas: {{cantidadTareas}}
        <list :tareas='listaTareas' @eliminar='deleteTask'></list>
    </div>
</template>


<script>
import List from '@/components/List';
import FormTask from '@/components/FormTask';

export default {
    name: 'Home',
    components: {
        List,
        FormTask
    },
    data() {
        return {
        listaTareas:[],
        cantidadTareas: 0,
        }
    },
    methods:{
        newTask(task){
            if(task == '') return false;
            this.listaTareas.push(task);
        },
        deleteTask(key){
        this.listaTareas.splice(key,1);
        }
    },
    watch: {
        listaTareas(valor){
        this.cantidadTareas = valor.length
        }
    },
}
</script>