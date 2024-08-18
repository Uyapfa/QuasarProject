<template>
  <q-page class="q-pa-md">
    <div class="q-mb-md q-mx-auto" style="max-width: 500px;">
  
      <div class="text-h6 text-center q-mb-md">
        Pie Chart Example
      </div>

      <div v-if="loading" class="text-center q-mt-md">
        <q-spinner color="primary" />
        <p>Loading chart data...</p>
      </div>

      <div v-else class="q-mt-md">
        <apexchart type="pie" width="100%" :options="chartOptions" :series="series" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { QSpinner } from 'quasar';

const chartOptions = ref({
  chart: {
    type: 'pie',
  },
  labels: [],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: '100%'
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
});

const series = ref([]);
const loading = ref(true); 

const fetchData = async () => {
  try {
    const response = await fetch('/pieChart.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    chartOptions.value.labels = data.map(item => item.year);
    series.value = data.map(item => item.numInstalls);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false; 
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>

</style>
