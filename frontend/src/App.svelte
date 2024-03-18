<script lang="ts">
  import logo from './assets/images/logo-universal.png'
  import {Greet, ProcessFile, ListFiles } from '../wailsjs/go/main/App.js'

  let resultText: string = "Please enter your name below 👇"
  let name: string;
  let content: string = ``;
  let showContent: string = ``;
  let fileTree: string[] = ["one", "two"];
  let testString: any = '';

  ListFiles('/Users/billyarnold/Documents/projects/Tailor')
    .then(files => fileTree = files);

  function greet(): void {
    Greet(name).then(result => resultText = result)
  }

  function processContent(): void {
    ProcessFile(content).then(result => showContent = result);
  }
</script>

<main>
  <div class="file-tree">
    {#each fileTree as file}
      <div class="file-tree-item">{file}</div>
    {/each}
  </div>
  <div class="main-container">
    <p>{showContent} content</p>
    <button class="btn" on:click={processContent}>Save</button>
    <textarea class="content-area" bind:value={content} />
  </div>
    <!--<input autocomplete="off" bind:value={name} class="input" id="name" type="text"/>-->
</main>

<style>

  #logo {
    display: block;
    width: 50%;
    height: 50%;
    margin: auto;
    padding: 10% 0 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-origin: content-box;
  }

  main {
    display: flex;
  }

  .file-tree {
    height: 100%;
    display: flex;
    width: 10%;
    flex-direction: column;
  }

  .file-tree-item {
    margin-bottom: 12px;
  }

  .main-container {
    width: 100%;
  }

  .content-area {
    display: flex;
    height: 100vh;
    width: 100%;
    color: white;
    background-color: rgb(25, 25, 25); 
    border: none;
    font-size: 16px;
  }

  .result {
    height: 20px;
    line-height: 20px;
    margin: 1.5rem auto;
  }

  .input-box .btn {
    width: 60px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    border: none;
    margin: 0 0 0 20px;
    padding: 0 8px;
    cursor: pointer;
  }

  .input-box .btn:hover {
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    color: #333333;
  }

  .input-box .input {
    border: none;
    border-radius: 3px;
    outline: none;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background-color: rgba(240, 240, 240, 1);
    -webkit-font-smoothing: antialiased;
  }

  .input-box .input:hover {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }

  .input-box .input:focus {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }

</style>
