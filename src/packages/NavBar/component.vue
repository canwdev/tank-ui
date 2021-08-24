<template>
  <div class="tk-navbar">
    <div class="tk-navbar-inner" :class="{fixed: isFixed}">
      <div class="tk-container _with-padding">
        <div class="nav-left">
          <slot name="left"></slot>
        </div>
        <div class="nav-center" :class="{'mobile-open': isMobileMenuOpen}">
          <slot name="center">
            <div
              v-for="root in menu"
              :key="root.id"
              class="link-group"
              @click="closeMobileMenu"
            >
              <TkLink
                class="link-item"
                :href="root.url"
              >
                {{ root.title }}
              </TkLink>

              <div v-if="root.children" class="link-submenu">
                <TkLink
                  v-for="item in root.children"
                  :key="item.id"
                  class="link-item"
                  :href="item.url"
                >
                  {{ item.title }}
                </TkLink>
              </div>
            </div>
          </slot>
        </div>
        <div class="nav-right">
          <slot name="right"></slot>
          <div class="mobile-menu">
            <button class="tk-button-no-style btn-openmenu" :class="{active: isMobileMenuOpen}" @click="toggleMobileMenu"></button>
          </div>
        </div>
      </div>

      <div class="mobile-menu-shade" :class="{open: isMobileMenuOpen}" @click="isMobileMenuOpen = false"></div>
    </div>

    <div class="nav-height-placeholder"></div>
  </div>
</template>

<script>
export default {
  name: 'TkNavBar',
  props: {
    menu: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isFixed: false,
      isMobileMenuOpen: false
    }
  },
  watch: {},
  mounted() {
    this.updateNavBar()
    window.addEventListener('scroll', this.updateNavBar)
    window.addEventListener('scroll', this.closeMobileMenu)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateNavBar)
    window.removeEventListener('scroll', this.closeMobileMenu)
  },
  methods: {
    updateNavBar() {
      const top = document.body.scrollTop || document.documentElement.scrollTop
      this.isFixed = top > 0
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      this.$emit('toggleMobileMenu')
    },
    closeMobileMenu() {
      setTimeout(() => {
        this.isMobileMenuOpen = false
      }, 200)
    }
  }
}
</script>
