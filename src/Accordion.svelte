<script>
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let id = 0
  export let openedAccordion = 0

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
  export let control = false
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';

  .svelteit-accordion-header {
    padding: $base-box-padding * 2;
    cursor: pointer;
    border-right: 1px solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;

    &:last-child {
      padding: $base-box-padding * 2;
      cursor: pointer;
      border-bottom: 1px solid transparent;
    }

    // Primary Solid
    &.primary {
      background-color: $primary;
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
    }

    // Secondary Solid
    &.secondary {
      background-color: $secondary;
      color: set-readable-text-color($secondary);

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
    }

    // Success Solid
    &.success {
      background-color: $success;
      color: set-readable-text-color($success);

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
    }

    // Danger Solid
    &.danger {
      background-color: $danger;
      color: set-readable-text-color($danger);

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
    }

    // Warning Solid
    &.warning {
      background-color: $warning;
      color: set-readable-text-color($warning);

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
    }

    // Info Solid
    &.info {
      background-color: $info;
      color: set-readable-text-color($info);

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
    }

    // Light Solid
    &.light {
      background-color: $light;
      color: set-readable-text-color($light);

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
    }

    // Dark Solid
    &.dark {
      background-color: $dark;
      color: set-readable-text-color($dark);

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
    }
  }

  .svelteit-accordion-body {
    display: block;
    padding: $base-box-padding * 2;
    border-right: 1px solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;

    &:last-child {
      padding: $base-box-padding * 2;
      cursor: pointer;
      border-bottom: 1px solid transparent;
      border-top: 1px solid transparent;
    }
  }

  /* .collapsible-header:hover {
    color: $dark;
    background-color: $light;
  }

  .collapsible-header:active {
    background-color: inherit;
    box-shadow: 0 2px $dark;
    transform: translateY(2px;
  } */

  /* OUTLINED */
  .outlined.primary {
    border-color: $primary;
    color: $primary;
    background-color: $white;
  }

  .outlined.primary:hover {
    background-color: $primary;
    color: $light;
  }

  .outlined.secondary {
    border-color: $secondary;
    color: $secondary;
    background-color: $white;
  }

  .outlined.secondary:hover {
    background-color: $secondary;
    color: $light;
  }

  .outlined.success {
    border-color: $success;
    color: $success;
    background-color: $white;
  }

  .outlined.success:hover {
    background-color: $success;
    color: $light;
  }

  .outlined.danger {
    border-color: $danger;
    color: $danger;
    background-color: $white;
  }

  .outlined.danger:hover {
    background-color: $danger;
    color: $light;
  }

  .outlined.warning {
    border-color: $warning;
    color: $warning;
    background-color: $white;
  }

  .outlined.warning:hover {
    background-color: $warning;
    color: $light;
  }

  .outlined.info {
    border-color: $info;
    color: $info;
    background-color: $white;
  }

  .outlined.info:hover {
    background-color: $info;
    color: $light;
  }

  .outlined.light {
    border-color: $light;
    color: $dark;
    background-color: $white;
  }

  .outlined.light:hover {
    background-color: $light;
    color: $dark;
  }

  .outlined.dark {
    border-color: $dark;
    color: $dark;
    background-color: $white;
  }

  .outlined.dark:hover {
    background-color: $dark;
    color: $light;
  }

  // .outlined.disabled {
  //   border-color: $light;
  //   background-color: $light;
  //   color: $dark;
  //   background-color: $white;
  // }

  // .outlined.disabled:hover {
  //   background-color: $light;
  //   color: $dark;
  //   cursor: not-allowed;
  // }

  /* SOLID */
  .primary {
    background-color: $primary;
    color: $white;
  }

  .primary:hover {
    background-color: $primary;
    color: $white;
  }

  .secondary {
    background-color: $secondary;
    color: $white;
  }

  .secondary:hover {
    background-color: $secondary;
    color: $white;
  }

  .success {
    background-color: $success;
    color: $white;
  }

  .success:hover {
    background-color: $success;
    color: $white;
  }

  .danger {
    background-color: $danger;
    color: $white;
  }

  .danger:hover {
    background-color: $danger;
    color: $light;
  }

  .warning {
    background-color: $warning;
    color: $white;
  }

  .warning:hover {
    background-color: $warning;
    color: $light;
  }

  .info {
    background-color: $info;
    color: $white;
  }

  .info:hover {
    background-color: $info;
    color: $light;
  }

  .light {
    background-color: $light;
    color: $dark;
  }

  .light:hover {
    background-color: $light;
    color: $dark;
  }

  .dark {
    background-color: $dark;
    color: $white;
  }

  .dark:hover {
    background-color: $dark;
    color: $light;
  }

  // .disabled {
  //   border-color: $light;
  //   background-color: $light;
  //   color: $dark;
  // }

  // .disabled:hover {
  //   background-color: $light;
  //   color: $dark;
  //   cursor: not-allowed;
  // }

  /* SIZES */
  // .small {
  //   padding: 5px 10px;
  //   cursor: pointer;
  //   color: $dark;
  //   background-color: $white;
  //   font-size: $font-size-small;
  //   margin: 0.1em 0.05em;
  // }

  // .medium {
  //   padding: 8px 13px;
  //   cursor: pointer;
  //   color: $dark;
  //   background-color: $white;
  //   font-size: $font-size-medium;
  //   margin: 0.1em 0.05em;
  // }
  // .large {
  //   padding: 15px 29px;
  //   cursor: pointer;
  //   color: $dark;
  //   background-color: $white;
  //   font-size: $font-size-large;
  //   margin: 0.1em 0.05em;
  // }

  /* ROUNDED */
  .rounded {
    border-radius: $base-border-radius;
  }

  /* BLOCK */
  .block {
    display: inline-block;
    width: 100%;
  }

  /* OUTLINED BODY */
  .outlined.primary.svelteit-accordion-body {
    border-color: $primary;
    color: $dark;
    background-color: $white;
  }
  .outlined.secondary.svelteit-accordion-body {
    border-color: $secondary;
    color: $dark;
    background-color: $white;
  }
  .outlined.success.svelteit-accordion-body {
    border-color: $success;
    color: $dark;
    background-color: $white;
  }
  .outlined.danger.svelteit-accordion-body {
    border-color: $danger;
    color: $dark;
    background-color: $white;
  }
  .outlined.warning.svelteit-accordion-body {
    border-color: $warning;
    color: $dark;
    background-color: $white;
  }
  .outlined.info.svelteit-accordion-body {
    border-color: $info;
    color: $dark;
    background-color: $white;
  }
  .outlined.light.svelteit-accordion-body {
    border-color: $light;
    color: $dark;
    background-color: $white;
  }
  .outlined.dark.svelteit-accordion-body {
    border-color: $dark;
    color: $dark;
    background-color: $white;
  }

  .control {
    float: right;
    font-size: 20px;
  }
</style>

<!-- on:click={()=>setOpenAccordian(id)} -->
<div
  class="svelteit-accordion-header"
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
  on:click={() => dispatch('accordionSelected', id)}>
  {#if control}
    {#if id == openedAccordion}
      <span class="control">-</span>
    {:else}
      <span class="control">+</span>
    {/if}
  {/if}
  <slot name="title" />
</div>

{#if id == openedAccordion}
  <div
    class="svelteit-accordion-body"
    transition:slide|local={{ delay: 0, duration: 350, easing: quintOut }}
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
    <slot />
  </div>
{/if}
