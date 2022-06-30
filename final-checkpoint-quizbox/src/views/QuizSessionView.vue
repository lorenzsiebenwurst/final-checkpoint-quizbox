<template>
  <h2>QUIZBOX SESSION</h2>
  <p>Question count</p>
  <div>{{ questionNumber }}/{{ amountToFullNumber }}</div>
  <p>
    {{ question }}
  </p>
  <button @click="clickNext" v-if="questionNumber < amountToFullNumber">
    Next
  </button>
  <router-link :to="{ name: 'playQuizbox' }" v-else>End Session</router-link>
</template>

<script>
import questionsObject from "@/data/questions.js";
export default {
  name: "QuizSessionView",
  /*mounted() {
    for (let i = 0; i < this.amountToFullNumber; i++) {
      this.relevantQuestions.push(this.questionsObject.questions[i]);
    }
    console.log(this.relevantQuestions);
  },*/
  data() {
    return {
      questionsObject,
      sessionAttributes: this.$route.query,
      questionNumber: 0,
      relevantQuestions: [],
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
