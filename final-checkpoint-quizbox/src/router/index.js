import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlayQuizboxView from "@/views/PlayQuizboxView.vue";
import BrowseQuestionsView from "@/views/BrowseQuestionsView.vue";
import QuizSessionView from "@/views/QuizSessionView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/play-quizbox",
    name: "playQuizbox",
    component: PlayQuizboxView,
  },
  {
    path: "/browse-questions",
    name: "browseQuestions",
    component: BrowseQuestionsView,
  },
  {
    path: "/quiz-session",
    name: "QuizSession",
    component: QuizSessionView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
