<script>
  import { setContext as baseSetContext } from 'svelte'
  import { fade } from 'svelte/transition'

  export let key = 'svelteit-modal'
  export let closeButton = true
  export let closeOnEsc = true
  export let closeOnOuterClick = true
  export let styleBg = { top: 0, left: 0 }
  export let styleWindow = {}
  export let styleContent = {}
  export let setContext = baseSetContext
  export let transitionBg = fade
  export let transitionBgProps = { duration: 250 }
  export let transitionWindow = transitionBg
  export let transitionWindowProps = transitionBgProps

  const defaultState = {
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindow,
    styleContent,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps,
  }
  let state = { ...defaultState }

  let Component = null
  let props = null

  let background
  let wrap

  const camelCaseToDash = str =>
    str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()

  const toCssString = props =>
    Object.keys(props).reduce(
      (str, key) => `${str}; ${camelCaseToDash(key)}: ${props[key]}`,
      ''
    )

  $: cssBg = toCssString(state.styleBg)
  $: cssWindow = toCssString(state.styleWindow)
  $: cssContent = toCssString(state.styleContent)
  $: currentTransitionBg = state.transitionBg
  $: currentTransitionWindow = state.transitionWindow

  const open = (NewComponent, newProps = {}, options = {}) => {
    Component = NewComponent
    props = newProps
    state = { ...defaultState, ...options }
  }

  const close = () => {
    Component = null
    props = null
  }

  const handleKeyup = ({ key }) => {
    if (state.closeOnEsc && Component && key === 'Escape') {
      event.preventDefault()
      close()
    }
  }

  const handleOuterClick = event => {
    if (
      state.closeOnOuterClick &&
      (event.target === background || event.target === wrap)
    ) {
      event.preventDefault()
      close()
    }
  }

  setContext(key, { open, close })
</script>

<style lang="scss">
  @import './styles/scss/theme.scss';
  .bg {
    position: fixed;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba($primary, 0.66);
    top: 0;
    left: 0;
  }

  .window-wrap {
    position: relative;
    margin: 2rem;
    max-height: 100%;
  }

  .window {
    position: relative;
    width: 40rem;
    max-width: 100%;
    max-height: 100%;
    margin: 2rem auto;
    color: $dark;
    border-radius: 4px;
    background: $white;
  }

  .content {
    position: relative;
    padding: 1rem;
    max-height: calc(100vh - 4rem);
    overflow: auto;
  }

  .close {
    display: block;
    box-sizing: border-box;
    position: absolute;
    z-index: 1000;
    top: 1rem;
    right: 1rem;
    margin: 0;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: 0;
    color: $dark;
    border-radius: 1.5rem;
    background: $white;
    box-shadow: 0 0 0 1px $dark;
    transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
    -webkit-appearance: none;
  }

  .close:before,
  .close:after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    width: 1rem;
    height: 1px;
    background: $dark;
    transform-origin: center;
    transition: height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .close:before {
    -webkit-transform: translate(0, -50%) rotate(45deg);
    -moz-transform: translate(0, -50%) rotate(45deg);
    transform: translate(0, -50%) rotate(45deg);
    left: 0.25rem;
  }

  .close:after {
    -webkit-transform: translate(0, -50%) rotate(-45deg);
    -moz-transform: translate(0, -50%) rotate(-45deg);
    transform: translate(0, -50%) rotate(-45deg);
    left: 0.25rem;
  }

  .close:hover {
    background: black;
    cursor: pointer;
  }

  .close:hover:before,
  .close:hover:after {
    height: 2px;
    background: $white;
  }

  .close:focus {
    border-color: #3399ff;
    box-shadow: 0 0 0 2px #3399ff;
  }

  .close:active {
    transform: scale(0.9);
  }

  .close:hover,
  .close:focus,
  .close:active {
    outline: none;
  }
</style>

<svelte:window on:keyup={handleKeyup} />

<div class="svelteit-modal">
  {#if Component}
    <div
      class="bg"
      on:click={handleOuterClick}
      bind:this={background}
      transition:currentTransitionBg={state.transitionBgProps}
      style={cssBg}>
      <div class="window-wrap" bind:this={wrap}>
        <div
          class="window"
          transition:currentTransitionWindow={state.transitionWindowProps}
          style={cssWindow}>
          {#if state.closeButton}
            <button on:click={close} class="close" />
          {/if}
          <div class="content" style={cssContent}>
            <svelte:component this={Component} {...props} />
          </div>
        </div>
      </div>
    </div>
  {/if}
  <slot />
</div>
