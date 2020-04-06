<script>
  import Button from './Button.svelte'
  export let img = undefined
  export let title = undefined
  export let description = undefined
  export let buttonTitle = undefined
  export let height = undefined
  export let width = undefined
  export let buttonRoute = undefined
  export let linkRoute = undefined
  export let hero = false
  export let thumbnail = false
  export let avatar = false
  export let primary = false
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
  export let rounded = false
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';

  .hero-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .hero-text {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $white;

      & h1 {
        line-height: $base-line-height;
      }

      @media (max-width: 768px) {
        & h1 {
          font-size: 25px;
        }
      }
    }
  }

  img.img-thumbnail {
    // border: 1px solid $dark;
    padding: 5px;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .img-circle {
    min-width: 25px;
    min-height: 25px;
    display: inline-block;
    border-radius: 100%;
    overflow: hidden;
    vertical-align: middle;
  }
</style>

{#if hero}
  <div
    class="hero-image"
    style={`height: ${height}px;background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${img});`}>
    <div class="hero-text">
      <h1>{title}</h1>
      {#if description}
        <p>{description}</p>
      {/if}
      {#if buttonRoute}
        <Button
          title={buttonTitle}
          {primary}
          {secondary}
          {success}
          {warning}
          {info}
          {danger}
          {light}
          {dark}
          {rounded}
          {small}
          {medium}
          {large}
          on:click={buttonRoute} />
      {/if}
    </div>
  </div>
{:else if avatar}
  <img src={img} alt={title} class="img-circle" {width} {height} />
{:else if thumbnail}
  {#if linkRoute}
    <a href={linkRoute}>
      <img
        src={img}
        alt={title}
        class="img-thumbnail img-fluid"
        {width}
        {height} />
    </a>
  {:else}
    <img
      src={img}
      alt={title}
      class="img-thumbnail img-fluid"
      {width}
      {height} />
  {/if}
{/if}
