<template>
  <div class="person-list bosses" >
    <!-- Bosses (top row) -->
    <div
      
      class="person-card-wrapper"
      v-for="(profile, index) in profilesBosses"
      :key="'boss-' + index"
    >
      <PersonCard :profile="profile" />
    </div>
  </div>

  <!-- Regular employees -->
  <div class="person-list">
    <div
      v-for="(row, rowIndex) in profileRows"
      :key="'row-' + rowIndex"
      class="person-row"
    >
    <div style="width: 100%;">
      <h1 v-if="rowIndex==2" >PROJEKTANTI SURADNICI </h1>
      <div class="person-row">

          <div
            v-for="(profile, index) in row"
            :key="'profile-' + rowIndex + '-' + index"
            class="person-card-wrapper"
          >
            <PersonCard :profile="profile" />
          </div>
      </div>
    </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import PersonCard from '../components/PersonCard.vue';
import Gateway from '../../Gateway';

const profilesBosses = ref([]);
const profiles = ref([]);

// Hardcoded fallback data
const fallbackBosses = [
  {
    image: '/images/deni_pavic.jpg',
    name: 'Deni Pavić',
    title: `Vlasnik tvrtke, direktor`,
  },
  {
    image: '/images/vedran_vuletic.jpg',
    name: 'Vedran Vuletić',
    title: `Voditelj ureda, direktor, <br> Ovlašteni arhitekt, Ovl. arhitekt urbanist`,
  },
];

const fallbackProfiles = [
  { image: '/images/deni_pavic.jpg', name: 'Vedran Roljić', title: 'Projektant suradnik' },
  { image: '/images/zvonimir_jurkovic.jpg', name: 'Matija Pucak', title: 'Ovlašteni arhitekt' },
  { image: '/images/vedran_vuletic.jpg', name: 'Mislav Klarić', title: 'Arhitekt pripravnik' },
  { image: '/images/vedran_vuletic.jpg', name: 'Igor Višić', title: 'Ovlašteni inženjer geodezije i geoinformatike' },
  { image: '/images/igor_visic.jpg', name: 'Tomislav Jagodić', title: 'Geodet suradnik' },
  { image: '/images/zvonimir_jurkovic.jpg', name: 'Tomislav Češljaš', title: 'Ovlašteni inženjer građevinarstva' },
  { image: '/images/igor_visic.jpg', name: 'Siniša Kahrić', title: 'Ovlašteni inženjer građevinarstva' },
  { image: '/images/vedran_vuletic.jpg', name: 'Darko Magić', title: 'Strojar suradnik' },
  { image: '/images/zvonimir_jurkovic.jpg', name: 'Srećko Lačen', title: 'Ovlašteni inženjer stroj.' },
  { image: '/images/vedran_vuletic.jpg', name: 'Boris Kramarić', title: 'Ovlašteni inženjer elektr.' },
];

onMounted(async () => {
  try {
    const data = await Gateway.getEmployes();
    console.log('Fetched employees:', data);
    if (Array.isArray(data) && data.length > 0) {
      profilesBosses.value = data.slice(0, 2);
      profiles.value = data.slice(2);
      profiles.value = profiles.value.sort((a, b) => a.order - b.order);
      console.log('Using fallback employees:', profiles.value);
    } else {
      profilesBosses.value = fallbackBosses;
      profiles.value = fallbackProfiles;
    }
  } catch (error) {
    console.error('Failed to fetch employees:', error);
    profilesBosses.value = fallbackBosses;
    profiles.value = fallbackProfiles;
  }
});

// 🧩 Create alternating rows of 3 and 2
const profileRows = computed(() => {
  const rows = [];
  const arr = profiles.value;
  let i = 0;
  let takeThree = true;
  while (i < arr.length) {
    let count = takeThree ? 3 : 2;
    if(i>3){
      count = 3;
    }
    rows.push(arr.slice(i, i + count));
    i += count;
    takeThree = !takeThree;
  }
  return rows;
});
</script>

<style scoped lang="scss">
.person-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1600px;
  margin-inline: auto;
  @include mobile {
    display: block;
  }
}

.person-row {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  @include mobile {
    display: block;
  }
}

.person-card-wrapper {
  margin: 5px;
  flex: 1 1 30%;
  max-width: 30%;
  @include desktop {
    margin: 10px;
    display: flex;
    justify-content: center;
  }
  @include mobile {
    max-width: 100%;
    flex: none;
    margin: 10px 0;
  }
}

h1{
  text-align: center;
  margin-left: 20px;
  @include mobile {
    text-align: left;
    font-size: 24px;
    margin-left: 30px;
    margin-top: 35px;
  }
}
.bosses{
  flex-direction: row;
  justify-content: center;
  @include mobile {
    display: block;
  }
}
</style>
