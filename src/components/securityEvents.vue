<template>
    <div>
        <v-app id="show-events">
            <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
                                    <v-subheader inset>Security Events</v-subheader>
            <v-expansion-panel expand>
                <v-expansion-panel-content v-for="(event,i) in events" :key="i" v-bind:value="event === 2">
                    <div slot="header">{{event.name}}</div>
                    <v-card>
                        <v-card-text class="grey lighten-3">{{event.body}}</v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
                    </v-card>
      </v-flex>
    </v-layout>
        </v-app>
    </div>

</template>
<script>
export default {

    data(){
        return{
            events: []
        }
    }, 
    methods: {

    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/comments').then(function(data){
            console.log(data);
            this.events = data.body.slice(0,5);
        })
    }
}
</script>