<template>
  <v-layout
    row
    wrap
  >
    <v-flex xs12>
      <v-layout
        row
        align-center
        justify-start
      >
        <v-flex
          xs1
          text-xs-center
        >
          <div class="text-xs-center">
            <v-icon large>fa-{{ icon }}</v-icon>
          </div>
        </v-flex>
        <v-flex xs11>
          <div class="display-2 font-weight-lighten primary--text">
            {{ title }}
          </div>
          <div class="subheading">
            {{ subTitle }}
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <div class="mt-2">
        <v-divider></v-divider>
      </div>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  props: {
    title: String,
    subTitle: String,
    icon: String
  }
})
export default class ViewHeader extends Vue {}
</script>
