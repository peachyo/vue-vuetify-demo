<template>
<v-app>
    <app-navdrawer></app-navdrawer>
    <v-content>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
            <transition mode="out-in">
    <v-layout row>
      <v-flex xs12>
        <v-card>
                    <v-layout row>
              <v-card-title primary-title >
                        <div class="headline">Two Factor Authentication</div>
                      </v-card-title>
          </v-layout>
          <v-list two-line subheader>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>SMS</v-list-tile-title>
                <v-list-tile-sub-title>Enrolled: 401-104-3333</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                 <v-btn>Disable</v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Google Authenticator</v-list-tile-title>
                <v-list-tile-sub-title>Disabled</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                 <v-btn>Enable</v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Security Key</v-list-tile-title>
                <v-list-tile-sub-title>Disabled</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                 <v-btn>Enable</v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
              </v-flex>
        </v-layout>
    </transition>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import navdrawer from './navdrawer.vue';

export default {
  
  components:{
    'app-navdrawer': navdrawer,
  },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    footer{
        background: #222;
        padding: 6pc;
    }
    p{
        color: lightgreen;
        text-align: center;
    }
</style>