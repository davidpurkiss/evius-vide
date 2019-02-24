<template>
  <v-layout
    row
    wrap
    align-center
  >
    <v-flex xs10>
      <v-select
        :items="workspaces"
        label="Current Workspace"
        item-text="title"
        item-value="id"
        :value="selectedWorkspace"
      ></v-select>
    </v-flex>
    <v-flex
      xs2
      text-xs-right
    >
      <v-btn
        flat
        icon
        class="ma-0"
      >
        <v-icon small>fa-edit</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs8>
      <div class="title">Repositories</div>
    </v-flex>
    <v-flex
      xs4
      text-xs-right
    >
      <v-btn
        flat
        icon
        class="ma-0"
      >
        <v-icon small>fa-edit</v-icon>
      </v-btn>
      <v-btn
        flat
        icon
        class="ma-0"
      >
        <v-icon small>fa-plus</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs12>
      <v-list>
        <v-list-tile
          v-for="item in repositories"
          :key="item.title"
          @click=""
        >

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
            <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon
              small
              color="secondary"
            >fas fa-star</v-icon>
          </v-list-tile-action>

        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class WorkspaceDrawer extends Vue {
  selectedWorkspace = 'default';

  workspaces = [
    {
      id: 'default',
      title: 'Default',
      description: 'Your default workspace'
    }
  ];

  repositories = [
    {
      title: 'Evius',
      description: 'The Evius core repository',
      favourite: true
    },
    {
      title: 'Evius VIDE',
      description: 'The Evius VIDE repository',
      favourite: true
    },
    {
      title: 'Evius Business',
      description: 'The Evius Start-up/Business repository',
      favourite: true
    }
  ];
}
</script>

