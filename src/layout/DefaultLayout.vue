<template>
    <div>
        <core-header></core-header>
        <div class="general-container">
            <h1>Estes es un layout</h1>
            <router-view></router-view>
            <core-footer></core-footer>
        </div>
    </div>
</template>

<style lang="scss">
.general-container{
    margin-top: 40px;
}
</style>