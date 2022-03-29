<script setup>
import ItemHeader    from './components/ItemHeader.vue'
import ItemMain      from './components/ItemMain.vue'
import ItemSeriously from './components/ItemSeriously.vue'
import ItemDatabase  from './components/ItemDatabase.vue'
import ItemRankings  from './components/ItemRankings.vue'
import ItemLaunches  from './components/ItemLaunches.vue'</script>

<template>
  <item-header/>
  <article class="container">
    <item-main/>
    <item-seriously/>
    <item-database/>
    <item-rankings/>
    <item-launches/>
  </article>
</template>
