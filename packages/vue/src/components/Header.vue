<template>
  <div class="header">{{ props.title }}</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export interface HeaderProps {
  title: string;
}

export default Vue.extend({
  name: 'header',
  props: {
    headerProps: {
      type: Object as () => HeaderProps,
    },
  },
});
</script>
