<template>
  <MainPart
    title="PLAY QUIZBOX"
    subtitle="Quiz time - test what you know"
    areatitle="Questions areas"
    :dropdownList="amount"
    :questionsList="questionsObject"
    @add-category="addCategoryToSelectedList(index)"
  />
  <router-link :to="{ name: 'QuizSession', query: currentSelection }"
    >Start Quizbox</router-link
  >
</template>

<script>
import MainPart from "@/components/MainPart.vue";

export default {
  name: "PlayQuizboxView",
  components: {
    MainPart,
  },
  methods: {
    addCategoryToSelectedList(index) {
      console.log(index);
    },
  },
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

      questionsObject: [
        { name: "Basics Html CSS", amount: 66 },
        { name: "Advanced Html CSS", amount: 29 },
        { name: "Basics JS", amount: 33 },
        { name: "First JS Web App", amount: 34 },
        { name: "Terminal and Shell", amount: 21 },
      ],

      selectedList: [],
    };
  },
};
</script>
