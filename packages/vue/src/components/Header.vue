<template>
  <div class="header">{{ props.title }}</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Header } from '../props';

export default Vue.extend({
  name: 'header',
  props: {
    header: {
      type: Header,
    },
  },
});
</script>
