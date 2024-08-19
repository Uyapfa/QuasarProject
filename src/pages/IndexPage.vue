<template>
  <q-page class="q-pa-md">

    <section class="hero bg-primary text-white q-pa-md q-mb-md">
      <div class="text-center">
        <h1 class="text-h3">Welcome to Thagana Technologies' Test Project</h1>
        <p class="q-mb-md">Showcasing Modern Web Development with Vue.js, Quasar, and IndexedDB</p>
        <q-btn to="#features" color="accent" label="Explore Features" />
      </div>
    </section>

    <section id="about" class="q-pa-md bg-light-grey">
      <div class="text-center q-mb-md">
        <h2 class="text-h4">About the App</h2>
        <p>This application demonstrates the power and flexibility of modern web technologies through the following features:</p>
        
        <q-card class="my-card q-mb-md" flat bordered>
          <q-card-section>
            <h3 class="text-h6">Dynamic Data Visualizations</h3>
            <p>Utilize Vue.js and Quasar to create dynamic data visualizations including pie charts and bar graphs. Data is fetched from JSON files and visualized using VueApexCharts, ensuring an interactive and responsive user experience.</p>
          </q-card-section>
        </q-card>
        
        <q-card class="my-card q-mb-md" flat bordered>
          <q-card-section>
            <h3 class="text-h6">User Management</h3>
            <p>Manage user records with a comprehensive data table built with Quasar. Features include pagination, search functionality, and filtering by designation. This section also integrates IndexedDB for robust data storage and management.</p>
          </q-card-section>
        </q-card>

        <q-card class="my-card q-mb-md" flat bordered>
          <q-card-section>
            <h3 class="text-h6">IndexedDB Integration</h3>
            <p>Experience offline data persistence with IndexedDB. The application supports CRUD operations, allowing users to add, update, and delete records with data stored locally even after closing the browser.</p>
          </q-card-section>
        </q-card>
      </div>
    </section>

    <section id="features" class="q-pa-md">
      <div class="text-center q-mb-md">
        <h2 class="text-h4">Features of the Application</h2>
        <q-card class="my-card q-mb-md" flat bordered>
          <q-card-section>
            <h3 class="text-h6">1. Bar Chart Visualization</h3>
            <p>View and interact with a bar chart that dynamically updates based on the data provided. Built using Vue.js and VueApexCharts, it provides a clear representation of installation data.</p>
          </q-card-section>
        </q-card>

        <q-card class="my-card q-mb-md" flat bordered>
          <q-card-section>
            <h3 class="text-h6">2. Pie Chart Visualization</h3>
            <p>Explore a pie chart visualizing installation data over different years. The chart adjusts to different screen sizes for optimal viewing on any device.</p>
          </q-card-section>
        </q-card>

        <q-card class="my-card q-mb-md" flat bordered>
          <q-card-section>
            <h3 class="text-h6">3. User Data Management</h3>
            <p>Manage user data with a form that integrates with IndexedDB. Edit and delete records while enjoying a user-friendly interface for effective data handling.</p>
          </q-card-section>
        </q-card>
      </div>
    </section>

    <section id="contact" class="q-pa-md bg-light-grey">
      <div class="text-center q-mb-md">
        <h2 class="text-h4">Contact Us</h2>
        <p>If you have any questions or need further information, feel free to reach out.</p>
        <q-list>
          <q-item>
            <q-item-section>
              <strong>Website:</strong> <a href="http://www.thaganatechnologies.com" class="q-mr-sm">www.thaganatechnologies.com</a>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <strong>Email:</strong> <a href="mailto:support@thaganatechnologies.com" class="q-mr-sm">support@thaganatechnologies.com</a>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <strong>Phone:</strong> +1-800-555-1234
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <strong>Address:</strong> 456 Innovation Drive, Tech City, CA 90001, USA
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </section>

    <footer class="q-pa-md bg-dark-grey text-white text-center">
      <p>&copy; 2024 Thagana Technologies. All rights reserved.</p>
    </footer>
  </q-page>
</template>

<script setup>
</script>

<style scoped>
.hero {
  background-color: #007bff; 
}

.bg-light-grey {
  background-color: #f8f9fa;
}

.bg-dark-grey {
  background-color: #343a40; 
}

.my-card {
  max-width: 800px;
  margin: 0 auto;
}

.q-btn {
  margin-top: 1rem;
}
</style>
