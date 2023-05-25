<template lang="pug">
//- eslint-disable-next-line tailwindcss/no-custom-classname
div(class="loader")
</template>

<style scoped>
.loader {
  position: relative;

  width: 64px;
  height: 64px;

  background-image: linear-gradient(#14b8a6 16px, transparent 0) ,
    linear-gradient(#ef4444 16px, transparent 0) ,
    linear-gradient(#ef4444 16px, transparent 0) ,
    linear-gradient(#14b8a6 16px, transparent 0);
  background-repeat: no-repeat;
  background-position: left top , left bottom , right top , right bottom;
  background-size: 16px 16px;

  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
    width: 64px;
    height: 64px
  }

  50% {
    transform: rotate(180deg);
    width: 30px;
    height: 30px
  }

  100% {
    transform: rotate(360deg);
    width: 64px;
    height: 64px
  }
}
</style>
