<template>
  <h2>QUIZBOX SESSION</h2>
  <p>Question count</p>
  <div>{{ questionNumber }}/{{ amountToFullNumber }}</div>
  <p>
    {{ generateArrayOfRelevantQuestions }}
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
      questionNumber: 1,
      questionIndex: 0,
    };
  },
  computed: {
    amountToFullNumber() {
      return this.sessionAttributes.amount + "0";
    },
    generateArrayOfRelevantQuestions() {
      //empty array for relevant Questions
      const relevantQuestions = [];
      //if there is an equal number of questions for each topic
      if (this.amountToFullNumber % this.sessionAttributes.id.length === 0) {
        //define the number of questions for each topic
        const questionsAmountPerTopic =
          this.amountToFullNumber / this.sessionAttributes.id.length;
        //push the amount of questions per topic in the empty array
        this.sessionAttributes.id.forEach((element) => {
          for (let i = 0; i < questionsAmountPerTopic; i++) {
            relevantQuestions.push(
              this.questionsObject[element].questions[
                Math.floor(
                  Math.random() * (this.questionsObject[element].amount + 1)
                )
              ]
            );
          }
        });
      } else {
        //questions amount can not be equally devided
        //amount per topic except of the last topic => there must be one more question
        const questionsAmountPerTopic = Math.floor(
          this.amountToFullNumber / this.sessionAttributes.id.length
        );
        let lastElement = 0;
        this.sessionAttributes.id.forEach((element) => {
          for (let i = 0; i < questionsAmountPerTopic; i++) {
            relevantQuestions.push(
              this.questionsObject[element].questions[
                Math.floor(
                  Math.random() * (this.questionsObject[element].amount + 1)
                )
              ]
            );
          }
          //last Category should have one more question
          lastElement++;
        });
        relevantQuestions.push(
          this.questionsObject[lastElement].questions[
            questionsAmountPerTopic + 1
          ]
        );
      }

      //console.log(relevantQuestions);
      //return the array with relevant Questions
      return relevantQuestions[this.questionIndex];
    },
  },

  methods: {
    clickNext() {
      if (this.questionNumber < this.amountToFullNumber) {
        this.questionNumber++;
        this.questionIndex++;
      }
    },
  },
};
</script>
