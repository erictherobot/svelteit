<script>
  export let title = undefined
  export let primary = false
  export let secondary = false
  export let success = false
  export let danger = false
  export let warning = false
  export let info = false
  export let light = false
  export let dark = false
  export let disabled = false
  export let outline = false
  export let small = false
  export let medium = false
  export let large = false
  export let outlined = false
  export let rounded = false
  export let block = false
</script>

<style lang="scss">
  @import './styles/scss/button.scss';
</style>

<button
  type="button"
  class="svelteit-button"
  {disabled}
  class:primary
  class:secondary
  class:success
  class:danger
  class:warning
  class:info
  class:light
  class:dark
  class:outline
  class:small
  class:medium
  class:large
  class:disabled
  class:outlined
  class:rounded
  class:block
  on:click>
  <slot>{title}</slot>
</button>
