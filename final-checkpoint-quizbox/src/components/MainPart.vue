<template>
  <h2>{{ title }}</h2>
  <p>{{ subtitle }}</p>
  <select name="questionsAmount" id="questionsAmount">
    <option v-for="(item, index) in dropdownList" :key="index" value="index">
      {{ item.name }}
    </option>
  </select>
  <h3>{{ areatitle }}</h3>
  <ul>
    <slot name="list">
      <li
        v-for="(questionTopic, index) in questionsList"
        :key="index"
        value="index"
        class="category"
      >
        <input type="checkbox" :id="index" @click="$emit('add-category')" />
        <p>{{ questionTopic.name }}</p>
        <p>{{ questionTopic.amount }}</p>
      </li>
    </slot>
  </ul>
</template>

<script>
export default {
  name: "MainPart",
  emits: ["add-category"],
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    areatitle: {
      type: String,
    },
    dropdownList: {
      type: Array,
      required: true,
    },
    questionsList: {
      type: Array,
      required: true,
    },
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
