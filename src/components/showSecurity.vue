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
            <v-card color="blue-grey darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs9>
                      <div class="headline">Two Factor Authentication</div>
                  </v-flex>
                  <v-flex xs3>
                    <v-card-actions>
                      <v-btn v-if="two_factor.enabled==true" color="warning" dark>Disable</v-btn>
                      <v-btn v-else color="success" dark>Enable</v-btn>
                    </v-card-actions>
                  </v-flex>
              </v-layout>
              </v-container>
              <v-list v-if="two_factor.enabled==true">
            <v-list-tile @click="">
              <v-list-tile-content>
                <v-list-tile-title>SMS: {{two_factor.sms.phone}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-content>
                <v-list-tile-title v-if="two_factor.authenticator.enabled==true">  Google Authenticator: enabled</v-list-tile-title>
                <v-list-tile-title v-else>  Google Authenticator:disabled</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-content>
                <v-list-tile-title v-if="two_factor.security_key.enabled==true">  Security Key: enabled</v-list-tile-title>
                <v-list-tile-title v-else> Security Key: disabled</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs12>
                    <div>
                      <div class="headline">Active Sessions</div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-list two-line v-for="session in sessions">
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">phone_iphone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{session.ip}}</v-list-tile-title>
                <v-list-tile-sub-title>{{session.browser}} on {{session.os}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>Signed in {{session.signed_in}}</v-list-tile-sub-title>
                <v-list-tile-sub-title v-if="session.current==false">Last accessed {{session.last_accessed}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action v-if="session.current==false">
                <v-btn dark color="red">Revoke</v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs12>
                    <div>
                      <div class="headline">Registered Devices</div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-list v-for="device in devices">
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">phone_iphone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{device.name}}</v-list-tile-title>
                <v-list-tile-sub-title>Mac: {{device.mac}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs12>
                    <div>
                      <div class="headline">Security Events</div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-list two-line v-for="event in events">
            <v-list-tile @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{event.type}}</v-list-tile-title>
                <v-list-tile-sub-title>IP: {{event.ip}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>Timestamp: {{event.timestamp}}</v-list-tile-sub-title>
              </v-list-tile-content>
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
  data: () => ({
      devices: [
                {   id: 1,
                    type: 'laptop',
                    name: 'Macbook pro',
                    mac: '00-14-22-01-23-45'
                }, 
                {
                    id: 2,
                    type: 'iphone',
                    name: 'iphone 8',
                    mac: '00-55-22-01-23-45'
                },
                {
                    id: 3,
                    type: 'desktop',
                    name: 'Work desktop',
                    mac: '00-14-22-01-88-99'
                },
                {
                    id: 4,
                    type: 'tablet',
                    name: 'my ipad',
                    mac: '00-55-22-11-23-55'
                },
            ],
      events: [
                {   type: 'user.login',
                    ip: '90.23.111.199',
                    timestamp: '2017-12-04 23:29:22 -0500'
                }, 
                {   type: 'user.login',
                    ip: '90.23.111.199',
                    timestamp: '2017-12-04 23:29:22 -0500'
                }, 
                {   type: 'two_factor_authentication.disabled',
                    ip: '190.23.111.10',
                    timestamp: '2017-12-05 23:29:22 -0500'
                }, 
                {   type: 'two_factor_authentication.requested',
                    ip: '190.23.111.10',
                    timestamp: '2017-12-06 11:11:11 -0500'
                },
                {   type: 'sms.registered',
                    ip: '190.23.111.10',
                    timestamp: '2017-12-06 11:12:22 -0500'
                },
                {   type: 'two_factor_authentication.enabled',
                    ip: '190.23.111.10',
                    timestamp: '2017-12-06 11:12:52 -0500'
                },
            ],
      sessions: [
                {   ip: '90.23.111.199',
                    os: 'Windows 7',
                    browser: 'Chrome',
                    signed_in: '2017-12-04',
                    last_accessed: '',
                    current: true
                }, 
                {   ip: '190.23.111.199',
                    os: 'IOS 11.1.2',
                    browser: 'Safari',
                    signed_in: '2017-12-03',
                    last_accessed: '2017-12-03',
                    current: false
                }
            ],
        two_factor: { 
          enabled: true,
          sms: {
            enabled: true,
            phone: '211-000-9999'
          },
          authenticator: {
            enabled: false
          },
          security_key: {
            enabled: false
          }
        },
        resetDevices: [],
        deleteDevices: []
    })
}
</script>
