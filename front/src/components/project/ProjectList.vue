<template>
  <div>
    <ViewHeader
      title="Repositories"
      subTitle="All your repositories are available here."
      icon="project-diagram"
    ></ViewHeader>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ViewHeader from '@/components/layout/ViewHeader.vue';
@Component({
  components: {
    ViewHeader
  }
})
export default class ProjectList extends Vue {}
</script>
