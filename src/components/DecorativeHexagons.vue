<template>
    <div class="decorative-group">
        <div :class="{'decorative-wrap': shadowsActive}">
            <div class="decorative-element"></div>
        </div>
        <div :class="{'decorative-wrap': shadowsActive}">
            <div class="decorative-element"></div>
        </div>
        <div :class="{'decorative-wrap': shadowsActive}">
            <div class="decorative-element"></div>
        </div>
    </div>
</template>
<script>
    export default{
        name: "DecorativeHexagons",
        props:{
            shadowsActive: true
        }
    }
</script>
<style lang="scss" scoped>
.decorative-group{
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  .decorative-wrap{
    filter: drop-shadow(0px 3px 2px rgba(50, 50, 0, 0.4));
  }

  .decorative-element{
      clip-path: polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
      background: $success;
      width: 20px;
      height: 20px;
      margin: 0 .2rem;
    }
}
</style>