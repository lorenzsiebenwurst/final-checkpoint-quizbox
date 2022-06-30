<template>
  <h2>PLAY QUIZBOX</h2>
  <p>Quiz time - test what you know</p>
  <select name="questionsAmount" id="questionsAmount" @change="selectedAmount">
    <option v-for="(number, index) in amount" :key="index" :value="index">
      {{ number }}
    </option>
  </select>
  <h3>Questions area</h3>
  <ul>
    <li
      v-for="(question, index) in questionsObject"
      :key="index"
      class="category"
      :value="index"
    >
      <input type="checkbox" :id="index" @change="selectedCategory" />
      <label :for="index">{{ question.name }}</label>
      <p>{{ question.amount }}</p>
    </li>
  </ul>
  <router-link
    :to="{ name: 'QuizSession', query: currentSelection }"
    v-if="
      this.currentSelection.amount !== 0 &&
      this.currentSelection.id.length !== 0
    "
    >Start Session</router-link
  >
</template>

<script>
/*<router-link :to="{ name: 'QuizSession', query: currentSelection }"
    >Start Session</router-link
  > */
import questionsObject from "@/data/questions.js";
export default {
  name: "PlayQuizboxView",
  methods: {
    selectedAmount(event) {
      this.currentSelection.amount = event.target.value;
    },
    selectedCategory(event) {
      const indexOfCategory = this.currentSelection.id.indexOf(event.target.id);
      if (this.currentSelection.id.includes(event.target.id)) {
        this.currentSelection.id.splice(indexOfCategory, 1);
      } else {
        this.currentSelection.id.push(event.target.id);
      }
    },
  },
  data() {
    return {
      currentSelection: {
        id: [],
        amount: 0,
      },
      amount: ["Amount of Questions", "10", "20", "30"],
      questionsObject,

      selectedList: [],
    };
  },
};
</script>

<style scoped>
.category {
  display: flex;
  padding: 0 80px;
}
.category > * {
  padding: 0 10px;
}
</style>
