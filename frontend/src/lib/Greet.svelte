<script lang="ts">
  import { Greet, GetVersion } from "$wails/App";

  let resultText: string = "Please enter your name";
  let name: string;

  const test = GetVersion();

  async function greet() {
    resultText = await Greet(name);
  }
</script>

<div>
  <div class="row">
    <input id="greet-input" placeholder="Enter a name..." bind:value={name} />
    <button class="btn" on:click={greet}> Greet </button>
  </div>
  <p>{resultText}</p>

  {#await test then version}
    <p>Version: {version}</p>
  {/await}
</div>
