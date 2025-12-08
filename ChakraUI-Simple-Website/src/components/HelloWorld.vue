<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <Cbox p="4">
    <CHeading mb="4">Chakra UI + VUE + VITE</CHeading>
    <CButton colorScheme="teal" size="lg" @click="count++">
      count is {{ count }}
    </CButton>
  </Cbox>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
