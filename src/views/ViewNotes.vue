<template>
  <div class="notes ms-2">
    <div class="form-floating bg-success p-4 mb-5">
      <textarea
        v-model="newNote"
        class="form-control"
        placeholder="Add a new note"
        id="floatingTextarea"
        ref="newNoteRef"
      ></textarea>
      <label for="floatingTextarea"></label>
      <div class="d-flex jus flex-row-reverse">
        <button
          type="button"
          class="btn btn-primary text-white bg-light p-2 text-dark bg-opacity-75"
          @click="addNote"
        >
          Add new notes
        </button>
      </div>
    </div>
    <div class="card m-5" v-for="note in notes" :key="note.id">
      <div class="card-body">
        <p class="card-text">
          {{ note.content }}
        </p>
        <footer class="d-flex justify-content-evenly">
          <a href="#" class="card-link">Edit</a>
          <a href="#" class="card-link">Deleted</a>
        </footer>
      </div>
    </div>
  </div>
</template>
<script setup>
/* import **/
import { ref } from "vue";

/**Notes */
const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: "id1",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum sit iste? Quisquam, minima quia a culpa neque tempora maxime odit perferendis architecto tenetur voluptates non provident? Deserunt optio quae hic, fugiat repudiandae esse possimus, eos eveniet culpa itaque cum nulla natus minima dicta cumque sint dolore obcaecati labore nobi",
  },
  {
    id: "id2",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum sit iste? Quisquam, minima quia a culpa neque tempora maxime odit perferendis architecto tenetur voluptates ",
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };
  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
