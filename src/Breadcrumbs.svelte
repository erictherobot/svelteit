<script>
  export let active
  export let list

  // export let primary = false
  // export let secondary = false
  // export let success = false
  // export let danger = false
  // export let warning = false
  // export let info = false
  // export let light = false
  // export let dark = false
  // export let disabled = false
  // export let outline = false
  // export let small = false
  // export let medium = false
  // export let large = false
  // export let outlined = false
  // export let rounded = false
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';

  nav ul {
    padding: 10px 16px;
    list-style: none;
    background-color: $light;
  }

  nav ul li {
    display: inline;
  }

  nav ul li + li:before {
    padding: 8px;
    color: $dark;
    content: '/\00a0';
  }

  nav ul li a {
    color: inherit;
    text-decoration: none;
  }

  nav ul li a:hover {
    color: inherit;
    text-decoration: underline;
  }
</style>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    {#each list as item}
      <li class:active>
        <a href={item.href}>{item.title}</a>
      </li>
    {/each}
  </ul>
</nav>
