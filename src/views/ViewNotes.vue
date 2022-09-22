<template>
  <div class="notes ms-2">
    <div class="form-floating bg-success p-4 mb-5">
      <textarea
        class="form-control"
        placeholder="Add a new note"
        id="floatingTextarea"
      ></textarea>
      <label for="floatingTextarea"></label>
      <div class="d-flex jus flex-row-reverse">
        <button
          type="button"
          class="btn btn-primary text-white bg-light p-2 text-dark bg-opacity-75"
        >
          Add new notes
        </button>
      </div>
    </div>
    <div class="card m-5" v-for="i in 3" :key="i">
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <footer class="d-flex justify-content-evenly">
          <a href="#" class="card-link">Edit</a>
          <a href="#" class="card-link">Deleted</a>
        </footer>
      </div>
    </div>
  </div>
</template>
