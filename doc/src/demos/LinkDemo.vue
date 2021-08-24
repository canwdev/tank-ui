<template>
  <div class="link-demo">
    <h2>TkLink</h2>

    <fieldset class="tk-fieldset">
      <legend>Demo</legend>

      <div class="tk-form">
        <div class="tk-form-row">
          <div>
            自动使用 router-link
          </div>
          <div>
            <TkLink href="/docs/Button">to /docs/Button</TkLink>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            不使用 router-link
          </div>
          <div>
            <TkLink no-router href="/docs/Button">to /docs/Button</TkLink>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            外部链接
          </div>
          <div class="tk-block-gap-sm">
            <TkLink href="https://cn.bing.com/">Bing</TkLink>
            <TkLink underline href="https://cn.bing.com/">Bing</TkLink>
            <TkLink href="https://cn.bing.com/" target="_blank">Bing (target="_blank")</TkLink>
          </div>
        </div>
      </div>

    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>Size</legend>
      <div class="tk-block-gap-sm">
        <TkLink size="xs" href="#">Link (size="xs")</TkLink>
        <TkLink size="sm" href="#">Link (size="sm")</TkLink>
        <TkLink size="lg" href="#">Link (size="lg")</TkLink>
        <TkLink size="xl" href="#">Link (size="xl")</TkLink>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>Theme</legend>
      <div class="tk-block-gap-sm">
        <TkLink theme="inherit" href="#">Link (theme="inherit")</TkLink>
        <TkLink theme="white" href="#">Link (theme="white")</TkLink>
        <TkLink theme="black" href="#">Link (theme="black")</TkLink>
        <TkLink theme="success" href="#">Link (theme="success")</TkLink>
        <TkLink theme="error" href="#">Link (theme="error")</TkLink>
        <TkLink theme="info" href="#">Link (theme="info")</TkLink>
        <TkLink theme="warning" href="#">Link (theme="warning")</TkLink>
      </div>
    </fieldset>

  </div>
</template>

<script>
export default {
name: 'LinkDemo'
}
</script>


