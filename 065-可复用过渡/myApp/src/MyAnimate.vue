<template>
  <div>
    <Transition name="angelo">
      <slot></slot>
    </Transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.angelo-enter-active {
  animation: kerwianimate 1s;
}

.angelo-leave-active {
  animation: kerwianimate 1s reverse;
}

@keyframes kerwianimate {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>