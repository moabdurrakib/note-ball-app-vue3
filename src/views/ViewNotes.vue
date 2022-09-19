<template>
  <div class="notes ms-2">
    <div class="form-floating m-2">
      <textarea
        class="form-control"
        placeholder="Add a new note"
        id="floatingTextarea"
      ></textarea>
      <label for="floatingTextarea"></label>
      <button type="button" class="btn btn-primary m-2">Primary</button>
      <button type="button" class="btn btn-primary m-2">Primary</button>
    </div>
    <div class="card" v-for="i in 3" :key="i">
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>
