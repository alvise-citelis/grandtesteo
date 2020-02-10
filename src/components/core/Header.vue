<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/saaas">saaas</router-link> |
      <router-link to="/ssnap">ScrollSnap</router-link> |
      <router-link to="/buy">BuyFlow</router-link>
    </div>
</template>

<style lang="scss">
#nav{
    position: fixed;
    width: 100%;
    height: 20px;
    top: 0;
    padding: 10px 0;
    background: $background;
  a {
    font-weight: bold;
    color: $secondary;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}
    
</style>