<template>
  <general-view>
    <view-header
      title="Evius VIDE"
      subTitle="Visual IDE for next level software development"
    ></view-header>
    <v-layout
      row
      wrap
      justify-space-around
      class="mt-5"
    >
      <v-flex
        xs12
        md4
      >
        <div class="headline mb-3">Start</div>

        <div><a class="subheading">New File</a></div>
        <div><a class="subheading">New Package</a></div>
        <div><a class="subheading">Clone Repository</a></div>

        <div class="title mt-4 mb-3">Repositories</div>
        <div><a class="subheading">Add Repository</a></div>
        <div><a class="subheading">Clone Repository</a></div>
        <div><a class="subheading">Manage Repositories</a></div>

        <div class="subheading my-3">Recent Repositories</div>
        <div><a class="body-2">Evius VIDE <span class="grey--text"> - evius-vide</span></a></div>
        <div><a class="body-2">Evius <span class="grey--text"> - evius-core</span></a></div>
        <div><a class="body-2">Evius ML <span class="grey--text"> - evius-ml</span></a></div>
        <div><a class="body-2">Evius STARTUP <span class="grey--text"> - evius-startup</span></a></div>
        <div><a class="body-2">Go Language Generator <span class="grey--text"> - gogen</span></a></div>
        <div><a class="body-2">more...</a></div>

      </v-flex>
      <v-flex
        xs12
        md4
      >
        <div class="title mb-3">Workspaces (Current: Default)</div>
        <div><a class="subheading">Add Workspace</a></div>
        <div><a class="subheading">Change Workspace</a></div>
        <div><a class="subheading">Manage Workspaces</a></div>
        <div class="headline mt-4 mb-3">Learn</div>
        <div class="headline mt-4 mb-3">Help</div>
      </v-flex>
    </v-layout>
  </general-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GeneralView from '@/components/layout/GeneralView.vue';
import ViewHeader from '@/components/layout/ViewHeader.vue';

@Component({
  components: {
    GeneralView,
    ViewHeader
  }
})
export default class Start extends Vue {}
</script>
