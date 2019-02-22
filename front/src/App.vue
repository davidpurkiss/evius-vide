<template>
  <v-app dark>
    <v-toolbar
      app
      fixed
      clipped-left
    >
      <v-toolbar-side-icon @click.stop="mainDrawerMini = !mainDrawerMini"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Evius</span>
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
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>fa-dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>fa-cog</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <HelloWorld />
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
  get year() {
    return new Date().getUTCFullYear();
  }
}
</script>
