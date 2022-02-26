<template>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  padding: 10px;
  width: 100%;
  text-align: center;

  .button.clear {
    color: var(--font-color);
  }

  @media(max-height: 650px) {
    & {
      display: none;
    }
  }
}
</style>
