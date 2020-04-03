<script>
  import { slide, fly } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'

  export let visible = false
  export let search = false
  export let brand = undefined
  export let segment = undefined
  export let active = false
  export let bgColor = undefined
  export let textColor = undefined
  export let responsive = undefined
  export let items = []

  const toggleVisible = () => {
    visible = !visible
  }
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';

  .svelteit-topnav {
    background-color: $light;
    overflow: hidden;
  }

  .svelteit-topnav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .svelteit-topnav a {
    float: left;
    display: block;
    color: $dark;
    text-align: center;
    padding: $base-box-padding;
    text-decoration: none;
    font-size: $base-body-font-size;
  }

  .svelteit-topnav a:hover {
    background-color: lighten($primary, 10);
    color: $white;
  }

  .svelteit-topnav a.active {
    background-color: $primary;
    color: $white;
  }

  .svelteit-topnav li.icon {
    display: none;
  }

  .svelteit-topnav input[type='text'] {
    float: right;
    padding: 5px;
    border: none;
    width: 20%;
    margin-top: 8px;
    margin-right: 16px;
    font-size: $base-body-font-size;
  }

  .svelteit-brand {
    float: left;
    margin: 0;
    padding: 0;
    height: 100%;
    vertical-align: middle;
  }
  .svelteit-brand img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    vertical-align: middle;
    height: 100%;
    width: 100%;
  }
  .svelteit-brand a:hover {
    background: $light;
  }
  // .topnav .selected {
  //   background-color: $primary;
  //   color: $white;
  // }

  @media screen and (max-width: 600px) {
    .svelteit-topnav a:not(:first-child) {
      display: none;
    }
    .responsive-items {
      display: none;
    }
    .svelteit-topnav li.icon {
      float: right;
      display: block;
    }
  }

  @media screen and (max-width: 600px) {
    .svelteit-topnav.responsive {
      position: relative;
    }
    .svelteit-topnav.responsive li.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .svelteit-topnav.responsive a {
      display: block;
      text-align: left;
    }

    .svelteit-topnav .svelteit-brand {
      float: left;
      display: block;
    }

    .svelteit-topnav a,
    .svelteit-topnav input[type='text'] {
      display: block;
      text-align: left;
      width: 100%;
      margin: 0;
      padding: $base-box-padding;
    }
    .svelteit-topnav input[type='text'] {
      border: 1px solid $light;
    }
  }
</style>

<nav
  class={`svelteit-topnav ${visible ? 'responsive' : ''}`}
  style={`background:${bgColor};`}
  class:active>
  <ul>
    {#if brand}
      <div class="svelteit-brand">
        <a href="javascript:void(0);">
          <img src={brand} alt="" />
        </a>
      </div>
    {/if}

    {#each items as item}
      <li class={` ${visible ? '' : 'responsive-items'}`}>
        <a
          href={item.link}
          class:active={segment === item.segment}
          style={`color:${textColor};`}>
          {item.title}
        </a>
      </li>
    {/each}

    {#if search}
      <li class={` ${visible ? '' : 'responsive-items'}`}>
        <input type="text" placeholder="Search.." />
      </li>
    {/if}

    {#if responsive}
      <li class="icon">
        <a href="javascript:void(0);" on:click={toggleVisible}>&#9776;</a>
      </li>
    {/if}
  </ul>
</nav>
