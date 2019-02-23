<template>
  <v-app dark>
    <v-toolbar
      app
      fixed
      clipped-left
    >
      <v-toolbar-side-icon
        ref="hamburger"
        @click.stop="mainDrawerMini = !mainDrawerMini"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="primary--text">Evius</span>
        <span class="font-weight-light">VIDE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>fa-cog</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="mainDrawer"
      :mini-variant.sync="mainDrawerMini"
      width="380"
      clipped
      fixed
      app
    >
      <v-layout fill-height>
        <v-navigation-drawer
          :mini-variant="true"
          class="my-0"
        >
          <v-list dense>
            <v-list-tile
              v-for="(item, index) of menuItems"
              :key="index"
              @click.stop="currentDrawerComponent === item.component ? mainDrawerMini = !mainDrawerMini : currentDrawerComponent = item.component"
              :class="currentDrawerComponent === item.component ? 'primary--text' : ''"
            >
              <v-list-tile-action>
                <v-icon :color="currentDrawerComponent === item.component ? 'secondary' : 'primary'">{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

          </v-list>
        </v-navigation-drawer>

        <div
          v-show="!mainDrawerMini"
          class="ma-3"
        >
          <component :is="currentDrawerComponent"></component>
        </div>

      </v-layout>
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
import WorkspaceDrawer from '@/components/workspace/Drawer.vue';
import ExplorerDrawer from '@/components/explorer/Drawer.vue';
import GitDrawer from '@/components/git/Drawer.vue';

@Component({
  components: {
    WorkspaceDrawer,
    ExplorerDrawer,
    GitDrawer
  }
})
export default class App extends Vue {
  mainDrawer = true;
  mainDrawerMini = false;

  menuItems = [
    { icon: 'fa-sitemap', title: 'Workspace', component: 'workspace-drawer' },
    { icon: 'fa-file-alt', title: 'Explorer', component: 'explorer-drawer' },
    { icon: 'fa-search', title: 'Search', component: 'search-drawer' },
    {
      icon: 'fa-code-branch',
      title: 'Source Control',
      component: 'git-drawer'
    },
    {
      icon: 'fa-toolbox',
      title: 'Toolbox',
      component: 'toolbox-drawer'
    }
  ];

  currentDrawerComponent = this.menuItems[0].component;

  get year() {
    return new Date().getUTCFullYear();
  }
}
</script>
