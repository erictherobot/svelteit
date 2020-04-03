<script>
  import { getContext } from 'svelte'
  import { TABS } from './Tabs.svelte'

  const tab = {}
  const { registerTab, selectTab, selectedTab } = getContext(TABS)

  registerTab(tab)
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  button {
    background: none;
    border: none;
    border-bottom: 2px solid $white;
    margin: 0;
    color: lighten($primary, 30);
    padding: $base-box-padding;
    cursor: pointer;
    outline: none;

    &.selected {
      border-bottom: 2px solid $primary;
      color: $primary;
      outline: none;
      font-weight: bold;
    }
  }
</style>

<button class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
  <slot />
</button>
