<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" @click="open = !open">
                    <router-link class="nav-link" to="/">Правила</router-link>
                </li>
                <li class="nav-item" @click="open = !open">
                    <router-link class="nav-link" to="/form">Форма</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
    data() {
      return {
        open: false
      }
    },
  }
</script>
