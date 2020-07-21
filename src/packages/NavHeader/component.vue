<!--TODO 需要重构-->
<template>
  <div class="tk-nav-header">
    <div class="global-nav" :class="{fixed: isFixed}">
      <div class="w-container" :class="{open: openMenu}">
        <a href="/" class="logo-wrap">
          <img src="../../assets/images/logo.png">
          <p>TankUI</p>
        </a>

        <div ref="linksWrap" class="links-wrap" :class="{open: openMenu}">

          <div
            v-for="root in menuList"
            :key="root.id"
            class="link-group"
          >
            <a
              class="link-item"
              :href="root.url"
            >
              {{ root.title }}
            </a>

            <div v-if="root.children" class="link-submenu">
              <a
                v-for="item in root.children"
                :key="item.id"
                class="link-item"
                :href="item.url"
              >
                {{ item.title }}
              </a>
            </div>
          </div>

        </div>

        <div class="header-right">搜索</div>

        <div class="mobile-menu-shade" :class="{open: openMenu}" @click="openMenu = false"></div>

        <div class="mobile-menu">
          <button class="btn-openmenu" :class="{active: openMenu}" @click="toggleOpenMenu"></button>
        </div>
      </div>
    </div>
    <div class="nav-height-placeholder"></div>
  </div>
</template>

<script>
  export default {
    name: 'TkNavHeader',
    props: {
      menuList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data: () => ({
      isFixed: false,
      openMenu: false
    }),
    watch: {
      openMenu(nv, ov) { // 辅助CSS完整展开收缩动画
        if (nv) {
          // TODO: 当屏幕高度不够时处理
          this.$refs.linksWrap.style.height = this.linksWrapHeight + 10 + 'px'
        } else {
          this.$refs.linksWrap.style.height = 0
        }
      }
    },
    mounted() {
      // 点击链接滚动到顶部
      let links = this.$refs.linksWrap.children
      links = Array.prototype.slice.call(links)
      // 用于css height transition动画
      this.linksWrapHeight = 0

      links.forEach((v) => {
        this.linksWrapHeight += v.clientHeight
        v.addEventListener('click', () => {
          // this.closeMenu()
          window.scrollTo(0, 0)
        })
      })

      this.updateNavBar()
      window.addEventListener('scroll', this.updateNavBar)
      window.addEventListener('scroll', this.closeMenu)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.updateNavBar)
      window.removeEventListener('scroll', this.closeMenu)
    },
    methods: {
      updateNavBar() {
        const top = document.body.scrollTop || document.documentElement.scrollTop
        this.isFixed = top > 0
      },
      toggleOpenMenu() {
        this.openMenu = !this.openMenu
        this.$emit('toggleOpenMenu')
      },
      closeMenu() {
        this.openMenu = false
      }
    }
  }
</script>
