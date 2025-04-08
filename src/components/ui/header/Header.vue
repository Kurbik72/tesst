<template>
  <div class="header">
    <div class="header__logo">
      <span>Лого</span>
    </div>
    <div class="menu">
      <RouterLink :to="{ path: '/HomePgg', query: { search: 'admin' } }">Home</RouterLink>

      <RouterLink
        exact-active-class="border-indigo-700"
        to="/Homepage"
        >1 страница</RouterLink
      >
      <RouterLink to="/SecondPage">2 страница</RouterLink>
      <RouterLink to="/ThirdPage">3 страница</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style>
.header {
  display: flex;
}
</style>
