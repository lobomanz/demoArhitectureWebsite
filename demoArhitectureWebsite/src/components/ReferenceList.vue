<template>
  <div class="wrapper">
    <!-- <div class="filters">
      <DropdownCheckbox 
        title="Select Year" 
        :items="uniqueYears" 
        @checkbox-changed="updateFilters('year', $event)"
        :is-open="openDropdown === 'year'"
        @toggle-dropdown="toggleDropdown('year')"
      />
      <DropdownCheckbox 
        title="Select Investor" 
        :items="uniqueInvestors" 
        @checkbox-changed="updateFilters('investor', $event)"
        :is-open="openDropdown === 'investor'"
        @toggle-dropdown="toggleDropdown('investor')"
      />
      <DropdownCheckbox 
        title="Select Solution" 
        :items="uniqueSolutions" 
        @checkbox-changed="updateFilters('solution', $event)"
        :is-open="openDropdown === 'solution'"
        @toggle-dropdown="toggleDropdown('solution')"
      />
      <DropdownCheckbox 
        title="Select Project" 
        :items="uniqueProjects" 
        @checkbox-changed="updateFilters('project', $event)"
        :is-open="openDropdown === 'project'"
        @toggle-dropdown="toggleDropdown('project')"
      />
    </div> -->

    <ul class="reference-list">
      <li v-for="item in filteredItems" :key="item.title" class="reference-item">
        <span class="year">{{ item.year }}</span>
        <span class="title">{{ item.title }}</span>
        <!-- <span class="investor">{{ item.investor }}</span>
        <span class="solution">{{ item.solution }}</span>
        <span class="project">{{ item.project }}</span> -->
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import DropdownCheckbox from './DropdownCheckbox.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const selectedFilters = ref({
  year: [],
  investor: [],
  solution: [],
  project: []
});

// Track which dropdown is currently open
const openDropdown = ref(null);

// Extract unique values for each property
const uniqueYears = computed(() => Array.from(new Set(props.items.map(item => item.year))).sort());
const uniqueInvestors = computed(() => Array.from(new Set(props.items.map(item => item.investor))).sort());
const uniqueSolutions = computed(() => Array.from(new Set(props.items.map(item => item.solution))).sort());
const uniqueProjects = computed(() => Array.from(new Set(props.items.map(item => item.project))).sort());

const updateFilters = (property, value) => {
  if (selectedFilters.value[property].includes(value)) {
    selectedFilters.value[property] = selectedFilters.value[property].filter(v => v !== value);
  } else {
    selectedFilters.value[property].push(value);
  }
};

const toggleDropdown = (dropdown) => {
  openDropdown.value = openDropdown.value === dropdown ? null : dropdown;
};

const filteredItems = computed(() => {
  return props.items.filter(item => {
    return (
      (selectedFilters.value.year.length === 0 || selectedFilters.value.year.includes(item.year)) &&
      (selectedFilters.value.investor.length === 0 || selectedFilters.value.investor.includes(item.investor)) &&
      (selectedFilters.value.solution.length === 0 || selectedFilters.value.solution.includes(item.solution)) &&
      (selectedFilters.value.project.length === 0 || selectedFilters.value.project.includes(item.project))
    );
  });
});
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 1000px;
  margin: 0 auto;
  /* Center the wrapper */
}

.filters {
  flex-wrap: wrap;
  margin-bottom: 20px;

  @include desktop {
    display: flex;
  }
}

.reference-list {
  list-style-type: none;
  padding: 0;
  margin-top: 50px;

  @include mobile {
    max-width: 300px;
    margin: auto;
  }
}

.reference-item {
  display: flex;
  // align-items: center;
  margin: 10px;

  .year {
    font-weight: bold;
    /* Bold for the year */
    font-size: 16px;
    /* Font size for year */
    margin-right: 5px;
    /* Spacing for year */
  }

  .title {
    font-weight: normal;
    /* Normal font weight for title */
    font-size: 16px;
    /* Font size for title */
    // text-transform: uppercase;
    /* Uppercase for title */
    margin-right: 5px;
    /* Spacing for title */
  }

  span {
    font-size: 16px;
    /* Font size for other properties */
    margin-right: 5px;
    /* Spacing for other properties */
  }

  @include mobile {

    .investor,
    .solution,
    .project {
      display: none;
    }
  }
}

/* Style for separator */
.reference-item span:not(:last-child)::after {
  @include desktop {
    content: ' - ';
  }
}
</style>
