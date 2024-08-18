<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item to="/" clickable>
          <q-btn flat icon="home">Home</q-btn>
        </q-item>

        <q-item to="/piechart" clickable>
          <q-btn flat icon="info">Pie Chart</q-btn>
        </q-item>

        <q-item to="/bargraph" clickable>
          <q-btn flat icon="info">Bar Graph</q-btn>
        </q-item>

        <q-item to="/users" clickable>
          <q-btn flat icon="info">Users Table</q-btn>
        </q-item>
        <q-item to="/addusers" clickable>
          <q-btn flat icon="info">aAdd Users</q-btn>
        </q-item>
        <q-item-label header>Other Links</q-item-label>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
