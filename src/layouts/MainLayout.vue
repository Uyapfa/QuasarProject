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
          Dashboard
        </q-toolbar-title>
        <div>EcoTech Dynamics</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-blue-grey-2 text-dark-green"
    >
      <q-list>
        <q-item-label header class="text-blue-4 bg-blue-grey-3">
          Admin Portal
        </q-item-label>

        <q-item
          to="/"
          clickable
          class="q-my-xs"
          :class="{ 'bg-blue-3 text-dark-green': isActive('/') }"
        >
          <q-btn flat icon="home" :class="{ 'text-dark-green': isActive('/') }">
            Home
          </q-btn>
        </q-item>
        
        <q-item
          to="/piechart"
          clickable
          class="q-my-xs"
          :class="{ 'bg-blue-3 text-dark-green': isActive('/piechart') }"
        >
          <q-btn flat icon="pie_chart" :class="{ 'text-dark-green': isActive('/piechart') }">
            Pie Chart
          </q-btn>
        </q-item>

        <q-item
          to="/bargraph"
          clickable
          class="q-my-xs"
          :class="{ 'bg-blue-3 text-dark-green': isActive('/bargraph') }"
        >
          <q-btn flat icon="bar_chart" :class="{ 'text-dark-green': isActive('/bargraph') }">
            Bar Graph
          </q-btn>
        </q-item>

        <q-item
          to="/users"
          clickable
          class="q-my-xs"
          :class="{ 'bg-blue-3 text-dark-green': isActive('/users') }"
        >
          <q-btn flat icon="people" :class="{ 'text-dark-green': isActive('/users') }">
            Users Table
          </q-btn>
        </q-item>

        <q-item
          to="/addusers"
          clickable
          class="q-my-xs"
          :class="{ 'bg-blue-3 text-dark-green': isActive('/addusers') }"
        >
          <q-btn flat icon="person_add" :class="{ 'text-dark-green': isActive('/addusers') }">
            Add Users
          </q-btn>
        </q-item>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          class="q-my-xs"
          :class="{ 'bg-blue-3 text-dark-green': isActive(link.url) }"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import EssentialLink from 'components/EssentialLink.vue';

defineOptions({
  name: 'MainLayout'
});

const leftDrawerOpen = ref(false);
const route = useRoute();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function isActive(path) {
  return route.path === path;
}

</script>

<style scoped>
.bg-blue-grey-2 {
  background-color: #f2f2f2 !important; 
}

.bg-blue-grey-3 {
  background-color: #e0e0e0 !important; 
}

.text-blue {
  color: #1976d2 !important; 
}

.text-blue-4 {
  color: #0d47a1 !important; 
}

.bg-blue-3 {
  background-color: #1976d2 !important; 
}

.text-dark-green {
  color: #095548 !important; 
}

.text-white {
  color: #ffffff !important; 
}
</style>
