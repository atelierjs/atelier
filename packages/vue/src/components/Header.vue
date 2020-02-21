<template>
  <div class="header">{{ title }}</div>
</template>

<script>
import '@atelier/core/src/components/_header.scss';
import Vue from 'vue';

export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>
