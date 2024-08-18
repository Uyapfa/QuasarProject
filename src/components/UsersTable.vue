<template>
  <q-page class="q-pa-md">
    <div class="q-mb-md q-mx-auto" style="max-width: 800px;">
      
      <div class="text-h4 text-center q-mb-md">
        Users Table
      </div>

      <q-select
        v-model="selectedDesignation"
        :options="designationOptions"
        label="Select Designation"
        @input="filterData"
        class="q-mb-md"
      />

      <q-input
        v-model="searchQuery"
        label="Search"
        @input="filterData"
        class="q-mb-md"
      />

      <div class="q-mb-md">
        <q-btn @click="fetchData" label="Search" class="q-mr-md"/>
        <q-btn @click="clearSearches" label="Clear Searches" color="secondary"/>
      </div>

      <q-table
        :rows="paginatedData"
        :columns="columns"
        v-model:pagination="pagination"
        row-key="id"
        class="q-mb-md"
      />

      <q-pagination
        v-model:page="pagination.page"
        :max="maxPage"
        boundary-numbers
        class="q-mb-md"
        @input="onPageChange"
      />
    </div>
  </q-page>
</template>


<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { QSelect, QInput, QTable, QPagination, QBtn } from 'quasar'

const columns = [
  { name: 'name', label: 'Name', align: 'left', field: row => row.name },
  { name: 'surname', label: 'Surname', align: 'left', field: row => row.surname },
  { name: 'designation', label: 'Designation', align: 'left', field: row => row.designation },
  { name: 'department', label: 'Department', align: 'left', field: row => row.department },
]

const pagination = ref({ page: 1, rowsPerPage: 6 }) 
const searchQuery = ref('')
const selectedDesignation = ref(null)
const users = ref([])
const designationOptions = ref([])

const filteredData = ref([])

async function fetchData() {
  try {
    const response = await fetch('/users.json?v=' + new Date().getTime()) 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    users.value = data

    designationOptions.value = [...new Set(users.value.map(user => user.designation))]
    filterData()
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

function filterData() {
  const filtered = users.value.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesDesignation = !selectedDesignation.value || user.designation === selectedDesignation.value
    return matchesSearch && matchesDesignation
  })

  filteredData.value = filtered
}

function clearSearches() {
  searchQuery.value = ''
  selectedDesignation.value = null
  filterData() 
}

const paginatedData = computed(() => {
  const start = (pagination.value.page - 1) * pagination.value.rowsPerPage
  const end = start + pagination.value.rowsPerPage
  return filteredData.value.slice(start, end)
})

const maxPage = computed(() => Math.ceil(filteredData.value.length / pagination.value.rowsPerPage))

onMounted(fetchData)
</script>
