<template>
    <div class="search">
        <input class="header__browse_search_input" type="text" placeholder="Search for Item..." v-model="searchLine" @keydown.enter="search">
        <a href="javascript:void(0)" class="header__browse_search_button" @click="search"><i class="fas fa-search"></i></a>
    </div>
</template>

<script>
    import { EventBus } from '../event-bus.js';
    export default {
        name: "Search",
        data(){
            return {
                searchLine: ''
            }
        },
        methods:{
            search(){
                if(this.$route.path === "/ProductList")
                    EventBus.$emit('ProductSearch');
                else
                    this.$router.push('/ProductList');

            }
        }
    }
</script>
<style scoped>
    .search{
        display: flex;
        justify-content: space-between;
    }
</style>


