<template>
  <TkLink href="/" class="nav-logo">
    <img src="../../src/assets/images/logo.png">
    <p>TankUI</p>
  </TkLink>
</template>

<script>
  export default {
    name: 'NavLogo'
  }
</script>

<style lang="stylus" scoped>
  $nav_height = 50px

  .nav-logo
    display flex
    align-items center
    text-decoration: none !important;
    color $color_black

    &:hover
      opacity 0.9

    &:active
      opacity: 1;

    & > img
      width $nav_height
      height $nav_height
      border-radius 50%
      transition all .25s
      transition-timing-function $transition_fx2
      @media screen and (max-width $mq_mobile)
        width ($nav_height - 12px)
        height ($nav_height - 12px)

    & > p
      font-size 18px
      font-weight: bold
      margin-left: 10px
      transition font-size .25s
      @media screen and (max-width $mq_mobile)
        font-size 18px

</style>
