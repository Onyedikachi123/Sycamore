<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  name: "Logout",
  data: () => ({}),
  created() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.$router.replace("/login");
  },

  computed: {
    ...mapState("account", ["status"])
  },
  methods: {
    ...mapActions("account", ["login", "logout"])
  }
});
</script>
