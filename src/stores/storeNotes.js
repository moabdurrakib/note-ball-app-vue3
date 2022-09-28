import { defineStore } from 'pinia'

export const useNoteStore = defineStore('counter', {
  state: () => {
    return { 
      notes:
      [
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
      ]
     }
  },
})