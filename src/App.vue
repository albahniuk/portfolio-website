<template>
  <v-app>
    <v-card class="overflow-hidden">
      <Header />
      <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="100vh">
        <v-container style="height: auto; margin-top: 128px;">
          <v-content>
            <HelloWorld/>
          </v-content>
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
