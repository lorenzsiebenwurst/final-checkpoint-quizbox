<template>
  <h2>BROWSE QUESTIONS</h2>
  <p>Choose a category with questions</p>
  <select
    name="questionsAmount"
    id="questionsAmount"
    @change="categorySelected"
  >
    <option
      v-for="(item, index) in questionsObject"
      :key="index"
      :value="index"
    >
      {{ item.name }}
    </option>
  </select>
  <h3>Questions from the chapter</h3>
  <ul>
    <li
      v-for="(question, index) in questionsObject[currentCategoryIndex]
        .questions"
      :key="index"
    >
      {{ question }}
    </li>
  </ul>
</template>

<script>
import questionsObject from "@/data/questions.js";
export default {
  name: "BrowseQuestionsView",
  methods: {
    categorySelected(event) {
      this.currentCategoryIndex = event.target.value;
    },
  },

  data() {
    return {
      currentCategoryIndex: 0,
      questionsObject,
    };
  },
};
</script>
