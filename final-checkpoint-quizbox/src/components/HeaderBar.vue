<template>
  <header class="header-wrapper">
    <div class="menu-container">
      <BurgerMenu @click="burgerMenuClick()" />
      <h1>Quizbox</h1>
    </div>

    <ul :class="'nav-menu' + type">
      <li class="nav-item">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'playQuizbox' }">Play Quizbox</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'browseQuestions' }"
          >Browse Questions</router-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
import BurgerMenu from "@/components/BurgerMenu.vue";
export default {
  name: "HeaderBar",
  data() {
    return {
      type: "",
    };
  },

  components: { BurgerMenu },
  methods: {
    burgerMenuClick() {
      if (this.type === "") {
        this.type = ".active";
      } else {
        this.type = "";
      }
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.menu-container {
  display: flex;
  gap: 70px;
  padding: 1rem;
  background-color: #6a1cc3;
}
h1 {
  color: white;
}

li {
  list-style: none;
  padding: 0.2rem;
}

.nav-menu {
  width: 100%;
  padding: 1rem;
  position: fixed;
  display: flex;
  background-color: #8849cf;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: -100%;
}

.nav-branding {
  font-size: 2rem;
}

.nav-link {
  transition: 0.7s ease;
}

.nav-menu.active {
  top: 0;
}
</style>
