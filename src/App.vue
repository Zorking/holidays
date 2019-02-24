<template>
    <div id="app">
        <div class="app-content container">
            <router-view v-if="this.isAppWorking"></router-view>
            <div class="pokemon-theme" v-else>Приложение не работает с 11 до 19</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                bread: this.$router.name,
                isAppWorking: 11 <= new Date().getHours() && new Date().getHours() >= 19,
            }
        },
    }
</script>

<style lang="scss">

    @import '../node_modules/bootstrap/scss/bootstrap';

    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
    #app {
        font-family: "Roboto Condensed";
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

    .pokemon-theme {
        border-radius: 10px;
        background: #F8F8D8;
        border: 6px solid #506860;
        margin-top: 100px;
        padding: 20px;
    }

    .btn, .btn:hover {
        border-color: #506860;
        border-width: 1px;
    }


</style>
