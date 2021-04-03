<template>
  <article>
    <header class="tabs">
      <ul>
        <li v-for="(CardTab, index) in CardTabs" :key="index">
          <div
            class="nav-item"
            :class="{ 'is-active': CardTab.isActive }"
            @click="selectTab(CardTab)"
          >
            {{ CardTab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  data: () => {
    return {
      CardTabs: []
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.CardTabs.forEach(CardTab => {
        CardTab.isActive = CardTab.name === selectedTab.name;
      });
    }
  },
  created() {
    this.CardTabs = this.$children;
  }
};
</script>

<style lang="scss" scoped>
.tabs ul {
  border-bottom: 1px solid #a4ae9d;
  margin: 0 10px;
}

.tabs-details {
  padding: 10px;
}

ul {
  display: flex;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;

  li {
    margin-right: 40px;
  }
  .nav-item {
    cursor: pointer;

    &:hover {
      color: #63c132;
    }

    &.is-active {
      border-bottom: 2px solid #63c132;
    }
  }
}
</style>
