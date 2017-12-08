<template>
    <div>
        <v-app id="inspire">
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-list two-line subheader>
                            <v-subheader inset>Active Sessions</v-subheader>
                            <v-list-tile avatar v-for="session in sessions" v-bind:key="session.title" @click="">
                                <v-list-tile-avatar>
                                    <v-icon>phone_iphone</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ session.title }}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{ session.completed }}</v-list-tile-sub-title>
                                </v-list-tile-content>
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
        </v-app>
    </div>

</template>
<script>
export default {

    data(){
        return{
            sessions: []
        }
    }, 
    methods: {

    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/todos').then(function(data){
            console.log(data);
            this.sessions = data.body.slice(0,4);

        })
    }
}
</script>
<style scoped>
    #show-events{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-event{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>