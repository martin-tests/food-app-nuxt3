<template>
  <div class="progress-bar w-[50px] h-[50px] relative" role="progressbar" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100">
    <div class="text-center">
      <div class="text-xs mt-[10px]">{{ calories }}</div>
      <div class="text-xs leading-3">kcal</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  calories: Number
});
const percentage = props.calories ? props.calories / 10 : 0;
const color = !props.calories ? 'white'
  : props.calories > 800 ? 'red'
  : props.calories <= 500 ? 'green'
  : 'orange';

</script>

<style scoped>
.progress-bar {
  border-radius: 50%;
  background: 
    radial-gradient(closest-side, white 70%, transparent 80% 100%),
    conic-gradient(v-bind(color) calc(v-bind(percentage)*1%), #f2f3f5 0);    
}
</style>