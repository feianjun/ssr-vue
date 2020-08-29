<template>
    <div>
        {{aaaa}}
        <router-view/>
    </div>
</template>

<script>
export default {

    data(){
        return {
            aaaa: 333,
        }
    },

    methods: {
        alert(){
            this.aaaa = Math.random()
        }
    },
}
</script>