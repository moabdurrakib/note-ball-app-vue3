<template>
  <div class="card m-5">
    <div class="card-body">
      <p class="card-text">
        {{ note.content }}
      </p>
      <div class="text-end">{{ contentLenth }}</div>
      <footer class="d-flex justify-content-evenly">
        <a href="#" class="card-link">Edit</a>
        <a href="#" class="card-link" @click.prevent="handleDeleteClicked"
          >Deleted</a
        >
      </footer>
    </div>
  </div>
</template>
<script setup>
import { computed } from "@vue/runtime-core";

/**Props */
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/**Emit custom event */
const emit = defineEmits(["deleteClicked"]);

/**computed */
const contentLenth = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

/**Handle delete clicked */
const handleDeleteClicked = () => {
  emit("deleteClicked", props.note.id);
};
</script>
