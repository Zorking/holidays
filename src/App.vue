<template>
    <div id="app">
        <app-nav></app-nav>
        <div class="app-content container" >
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import AppNav from './AppNav.vue'

    export default {
        name: 'app',
        components: {AppNav},
        data() {
            return {
                bread: this.$router.name,
            }
        }
    }
</script>

<style lang="scss">

    @import '../node_modules/bootstrap/scss/bootstrap';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    html {
        height: 100%;
        box-sizing: border-box;
    }

    body {
        padding-top: 0;
        position: relative;
        margin: 0;
    }
</style>
