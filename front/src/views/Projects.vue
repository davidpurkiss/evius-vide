<template>
  <GeneralView>
    <ProjectList />
  </GeneralView>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectList from '@/components/project/ProjectList.vue';
import GeneralView from '@/components/layout/GeneralView.vue';

@Component({
  components: {
    GeneralView,
    ProjectList
  }
})
export default class Projects extends Vue {}
</script>
