<template>
    <q-page class="q-pa-md">
      <div class="q-mb-md q-mx-auto" style="max-width: 800px;">
        <!-- Centered Heading -->
        <div class="text-h6 text-center q-mb-md">
          Users Table
        </div>
  
        <!-- Dropdown for designation -->
        <q-select
          v-model="selectedDesignation"
          :options="designationOptions"
          label="Select Designation"
          @input="filterData"
          class="q-mb-md"
        />
  
        <!-- Search input -->
        <q-input
          v-model="searchQuery"
          label="Search"
          @input="filterData"
          class="q-mb-md"
        />
  
        <!-- Reload Data Button -->
        <q-btn @click="fetchData" label="Reload Data" class="q-mb-md"/>
  
        <!-- Data table -->
        <q-table
          :rows="paginatedData"
          :columns="columns"
          v-model:pagination="pagination"
          row-key="id"
          :filter="searchQuery"
          class="q-mb-md"
        />
  
        <!-- Pagination controls -->
        <q-pagination
          v-model:page="pagination.page"
          :max="maxPage"
          boundary-numbers
          class="q-mb-md"
        />
      </div>
    </q-page>
  </template>
  
  
  <script setup>
  import { ref, onMounted, computed } from 'vue'
  import { QSelect, QInput, QTable, QPagination, QBtn } from 'quasar'
  
  // Define columns for the table
  const columns = [
    { name: 'name', label: 'Name', align: 'left', field: row => row.name },
    { name: 'surname', label: 'Surname', align: 'left', field: row => row.surname },
    { name: 'designation', label: 'Designation', align: 'left', field: row => row.designation },
    { name: 'department', label: 'Department', align: 'left', field: row => row.department },
  ]
  
  // Define pagination and search
  const pagination = ref({ page: 1, rowsPerPage: 10 })
  const searchQuery = ref('')
  const selectedDesignation = ref(null)
  const users = ref([])
  const designationOptions = ref([])
  
  // Fetch data from the JSON file
  async function fetchData() {
    try {
      const response = await fetch('/users.json?v=' + new Date().getTime()) // Add a unique query parameter
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      users.value = data
      // Extract unique designations
      designationOptions.value = [...new Set(users.value.map(user => user.designation))]
      filterData() // Apply filters after fetching data
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }
  
  // Filter data based on search query and designation
  function filterData() {
    const filtered = users.value.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      const matchesDesignation = !selectedDesignation.value || user.designation === selectedDesignation.value
      return matchesSearch && matchesDesignation
    })
    // Update paginated data based on filtered results
    paginatedData.value = filtered
  }
  
  // Computed property for paginated data
  const paginatedData = computed(() => {
    const start = (pagination.value.page - 1) * pagination.value.rowsPerPage
    const end = start + pagination.value.rowsPerPage
    return users.value.slice(start, end)
  })
  
  // Compute maximum page number
  const maxPage = computed(() => Math.ceil(users.value.length / pagination.value.rowsPerPage))
  
  // Load data on component mount
  onMounted(fetchData)
  </script>
  