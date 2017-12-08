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
        <v-layout row wrap>
          <v-flex xs12>
    <v-card flat>
      <v-card-text>
        <v-container fluid>
          <v-layout row>
              <v-card-title primary-title >
                        <div class="headline">Change Password</div>
                      </v-card-title>
              </v-layout>
              <v-layout>
              <v-text-field
                label="Old Password"
                name="oldpwd"
                type="password"
                class="mx-3"
              ></v-text-field>
          </v-layout>
          <v-layout row>
              <v-text-field
                label="New Password"
                name="newPwd1"
                type="password"
                 class="mx-3"
              ></v-text-field>
          </v-layout>
          <v-layout row>
              <v-text-field
                label="Confirm Password"
                name="newPwd2"
                type="password"
                 class="mx-3"
              ></v-text-field>
          </v-layout>
          <v-layout row>
              <v-flex xs1 offset-xs7>
              <v-btn>Update Password</v-btn>
            </v-flex>
          </v-layout>
          <v-layout row  class="mt-5">
              <v-card-title primary-title >
                        <div class="headline">Change Username</div>
                      </v-card-title>
          </v-layout>
          <v-layout row>
              <v-text-field
                label="New Username"
                name="newUsername"
                 class="mx-3"
              ></v-text-field>
          </v-layout>
      <v-layout row>
          <v-layout row>
              <v-flex xs1 offset-xs7>
              <v-btn>Change Username</v-btn>
            </v-flex>
          </v-layout>
      </v-layout>
        </v-container>
      </v-card-text>
      
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