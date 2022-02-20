<template>
    <div>
       <h1>CONVERSOR DE MONEDAS</h1>
       <convertMoneda/>
        
    </div>
</template>

<script>

import convertMoneda from '@/components/convertMoneda.vue'

export default {
    name: 'moned',
    components: {
        convertMoneda
    }
    
}
</script>
