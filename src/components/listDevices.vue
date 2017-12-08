<template>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-list two-line subheader>
                            <v-subheader inset>Registered Devices</v-subheader>
                            <v-list-tile avatar v-for="device in devices" v-bind:key="device.title" @click="">
                                <v-list-tile-avatar>
                                    <v-icon>{{ device.icon }}</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ device.type }}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{ device.mac }}</v-list-tile-sub-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <v-btn icon ripple>
                                        <v-icon color="grey lighten-1">cached</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                                <v-list-tile-action>
                                    <v-btn icon ripple>
                                        <v-icon color="grey lighten-1">clear</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-flex>
    </v-layout>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            devices: [
                {   icon: 'laptop',
                    type: 'Laptop',
                    mac: '00-14-22-01-23-45'
                }, 
                {
                    icon: 'phone_iphone',
                    type: 'iphone',
                    mac: '00-55-22-01-23-45'
                },
                {
                    icon: 'desktop_windows',
                    type: 'Desktop',
                    mac: '00-14-22-01-88-99'
                },
                {
                    icon: 'tablet',
                    type: 'Tablet',
                    mac: '00-55-22-11-23-55'
                },
            ],
            errors: []
        }
    }, 
    methods: {

    },
    /**
    created() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            this.devices = response.data.slice(0,3);
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
    */
}
</script>
<style scoped>

</style>