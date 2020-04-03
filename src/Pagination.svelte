<script>
  export let current_page = undefined
  export let last_page = undefined
  export const per_page = undefined
  export const from = undefined
  export const to = undefined
  export const total = undefined
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt)
  }
  function changePage(page) {
    if (page !== current_page) {
      dispatch('change', page)
    }
  }
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    ul {
      display: flex;
      padding-left: 0;
      list-style: none;

      li a {
        position: relative;
        display: block;
        padding: 0.5rem 0.75rem;
        margin-left: -1px;
        line-height: 1.25;
        background-color: $white;
        border: 1px solid $light;
        text-decoration: none;

        &:hover {
          color: $primary;
          background-color: $light;
          border-color: $light;
          text-decoration: none;
        }
      }
      li.active a {
        color: $white;
        background-color: $primary;
        border-color: $primary;
        text-decoration: none;
      }
      li a:hover:not(li.active) {
        color: $primary;
        background-color: $light;
        border-color: $light;
        text-decoration: none;
      }
      li.disabled a {
        color: lighten($dark, 30);
        pointer-events: none;
        cursor: auto;
        border-color: $light;
      }
    }
  }
</style>

<!-- <div class="text-center">
  <p>
    Page {current_page} / {last_page}
    <br />
    Results {from + 1} - {to}
    <br />
    Total
    <strong>{total}</strong>
    users
  </p>
</div> -->

<nav class="pagination">
  <ul>
    <li class={current_page === 1 ? 'disabled' : ''}>
      <a
        href="javascript:void(0)"
        on:click={() => changePage(current_page - 1)}>
        <span aria-hidden="true">«</span>
      </a>
    </li>
    {#each range(last_page, 1) as page}
      <li class={page === current_page ? 'active' : ''}>
        <a href="javascript:void(0)" on:click={() => changePage(page)}>
          {page}
        </a>
      </li>
    {/each}
    <li class={current_page === last_page ? 'disabled' : ''}>
      <a
        href="javascript:void(0)"
        on:click={() => changePage(current_page + 1)}>
        <span aria-hidden="true">»</span>
      </a>
    </li>
  </ul>
</nav>
