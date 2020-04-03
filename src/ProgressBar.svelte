<script>
  export let progress = 0
  export let label = null
  export let primary = true
  export let secondary = false
  export let success = false
  export let danger = false
  export let warning = false
  export let info = false
  export let light = false
  export let dark = false
  export let small = false
  export let medium = false
  export let large = false
  export let bordered = false
</script>

<style lang="scss">
  @import './styles/scss/progressbars.scss';
</style>

<div class="progress-container">
  <div
    class="svelteit-container svelteit-center"
    class:primary
    class:secondary
    class:success
    class:danger
    class:warning
    class:info
    class:light
    class:dark
    class:small
    class:medium
    class:large
    class:bordered
    style={`width:${progress}%`}>
    {#if label}{label}{/if}
  </div>
</div>
