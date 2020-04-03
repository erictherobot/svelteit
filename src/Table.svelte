<script>
  export let bordered = false
  export let rounded = false
  export let borderless = false
  export let hoverable = false
  export let striped = false
  export let primary = false
  export let secondary = false
  export let success = false
  export let danger = false
  export let warning = false
  export let info = false
  export let light = false
  export let dark = false
  export let responsive = false
  export let nowrap = false
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  .svelteit-table {
    table {
      border-radius: $base-border-radius;
      border-collapse: collapse;
      width: 100%;
      color: $dark;
      background-color: $white;
      font-size: $base-font-size;
      margin: 0.1em auto;
      border-spacing: 0;
    }
    :global(td, th) {
      padding: $base-box-padding;
      text-align: left;
      border: 1px solid $light;
    }

    :global(.striped tr:nth-child(even)) {
      background-color: $light;
    }
    :global(.hoverable tr:hover :not(th)) {
      background-color: $light;
      color: $dark;
    }
    :global(.borderless thead > tr > th) {
      border: 0;
    }
    :global(.borderless tbody > tr > td) {
      border: 0;
    }
    :global(.bordered td, th) {
      border: 1px solid $light;
    }

    :global(.rounded) {
      border: 1px solid $light;
      border-radius: $base-border-radius;
    }

    :global(.primary th) {
      background: $primary;
      color: set-readable-text-color($primary);
    }
    :global(.secondary th) {
      background: $secondary;
      color: set-readable-text-color($secondary);
    }
    :global(.success th) {
      background: $success;
      color: set-readable-text-color($success);
    }
    :global(.warning th) {
      background: $warning;
      color: set-readable-text-color($warning);
    }
    :global(.info th) {
      background: $info;
      color: set-readable-text-color($info);
    }
    :global(.light th) {
      background: $light;
      color: set-readable-text-color($light);
    }
    :global(.dark th) {
      background: $dark;
      color: set-readable-text-color($dark);
    }
  }
  .responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .nowrap {
    white-space: nowrap;
  }
</style>

<div class="svelteit-table" class:responsive class:nowrap>
  <table
    class:primary
    class:secondary
    class:success
    class:danger
    class:warning
    class:info
    class:light
    class:dark
    class:bordered
    class:borderless
    class:striped
    class:rounded
    class:hoverable>
    <slot />
  </table>
</div>
