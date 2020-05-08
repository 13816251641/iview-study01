<template>
    <div>
        <h1>自定义组件Hello-{{msg}}</h1>
    </div>
</template>
<script>
   export default {
       data(){
           return {
               msg:'msg from hello'
           }
       }
   }
</script>