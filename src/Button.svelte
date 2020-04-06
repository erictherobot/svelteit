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
  export let type = 'button'
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';

  .svelteit-button {
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.8em - 1px);
    padding-left: 1.2em;
    padding-right: 1.2em;
    padding-top: calc(0.8em - 1px);
    text-align: center;
    white-space: nowrap;
    border-radius: 0px;
    border: 1px solid $light;
    font-size: unset;

    // Init
    &.init {
      background-color: $init;
      border-color: $light;
      color: set-readable-text-color($dark);
      &:hover {
        background-color: rgba($init, 0.8);
      }
      &:active {
        box-shadow: inset 0 0 0 $light, 0px 10px 20px -10px $light;
        transform: translateY(1px);
        outline: none;
        background-color: rgba($init, 0.8);
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 0 0 $light, 0px 10px 20px -10px $light;
        background-color: rgba($init, 0.8);
      }
      &.outlined {
        background-color: $init;
        border-color: $light;
        color: $dark;
        &:hover {
          background-color: rgba($init, 0.1);
        }
        &:active {
          box-shadow: inset 0 0 0 $light, 0px 10px 20px -10px $light;
          transform: translateY(1px);
          outline: none;
        }
        &:focus {
          outline: none;
          box-shadow: inset 0 0 0 $light, 0px 10px 20px -10px $light;
        }
      }
    }

    // Primary
    &.primary {
      background-color: $primary;
      border-color: $primary;
      color: set-readable-text-color($primary);
      &:hover {
        background-color: rgba($primary, 0.8);
      }
      &:active {
        box-shadow: inset 0 0 0 $primary, 0px 10px 20px -10px $primary;
        transform: translateY(1px);
        outline: none;
        background-color: rgba($primary, 0.8);
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 0 0 $primary, 0px 10px 20px -10px $primary;
        background-color: rgba($primary, 0.8);
      }
      &.outlined {
        background-color: $white;
        border-color: $primary;
        color: $primary;
        &:hover {
          background-color: rgba($primary, 0.1);
        }
        &:active {
          box-shadow: inset 0 0 0 $primary, 0px 10px 20px -10px $primary;
          transform: translateY(1px);
          outline: none;
          background-color: rgba($primary, 0.1);
        }
        &:focus {
          outline: none;
          box-shadow: inset 0 0 0 $primary, 0px 10px 20px -10px $primary;
          background-color: rgba($primary, 0.1);
        }
      }
    }

    // Secondary
    &.secondary {
      background-color: $secondary;
      border-color: $secondary;
      color: $white;
      &:hover {
        background-color: rgba($secondary, 0.8);
      }
      &:active {
        box-shadow: inset 0 0 0 $secondary, 0px 10px 20px -10px $secondary;
        transform: translateY(1px);
        outline: none;
        background-color: rgba($secondary, 0.8);
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 0 0 $secondary, 0px 10px 20px -10px $secondary;
        background-color: rgba($secondary, 0.8);
      }
      &.outlined {
        background-color: $white;
        border-color: $secondary;
        color: $secondary;
        &:hover {
          background-color: rgba($secondary, 0.1);
        }
        &:active {
          box-shadow: inset 0 0 0 $secondary, 0px 10px 20px -10px $secondary;
          transform: translateY(1px);
          outline: none;
          background-color: rgba($secondary, 0.1);
        }
        &:focus {
          outline: none;
          box-shadow: inset 0 0 0 $secondary, 0px 10px 20px -10px $secondary;
          background-color: rgba($secondary, 0.1);
        }
      }
    }

    // Success
    &.success {
      background-color: $success;
      border-color: $success;
      color: $white;
      &:hover {
        background-color: rgba($success, 0.8);
      }
      &:active {
        box-shadow: inset 0 0 0 $success, 0px 10px 20px -10px $success;
        transform: translateY(1px);
        outline: none;
        background-color: rgba($success, 0.8);
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 0 0 $success, 0px 10px 20px -10px $success;
        background-color: rgba($success, 0.8);
      }
      &.outlined {
        background-color: $white;
        border-color: $success;
        color: $success;
        &:hover {
          background-color: rgba($success, 0.1);
        }
        &:active {
          box-shadow: inset 0 0 0 $success, 0px 10px 20px -10px $success;
          transform: translateY(1px);
          outline: none;
          background-color: rgba($success, 0.1);
        }
        &:focus {
          outline: none;
          box-shadow: inset 0 0 0 $success, 0px 10px 20px -10px $success;
          background-color: rgba($success, 0.1);
        }
      }
    }

    // Danger
    &.danger {
      background-color: $danger;
      border-color: $danger;
      color: $white;
      &:hover {
        background-color: rgba($danger, 0.8);
      }
      &:active {
        box-shadow: inset 0 0 0 $danger, 0px 10px 20px -10px $danger;
        transform: translateY(1px);
        outline: none;
        background-color: rgba($danger, 0.8);
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 0 0 $danger, 0px 10px 20px -10px $danger;
        background-color: rgba($danger, 0.8);
      }
      &.outlined {
        background-color: $white;
        border-color: $danger;
        color: $danger;
        &:hover {
          background-color: rgba($danger, 0.1);
        }
        &:active {
          box-shadow: inset 0 0 0 $danger, 0px 10px 20px -10px $danger;
          transform: translateY(1px);
          outline: none;
          background-color: rgba($danger, 0.1);
        }
        &:focus {
          outline: none;
          box-shadow: inset 0 0 0 $danger, 0px 10px 20px -10px $danger;
          background-color: rgba($danger, 0.1);
        }
      }
    }

    // Warning
    &.warning {
      background-color: $warning;
      border-color: $warning;
      color: $white;
      &:hover {
        background-color: rgba($warning, 0.8);
      }
      &:active {
        box-shadow: inset 0 0 0 $warning, 0px 10px 20px -10px $warning;
        transform: translateY(1px);
        outline: none;
        background-color: rgba($warning, 0.8);
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 0 0 $warning, 0px 10px 20px -10px $warning;
        background-color: rgba($warning, 0.8);
      }
      &.outlined {
        background-color: $white;
        border-color: $warning;
        color: $warning;
        &:hover {
          background-color: rgba($warning, 0.1);
        }
        &:active {
          box-shadow: inset 0 0 0 $warning, 0px 10px 20px -10px $warning;
          transform: translateY(1px);
          outline: none;
          background-color: rgba($warning, 0.1);
        }
        &:focus {
          outline: none;
          box-shadow: inset 0 0 0 $warning, 0px 10px 20px -10px $warning;
          background-color: rgba($warning, 0.1);
        }
      }
    }

    // Info
    &.info {
      background-color: $info;
      border-color: $info;
      color: $white;
      &:hover {
        background-color: rgba($info, 0.8);
      }
      &:active {
        box-shadow: inset 0 0 0 $info, 0px 10px 20px -10px $info;
        transform: translateY(1px);
        outline: none;
        background-color: rgba($info, 0.8);
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 0 0 $info, 0px 10px 20px -10px $info;
        background-color: rgba($info, 0.8);
      }
      &.outlined {
        background-color: $white;
        border-color: $info;
        color: $info;
        &:hover {
          background-color: rgba($info, 0.1);
        }
        &:active {
          box-shadow: inset 0 0 0 $info, 0px 10px 20px -10px $info;
          transform: translateY(1px);
          outline: none;
          background-color: rgba($info, 0.1);
        }
        &:focus {
          outline: none;
          box-shadow: inset 0 0 0 $info, 0px 10px 20px -10px $info;
          background-color: rgba($info, 0.1);
        }
      }
    }

    // Light
    &.light {
      background-color: $light;
      border-color: $light;
      color: $dark;
      &:hover {
        background-color: rgba($light, 0.8);
      }
      &:active {
        box-shadow: inset 0 0 0 $light, 0px 10px 20px -10px $light;
        transform: translateY(1px);
        outline: none;
        background-color: rgba($light, 0.8);
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 0 0 $light, 0px 10px 20px -10px $light;
        background-color: rgba($light, 0.8);
      }
      &.outlined {
        background-color: $white;
        border-color: $light;
        color: $dark;
        &:hover {
          background-color: rgba($light, 0.1);
        }
        &:active {
          box-shadow: inset 0 0 0 $light, 0px 10px 20px -10px $light;
          transform: translateY(1px);
          outline: none;
          background-color: rgba($light, 0.1);
        }
        &:focus {
          outline: none;
          box-shadow: inset 0 0 0 $light, 0px 10px 20px -10px $light;
          background-color: rgba($light, 0.1);
        }
      }
    }

    // Dark
    &.dark {
      background-color: $dark;
      border-color: $dark;
      color: $white;
      &:hover {
        background-color: rgba($dark, 0.8);
      }
      &:active {
        box-shadow: inset 0 0 0 $dark, 0px 10px 20px -10px $dark;
        transform: translateY(1px);
        outline: none;
        background-color: rgba($dark, 0.8);
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 0 0 $dark, 0px 10px 20px -10px $dark;
        background-color: rgba($dark, 0.8);
      }
      &.outlined {
        background-color: $white;
        border-color: $dark;
        color: $dark;
        &:hover {
          background-color: rgba($dark, 0.1);
        }
        &:active {
          box-shadow: inset 0 0 0 $dark, 0px 10px 20px -10px $dark;
          transform: translateY(1px);
          outline: none;
          background-color: rgba($dark, 0.1);
        }
        &:focus {
          outline: none;
          box-shadow: inset 0 0 0 $dark, 0px 10px 20px -10px $dark;
          background-color: rgba($dark, 0.1);
        }
      }
    }

    // All
    &.rounded {
      border-radius: $base-border-radius;
    }
    &.block {
      display: inline-block;
      width: 100%;
    }
    &.small {
      padding: 2px 7px;
      font-size: 12px;
    }

    &.medium {
      padding: 5px 10px;
      font-size: 15px;
    }

    &.large {
      padding: 12px 32px;
      line-height: 1.5;
      font-size: 18px;
    }

    &.disabled {
      border-color: $light;
      background-color: $light;
      color: set-readable-text-color($light);
      border: 1px solid transparent;

      &:hover {
        background-color: $light;
        color: set-readable-text-color($light);
        cursor: not-allowed;
        border: 1px solid transparent;
      }
    }
  }
</style>

<button
  {type}
  class="svelteit-button"
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
  class:block
  on:click>
  {#if title}
    {title}
  {:else}
    <slot>
      <em>Button is empty</em>
    </slot>
  {/if}
</button>
