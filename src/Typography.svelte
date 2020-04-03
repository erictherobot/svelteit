<script>
  export let title = undefined
  export let h1 = undefined
  export let h2 = undefined
  export let h3 = undefined
  export let h4 = undefined
  export let h5 = undefined
  export let h6 = undefined
  export let p = undefined
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';

  h1 {
    font-size: $base-heading-h1-font-size;
    font-weight: 400;
    margin: 10px 0;
    line-height: $base-heading-line-height;
  }
  h2 {
    font-size: $base-heading-h2-font-size;
    font-weight: 400;
    margin: 10px 0;
    line-height: $base-heading-line-height;
  }
  h3 {
    font-size: $base-heading-h3-font-size;
    font-weight: 400;
    margin: 10px 0;
    line-height: $base-heading-line-height;
  }
  h4 {
    font-size: $base-heading-h4-font-size;
    font-weight: 400;
    margin: 10px 0;
    line-height: $base-heading-line-height;
  }
  h5 {
    font-size: $base-heading-h5-font-size;
    font-weight: 400;
    margin: 10px 0;
    line-height: $base-heading-line-height;
  }
  h6 {
    font-size: $base-heading-h6-font-size;
    font-weight: 400;
    margin: 10px 0;
    line-height: $base-heading-line-height;
  }
</style>

{#if h1}
  <h1>{title}</h1>
{:else if h2}
  <h2>{title}</h2>
{:else if h3}
  <h3>{title}</h3>
{:else if h4}
  <h4>{title}</h4>
{:else if h5}
  <h5>{title}</h5>
{:else if h6}
  <h6>{title}</h6>
{:else if p}
  <p>{p}</p>
{/if}
