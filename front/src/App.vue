<template>
  <v-app dark>
    <v-toolbar
      app
      fixed
      clipped-left
    >
      <v-toolbar-side-icon @click.stop="mainDrawerMini = !mainDrawerMini"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="primary--text">Evius</span>
        <span class="font-weight-light">VIDE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>
    <v-navigation-drawer
      v-model="mainDrawer"
      :mini-variant.sync="mainDrawerMini"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile
          v-for="(item, index) of menuItems"
          :key="index"
        >
          <v-list-tile-action>
            <v-icon color="secondary">fa-{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer
      app
      fixed
    >
      <span>&copy; {{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  mainDrawer = true;
  mainDrawerMini = false;

  menuItems = [
    { icon: 'project-diagram', title: 'Repositories' },
    {
      icon: 'cog',
      title: 'Settings'
    }
  ];

  get year() {
    return new Date().getUTCFullYear();
  }
}
</script>
