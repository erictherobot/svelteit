<script>
  export let title = undefined
  export let body = undefined
  export let top = undefined
  export let right = undefined
  export let bottom = undefined
  export let left = undefined
  export let primary = false
  export let secondary = false
  export let success = false
  export let danger = false
  export let warning = false
  export let info = false
  export let light = false
  export let dark = false
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  .svelteit-tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
    cursor: pointer;
  }

  .svelteit-tooltip .tooltiptext {
    visibility: hidden;
    width: 140px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;

    &.primary {
      background-color: $primary;
      color: set-readable-text-color($primary);
    }

    &.secondary {
      background-color: $secondary;
      color: set-readable-text-color($secondary);
    }

    &.success {
      background-color: $success;
      color: set-readable-text-color($success);
    }

    &.danger {
      background-color: $danger;
      color: set-readable-text-color($danger);
    }

    &.warning {
      background-color: $warning;
      color: set-readable-text-color($warning);
    }

    &.info {
      background-color: $info;
      color: set-readable-text-color($info);
    }

    &.light {
      background-color: $light;
      color: set-readable-text-color($light);
    }

    &.dark {
      background-color: $dark;
      color: set-readable-text-color($dark);
    }

    /* Position the tooltip */
    &.top {
      width: 120px;
      bottom: 100%;
      left: 50%;
      margin-left: -60px;
    }
    &.right {
      top: -5px;
      left: 105%;
    }
    &.bottom {
      width: 120px;
      top: 100%;
      left: 50%;
      margin-left: -60px;
    }
    &.left {
      top: -5px;
      right: 105%;
    }
  }

  .svelteit-tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>

<div class="svelteit-tooltip">
  {title}
  <span
    class="tooltiptext"
    class:top
    class:right
    class:bottom
    class:left
    class:primary
    class:secondary
    class:success
    class:danger
    class:warning
    class:info
    class:light
    class:dark>
    {body}
  </span>
</div>
