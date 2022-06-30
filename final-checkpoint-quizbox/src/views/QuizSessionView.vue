<template>
  <h2>QUIZBOX SESSION</h2>
  <p>Question count</p>
  <div>{{ questionNumber }}/{{ amountToFullNumber }}</div>
  <p>
    {{ question }}
  </p>
  <button @click="clickNext">Next</button>
</template>

<script>
import questionsObject from "@/data/questions.js";
export default {
  name: "QuizSessionView",
  data() {
    return {
      questionsObject,
      sessionAttributes: this.$route.query,
      questionNumber: 0,
    };
  },
  computed: {
    amountToFullNumber() {
      return this.sessionAttributes.amount + "0";
    },
    question() {
      return this.questionsObject[this.sessionAttributes.id].questions[
        this.questionNumber
      ];
    },
  },
  methods: {
    clickNext() {
      if (this.questionNumber < this.amountToFullNumber) {
        this.questionNumber++;
      }
    },
  },
};
</script>
