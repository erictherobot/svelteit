<script>
  import { getContext } from 'svelte'
  import { TABS } from './Tabs.svelte'

  const panel = {}
  const { registerPanel, selectedPanel } = getContext(TABS)

  registerPanel(panel)
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  .tabs-panel {
    padding: $base-box-padding;
  }
</style>

{#if $selectedPanel === panel}
  <div class="tabs-panel">
    <slot />
  </div>
{/if}
