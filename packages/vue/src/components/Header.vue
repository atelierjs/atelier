<template>
  <div class="header">{{ header.title }}</div>
</template>

<script lang="ts">
import '@atelier/core/src/components/_header.scss';

import Vue from 'vue';
import { Header } from '../props';

export default Vue.extend({
  name: 'Header',
  props: {
    header: {
      type: Object as () => Header,
    },
  },
});
</script>
