<script>
  export let label = undefined
  export let badge = undefined

  export let primary = false
  export let secondary = false
  export let success = false
  export let danger = false
  export let warning = false
  export let info = false
  export let light = false
  export let dark = false
  export let outlined = false
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  .svelteit-badge {
    display: inline;
    padding: 0.2em 0.6em 0.3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25em;
    background-color: $dark;
    color: $white;

    &.primary {
      background-color: $primary;
      color: set-readable-text-color($primary);
      &.outlined {
        border: 1px solid $primary;
        color: $primary;
        background-color: $white;
      }
    }

    &.secondary {
      background-color: $secondary;
      color: set-readable-text-color($secondary);
      &.outlined {
        border: 1px solid $secondary;
        color: $secondary;
        background-color: $white;
      }
    }

    &.success {
      background-color: $success;
      color: set-readable-text-color($success);
      &.outlined {
        border: 1px solid $success;
        color: $success;
        background-color: $white;
      }
    }

    &.danger {
      background-color: $danger;
      color: set-readable-text-color($danger);
      &.outlined {
        border: 1px solid $danger;
        color: $danger;
        background-color: $white;
      }
    }

    &.warning {
      background-color: $warning;
      color: set-readable-text-color($warning);
      &.outlined {
        border: 1px solid $warning;
        color: $warning;
        background-color: $white;
      }
    }

    &.info {
      background-color: $info;
      color: set-readable-text-color($info);
      &.outlined {
        border: 1px solid $info;
        color: $info;
        background-color: $white;
      }
    }

    &.light {
      background-color: $light;
      color: set-readable-text-color($light);
      &.outlined {
        border: 1px solid $light;
        color: set-readable-text-color($light);
        background-color: $white;
      }
    }

    &.dark {
      background-color: $dark;
      color: set-readable-text-color($dark);
      &.outlined {
        border: 1px solid $dark;
        color: $dark;
        background-color: $white;
      }
    }
    &.badge {
      display: inline-block;
      min-width: 30px;
      padding: 3px 7px;
      font-size: 12px;
      font-weight: 700;
      line-height: 2;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      border-radius: 60px;
      min-height: 20px;
    }
  }
</style>

<span
  class="svelteit-badge"
  class:outlined
  class:primary
  class:secondary
  class:success
  class:danger
  class:warning
  class:info
  class:light
  class:dark
  class:badge>
  {#if label}{label}{:else if badge}{badge}{/if}
</span>
