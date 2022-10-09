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
          @keyup.enter="addNote"
        >
          Add new notes
        </button>
      </div>
    </div>
    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>
<script setup>
/* import **/
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import {useNoteStore} from "@/stores/storeNotes.js"
/**Notes */
const newNote = ref("");
const newNoteRef = ref(null);

const storeNotes = useNoteStore()




const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };
  storeNotes.notes.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};

/**dlete Note */

const deleteNote = (iddelete) => {
  storeNotes.notes = storeNotes.notes.filter((note) => note.id != iddelete);
};
</script>
