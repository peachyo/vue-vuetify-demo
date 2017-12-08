<template>
<div>
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <v-list v-for="(route, i) in routes" dense>
        <router-link :to="route.path" tag="span" style="cursor: pointer">
          <v-list-tile>
            <v-list-tile-action v-if="route.props">
              <v-icon>{{ route.props.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ route.name }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          </router-link>
      </v-list>
    </v-navigation-drawer>
        <v-toolbar
      color="cyan"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Security Center</span>
      </v-toolbar-title>
      <v-text-field
        light
        solo
        prepend-icon="search"
        placeholder="Search"
        style="max-width: 500px; min-width: 128px"
      ></v-text-field>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    </div>
</template>
<script>
import routes from '../routes'
export default {
  data: () => ({
      drawer: null,
      routes: routes
  })
}
</script>
