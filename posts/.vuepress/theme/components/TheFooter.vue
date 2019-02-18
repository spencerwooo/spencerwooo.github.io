<template>
  <footer class="footer">
    <p class="sns-links">
      <a
        v-for="(item, name) in sns"
        :key="name"
        class="sns-link"
        :href="item.link"
        target="_blank"
      >
        <IconSns
          :name="name"
          :account="item.account"
        />
      </a>
    </p>

    <p>
      Copyright © {{ thisYear }} {{ $site.themeConfig.footer.author }}
      <br>
      <i
        class="fa fa-rocket"
        aria-hidden="true"
      /> Powered by
      <a
        href="https://vuepress.vuejs.org/"
        rel="noopener"
        target="_blank"
      >VuePress</a> and
      <i
        class="fa fa-heartbeat"
        aria-hidden="true"
      /> love<br>
      <i
        class="fa fa-camera"
        aria-hidden="true"
      /> Theme heavily inspired by
      <a
        href="https://github.com/meteorlxy/vuepress-theme-meteorlxy"
        target="_blank"
      >meteorlxy</a>
      <br>
      <span v-html="$site.themeConfig.footer.icp" />
    </p>
  </footer>
</template>

<script>
import IconSns from './IconSns.vue'

export default {
  name: 'TheFooter',

  components: {
    IconSns
  },

  data () {
    return {
      thisYear: new Date().getFullYear()
    }
  },

  computed: {
    sns () {
      return this.$site.themeConfig.personalInfo.sns || {}
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables';

.footer {
  color: $grayTextColor;
  padding-bottom: 1.5rem;
  text-align: center;
  border-top: 1px solid $borderColor;
  line-height: 2;
}

a:hover {
  border-bottom: 2px solid $accentColor;
  transition: all 0.3s;
}
</style>
