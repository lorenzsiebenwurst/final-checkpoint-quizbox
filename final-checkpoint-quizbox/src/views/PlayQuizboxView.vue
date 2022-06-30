<template>
  <h2>PLAY QUIZBOX</h2>
  <p>Quiz time - test what you know</p>
  <select
    name="questionsAmount"
    id="questionsAmount"
    @change="categorySelected"
  >
    <option v-for="(number, index) in amount" :key="index" :value="index">
      {{ number.name }}
    </option>
  </select>
  <h3>Questions area</h3>
  <ul>
    <li
      v-for="(question, index) in questionsObject"
      :key="index"
      class="category"
    >
      <input type="checkbox" :id="index" />
      <label :for="index">{{ question.name }}</label>
      <p>{{ question.amount }}</p>
    </li>
  </ul>
  <router-link :to="{ name: 'QuizSession', query: currentSelection }"
    >Start Session</router-link
  >
</template>

<script>
import questionsObject from "@/data/questions.js";
export default {
  name: "PlayQuizboxView",

  data() {
    return {
      currentSelection: {
        id: [0, 1, 2],
        amount: 10,
      },
      amount: [
        { name: "Amount of Questions" },
        { name: "10" },
        { name: "20" },
        { name: "30" },
      ],
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
