<script>
  export let primary = false
  export let secondary = false
  export let success = false
  export let danger = false
  export let warning = false
  export let info = false
  export let light = false
  export let dark = false
  export let rounded = false
  export let outlined = false
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  :global(ul.svelteit-list) {
    list-style-type: none;
    padding: 0;
    margin: 0;

    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;

    > :global(li) {
      border: 1px solid $light;
      margin-top: -1px;
      background-color: $white;
      padding: 12px;
      color: $dark;
    }
    &.primary :global(li) {
      background-color: $primary;
      color: set-readable-text-color($primary);
    }
    &.secondary :global(li) {
      background-color: $secondary;
      color: set-readable-text-color($secondary);
    }
    &.success :global(li) {
      background-color: $success;
      color: set-readable-text-color($success);
    }
    &.danger :global(li) {
      background-color: $danger;
      color: set-readable-text-color($danger);
    }
    &.warning :global(li) {
      background-color: $warning;
      color: set-readable-text-color($warning);
    }
    &.info :global(li) {
      background-color: $info;
      color: set-readable-text-color($info);
    }
    &.light :global(li) {
      background-color: $light;
      color: set-readable-text-color($light);
      border: 1px solid $white;
    }
    &.dark :global(li) {
      background-color: $dark;
      color: set-readable-text-color($dark);
    }
  }
</style>

<ul
  {...$$props}
  class="svelteit-list"
  class:primary
  class:secondary
  class:success
  class:danger
  class:warning
  class:info
  class:light
  class:dark
  class:rounded
  class:outlined>
  <slot />
</ul>
