<script>
  import { bin2dec } from "./bin2dec.js";

  let label;
  let bin = "";
  let dec = 0;

  function isValidBin(b) {
    if (!b.match(/^[0-1]+$/)) {
      return false;
    }

    return true;
  }

  function onInputChange() {
    if (label && isValidBin(bin)) {
      label.textContent = "✓";
    } else {
      label.textContent = "✖";
    }
  }

  $: isValidBin(bin) ? (dec = bin2dec(bin)) : (dec = 0);
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  #result {
    font-size: 3.5rem;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  input {
    max-width: 800px;
		min-width: 150px;
    width: 50%;
    direction: rtl;
    unicode-bidi: normal;
  }
</style>

<main>
  <h1>Binary to Decimal Converter</h1>
  <div id="result">{dec}</div>
  <input
    type="text"
		bind:value={bin}
    on:input|preventDefault={onInputChange}
    required />
  <span style="padding-left: 5px" bind:this={label} />
</main>
