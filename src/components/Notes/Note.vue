<template>
  <div class="card m-5">
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
</template>
<script setup>
/**Props */
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
</script>
