<script>
  import { fade } from 'svelte/transition'

  let visible = true
  export let dismissible = false
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

  const handleClick = () => {
    visible = !visible
  }
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';

  .alert {
    padding: $base-box-padding + 10px;
    background-color: $light;
    color: set-readable-text-color($light);

    .dismissible {
      margin-left: 15px;
      color: $dark;
      font-weight: $base-font-weight-bold;
      font-size: $base-font-size + 4px;
      float: right;
      line-height: $base-line-height - 0.5;
      cursor: pointer;
      transition: $base-transition-speed;

      &:hover {
        color: darken($light, 30);
      }
    }

    // Primary Solid
    &.primary {
      background-color: $primary;
      color: set-readable-text-color($primary);

      &.rounded {
        border-radius: $base-border-radius;
      }

      &.outlined {
        background-color: $white;
        color: $primary;
        border: 1px solid $primary;

        .dismissible {
          margin-left: 15px;
          color: $primary;
          font-weight: $base-font-weight-bold;
          font-size: $base-font-size + 4px;
          float: right;
          line-height: $base-line-height - 0.5;
          cursor: pointer;
          transition: $base-transition-speed;

          &:hover {
            color: lighten($primary, 30);
          }
        }
      }

      .dismissible {
        margin-left: 15px;
        color: $white;
        font-weight: $base-font-weight-bold;
        font-size: $base-font-size + 4px;
        float: right;
        line-height: $base-line-height - 0.5;
        cursor: pointer;
        transition: $base-transition-speed;

        &:hover {
          color: darken($primary, 30);
        }
      }
    }

    // Secondary Solid
    &.secondary {
      background-color: $secondary;
      color: set-readable-text-color($secondary);

      &.rounded {
        border-radius: $base-border-radius;
      }

      &.outlined {
        background-color: $white;
        color: $secondary;
        border: 1px solid $secondary;

        .dismissible {
          margin-left: 15px;
          color: $secondary;
          font-weight: $base-font-weight-bold;
          font-size: $base-font-size + 4px;
          float: right;
          line-height: $base-line-height - 0.5;
          cursor: pointer;
          transition: $base-transition-speed;

          &:hover {
            color: lighten($secondary, 30);
          }
        }
      }

      .dismissible {
        margin-left: 15px;
        color: $white;
        font-weight: $base-font-weight-bold;
        font-size: $base-font-size + 4px;
        float: right;
        line-height: $base-line-height - 0.5;
        cursor: pointer;
        transition: $base-transition-speed;

        &:hover {
          color: darken($secondary, 30);
        }
      }
    }

    // Success Solid
    &.success {
      background-color: $success;
      color: set-readable-text-color($success);

      &.rounded {
        border-radius: $base-border-radius;
      }

      &.outlined {
        background-color: $white;
        color: $success;
        border: 1px solid $success;

        .dismissible {
          margin-left: 15px;
          color: $success;
          font-weight: $base-font-weight-bold;
          font-size: $base-font-size + 4px;
          float: right;
          line-height: $base-line-height - 0.5;
          cursor: pointer;
          transition: $base-transition-speed;

          &:hover {
            color: lighten($success, 30);
          }
        }
      }

      .dismissible {
        margin-left: 15px;
        color: $white;
        font-weight: $base-font-weight-bold;
        font-size: $base-font-size + 4px;
        float: right;
        line-height: $base-line-height - 0.5;
        cursor: pointer;
        transition: $base-transition-speed;

        &:hover {
          color: darken($success, 30);
        }
      }
    }

    // Danger Solid
    &.danger {
      background-color: $danger;
      color: set-readable-text-color($danger);

      &.rounded {
        border-radius: $base-border-radius;
      }

      &.outlined {
        background-color: $white;
        color: $danger;
        border: 1px solid $danger;

        .dismissible {
          margin-left: 15px;
          color: $danger;
          font-weight: $base-font-weight-bold;
          font-size: $base-font-size + 4px;
          float: right;
          line-height: $base-line-height - 0.5;
          cursor: pointer;
          transition: $base-transition-speed;

          &:hover {
            color: lighten($danger, 30);
          }
        }
      }

      .dismissible {
        margin-left: 15px;
        color: $white;
        font-weight: $base-font-weight-bold;
        font-size: $base-font-size + 4px;
        float: right;
        line-height: $base-line-height - 0.5;
        cursor: pointer;
        transition: $base-transition-speed;

        &:hover {
          color: darken($danger, 30);
        }
      }
    }

    // Warning Solid
    &.warning {
      background-color: $warning;
      color: set-readable-text-color($warning);

      &.rounded {
        border-radius: $base-border-radius;
      }

      &.outlined {
        background-color: $white;
        color: $warning;
        border: 1px solid $warning;

        .dismissible {
          margin-left: 15px;
          color: $warning;
          font-weight: $base-font-weight-bold;
          font-size: $base-font-size + 4px;
          float: right;
          line-height: $base-line-height - 0.5;
          cursor: pointer;
          transition: $base-transition-speed;

          &:hover {
            color: lighten($warning, 30);
          }
        }
      }

      .dismissible {
        margin-left: 15px;
        color: $white;
        font-weight: $base-font-weight-bold;
        font-size: $base-font-size + 4px;
        float: right;
        line-height: $base-line-height - 0.5;
        cursor: pointer;
        transition: $base-transition-speed;

        &:hover {
          color: darken($warning, 30);
        }
      }
    }

    // Info Solid
    &.info {
      background-color: $info;
      color: set-readable-text-color($info);

      &.rounded {
        border-radius: $base-border-radius;
      }

      &.outlined {
        background-color: $white;
        color: $info;
        border: 1px solid $info;

        .dismissible {
          margin-left: 15px;
          color: $info;
          font-weight: $base-font-weight-bold;
          font-size: $base-font-size + 4px;
          float: right;
          line-height: $base-line-height - 0.5;
          cursor: pointer;
          transition: $base-transition-speed;

          &:hover {
            color: lighten($info, 30);
          }
        }
      }

      .dismissible {
        margin-left: 15px;
        color: $white;
        font-weight: $base-font-weight-bold;
        font-size: $base-font-size + 4px;
        float: right;
        line-height: $base-line-height - 0.5;
        cursor: pointer;
        transition: $base-transition-speed;

        &:hover {
          color: darken($info, 30);
        }
      }
    }

    // Light Solid
    &.light {
      background-color: $light;
      color: set-readable-text-color($light);

      &.rounded {
        border-radius: $base-border-radius;
      }

      &.outlined {
        background-color: $white;
        color: $dark;
        border: 1px solid $light;

        .dismissible {
          margin-left: 15px;
          color: $dark;
          font-weight: $base-font-weight-bold;
          font-size: $base-font-size + 4px;
          float: right;
          line-height: $base-line-height - 0.5;
          cursor: pointer;
          transition: $base-transition-speed;

          &:hover {
            color: lighten($dark, 30);
          }
        }
      }

      .dismissible {
        margin-left: 15px;
        color: $dark;
        font-weight: $base-font-weight-bold;
        font-size: $base-font-size + 4px;
        float: right;
        line-height: $base-line-height - 0.5;
        cursor: pointer;
        transition: $base-transition-speed;

        &:hover {
          color: lighten($dark, 30);
        }
      }
    }

    // Dark Solid
    &.dark {
      background-color: $dark;
      color: set-readable-text-color($dark);

      &.rounded {
        border-radius: $base-border-radius;
      }

      &.outlined {
        background-color: $white;
        color: $dark;
        border: 1px solid $dark;

        .dismissible {
          margin-left: 15px;
          color: $dark;
          font-weight: $base-font-weight-bold;
          font-size: $base-font-size + 4px;
          float: right;
          line-height: $base-line-height - 0.5;
          cursor: pointer;
          transition: $base-transition-speed;

          &:hover {
            color: lighten($dark, 30);
          }
        }
      }

      .dismissible {
        margin-left: 15px;
        color: $white;
        font-weight: $base-font-weight-bold;
        font-size: $base-font-size + 4px;
        float: right;
        line-height: $base-line-height - 0.5;
        cursor: pointer;
        transition: $base-transition-speed;

        &:hover {
          color: darken($white, 30);
        }
      }
    }
  }
</style>

{#if visible}
  <div
    class="alert"
    transition:fade|local
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
    {#if dismissible}
      <span class:dismissible on:click={handleClick}>&times;</span>
    {/if}
    <slot />
  </div>
{/if}
