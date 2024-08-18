<template>
    <q-page class="q-pa-md">
      <div class="q-mb-md q-mx-auto" style="max-width: 800px;">
        <!-- Form for Adding/Editing User -->
        <q-form @submit.prevent="saveUser">
          <q-input v-model="user.name" label="Name" required class="q-mb-md"/>
          <q-input v-model="user.surname" label="Surname" required class="q-mb-md"/>
          <q-btn type="submit" label="Save User" color="primary" class="q-mb-md"/>
          <q-btn @click="clearForm" label="Clear" color="secondary" class="q-mb-md"/>
        </q-form>
  
        <!-- Data Table -->
        <q-table
          :rows="users"
          :columns="columns"
          row-key="id"
          class="q-mb-md"
        >
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn @click="editUser(props.row)" label="Edit" class="q-mr-sm"/>
              <q-btn @click="deleteUser(props.row.id)" color="negative" label="Delete"/>
            </q-td>
          </template>
        </q-table>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getAllRecords, addUser, updateRecord, deleteRecord } from './indexedDB';
  
  const columns = [
    { name: 'name', label: 'Name', align: 'left', field: 'name' },
    { name: 'surname', label: 'Surname', align: 'left', field: 'surname' },
    { name: 'actions', label: 'Actions', align: 'center' },
  ];
  
  const users = ref([]);
  const user = ref({ id: null, name: '', surname: '' });
  
  async function loadUsers() {
    users.value = await getAllRecords();
  }
  
  async function saveUser() {
    if (user.value.id) {
      await updateRecord(user.value.id, { name: user.value.name, surname: user.value.surname });
    } else {
      await addUser(user.value);
    }
    clearForm();
    loadUsers();
  }
  
  function editUser(userRecord) {
    user.value = { ...userRecord };
  }
  
  async function deleteUser(id) {
    await deleteRecord(id);
    loadUsers();
  }
  
  function clearForm() {
    user.value = { id: null, name: '', surname: '' };
  }
  
  onMounted(loadUsers);
  </script>
  
  <style scoped>
  /* Optional styling */
  </style>
  