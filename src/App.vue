<template>
  <div id="app">
      <div class="wrapper">
          <header>
              <div class="center-holder">
                  <nav>
                      <ul>
                          <li><router-link :to="{name: 'about'}">About</router-link></li>
                          <li><router-link :to="{name: '404'}">404</router-link></li>
                          <li></li>
                      </ul>
                  </nav>
              </div>

          </header>
          <router-view>
              <h2>jhgf</h2>
          </router-view>
      </div>
      <footer class="footer">
          <div class="center-holder">
              <p>footer</p>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
    @import 'scss/vendors/_include-media.scss';
    @import 'scss/vendors/_normalize.scss';

    /*@import 'scss/base/_icomoon.scss';*/
    @import 'scss/base/_variables.scss';
    @import 'scss/base/_functions.scss';
    @import 'scss/base/_mixins.scss';
    @import 'scss/base/_reset.scss';
    @import 'scss/base/_forms.scss';
    @import 'scss/base/_typography.scss';


    @import 'scss/custom/header.scss';
    @import 'scss/custom/general.scss';
    @import 'scss/custom/footer.scss';


</style>
