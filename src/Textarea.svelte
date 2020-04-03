<script>
  export let label = undefined
  export let placeholder = undefined
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  .svelteit-textarea {
    textarea {
      padding: $base-box-padding;
      width: 100%;
      margin: 0 auto 1em;
      color: $dark;
      background-color: $white;
      resize: vertical;
      font-size: $base-body-font-size;
    }
  }
</style>

<div class="svelteit-textarea">
  {#if label}
    <label>{label}</label>
    <br />
  {/if}
  <textarea name={'subject'} {placeholder} style="height:150px" />
</div>
