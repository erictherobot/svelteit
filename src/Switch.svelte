<script>
  import cssVars from 'svelte-css-vars'

  export let checked = false
  export let disabled = false
  export let checkedColor = 'green'
  export let unCheckedColor = 'red'

  $: styleVars = {
    checkedColor,
    unCheckedColor,
  }
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  .svelteit-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .svelteit-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .svelteit-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--unCheckedColor);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .svelteit-slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .svelteit-slider {
    background-color: var(--checkedColor);
  }

  input:checked + .svelteit-slider {
    box-shadow: 0 0 1px var(--checkedColor);
  }

  input:checked + .svelteit-slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
</style>

<label class="svelteit-switch" use:cssVars={styleVars}>
  <input type="checkbox" bind:checked {disabled} />
  <span class="svelteit-slider" />
</label>
