<template>
  <div class="index">
    <h1>here is nuxt custom layout</h1>
    <slot name="head"></slot>
    <slot></slot>
    <slot name="foot"></slot>
    <slot name="extra"></slot>
  </div>
</template>
<script setup>
</script>