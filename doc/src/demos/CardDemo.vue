<template>
  <div>
    <h2>TkCard</h2>
    <div class="tk-block-gap-md">

      <TkCard solid class="inline-block">Inline Card</TkCard>
      <TkCard solid shadow>shadow</TkCard>
      <TkCard padding="xs">padding="xs"</TkCard>
      <TkCard padding="sm">padding="sm"</TkCard>
      <TkCard padding="lg">padding="lg"</TkCard>
      <TkCard padding="xl">padding="xl"</TkCard>
      <TkCard neon>Neon</TkCard>
      <TkCard neon="secondary">Neon (neon="secondary")</TkCard>
      <TkCard neon="accent">Neon (neon="accent")</TkCard>
      <TkCard neon="error">Neon (neon="error")</TkCard>
      <TkCard neon="info">Neon (neon="info")</TkCard>
      <TkCard neon="warning">Neon (neon="warning")</TkCard>
      <TkCard neon="success">Neon (neon="success")</TkCard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDemo'
}
</script>

