<script>
  export let label = undefined
  export let type = 'text'
  export let multiple = false
  export let primary = false
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  select {
    padding: 8px 10px;
    width: 100%;
    margin: 0 auto 1em;
    color: $dark;
    background-color: $white;
    font-size: $base-body-font-size;
    font-family: $base-body-font-family;
    resize: vertical;
  }
</style>

<div>
  {#if label}
    <label>{label}</label>
    <br />
  {/if}
  <select {type} {multiple} {...$$props}>
    <slot>
      <em>Missing options</em>
    </slot>
  </select>
</div>
