<template>
  <article>
    <header class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <!-- set the class dynamically and where you wanna to use it -->
          <div
            class="nav-item"
            :class="{ 'is-active': tab.isActive }"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
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
      tabs: []
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name === selectedTab.name;
      });
    }
  },
  created() {
    this.tabs = this.$children;
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
      font-weight: bold;
    }
  }
}
</style>
