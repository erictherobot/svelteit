<script>
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
  @import './styles/scss/theme.scss';

  .svelteit-button-group {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;

    > {
      :global(button:not(:first-child)),
      .svelteit-button-group:not(:first-child) > :global(button) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-left: -1px;
      }

      :global(button:not(:last-child)),
      .svelteit-button-group:not(:last-child) > :global(button) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-right: 0px;
      }
    }
    :global(button:first-child) {
      margin-left: 0;
    }
    :global(button:last-child) {
      margin-right: 0;
    }
    :global(button) {
      border-radius: $base-border-radius;
      &:focus {
        border: 1px solid inherit;
        margin-right: 0;
        // box-shadow: inset 0 0 0 $dark, 0px 10px 20px -10px $dark;
      }
    }
  }
</style>

<div
  class="svelteit-button-group"
  role="group"
  {...$$props}
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
  class:block>
  <slot>
    <em>ButtonGroup is empty</em>
  </slot>
</div>
