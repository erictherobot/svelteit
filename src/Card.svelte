<script>
  import Button from './Button.svelte'
  export let title = undefined
  export let description = undefined
  export let image = undefined
  export let buttonRoute = undefined
  // export let linkRoute = undefined
  export let buttonTitle = undefined
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
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';

  .svelteit-card {
    transition: $base-transition-speed;
    border-radius: $base-border-radius;
    cursor: pointer;
    color: $dark;
    background-color: $white;
    margin-bottom: $base-box-padding;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba($dark, 0.2);
    }

    .svelteit-card-container {
      padding: 2px 16px;

      h3 {
        margin: 15px auto 5px auto;
        font-size: $base-font-size-h3;
      }

      button {
        margin-bottom: 20px;
      }
    }
  }
</style>

<div
  class="svelteit-card"
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
  {#if image}
    <img src={image} alt={title} style="width:100%" />
  {/if}
  <div class="svelteit-card-container">
    {#if title}
      <h3>{title}</h3>
    {/if}
    {#if description}
      <p>{description}</p>
    {/if}
    {#if buttonRoute}
      <p>
        <Button
          {disabled}
          title={buttonTitle}
          {primary}
          {secondary}
          {success}
          {warning}
          {info}
          {danger}
          {light}
          {dark}
          {outlined}
          {rounded}
          {small}
          {medium}
          {large}
          {block}
          on:click={buttonRoute} />
      </p>
    {/if}
  </div>
</div>
