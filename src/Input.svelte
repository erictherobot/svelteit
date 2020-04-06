<script>
  export let label = undefined
  export let placeholder = null
  export let type = 'text'
  export let value = undefined
  export let group = undefined
  export let min = undefined
  export let max = undefined
  export let id = undefined
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  input {
    padding: 8px 10px;
    width: 100%;
    color: $dark;
    background-color: $white;
    resize: vertical;
    margin: auto auto 10px auto;
    font-size: $base-body-font-size;
  }
  label > input {
    cursor: pointer;
  }

  // input[type='file'] {
  //   padding: 8px 10px;
  //   width: 100%;
  //   color: $dark;
  //   background-color: $white;
  //   resize: vertical;
  //   margin: auto auto 10px auto;
  // }
</style>

{#if type === 'number'}
  {#if label}
    <label>{label}</label>
  {/if}
  <input type="number" {placeholder} bind:value {min} {max} />
{:else if type === 'text'}
  {#if label}
    <label>{label}</label>
  {/if}
  <input type="text" {placeholder} bind:value />
{:else if type === 'file'}
  {#if label}
    <label>{label}</label>
  {/if}
  <input type="file" bind:value />
{:else if type === 'radio'}
  <input type="radio" bind:group {value} {id} />
{:else if type === 'checkbox'}
  <input type="checkbox" bind:group {value} />
{/if}
