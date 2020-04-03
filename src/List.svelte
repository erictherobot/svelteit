<script>
  export let itemsArray = []
  export let itemsObject = {}
</script>

<style lang="scss">
  @import './styles/scss/lists.scss';
</style>

<ul class="svelteit-list">
  {#if Array.isArray(itemsArray)}
    {#each itemsArray as item}
      <li>{item}</li>
    {/each}
  {/if}

  {#if Object.values(itemsObject)}
    {#each Object.values(itemsObject) as item}
      <li>{item}</li>
    {/each}
  {/if}
</ul>
