import showSecurity from './components/showSecurity.vue'
import changePassword from './components/changePassword.vue'
import twoFactor from './components/twoFactor.vue'
import securityEvents from './components/securityEvents.vue'
import devices from './components/listDevices.vue'
import activeSessions from './components/activeSessions.vue'
import logout from './components/login.vue'

export default [
    {path:'/', name: 'Security Settings', component: showSecurity, props: {icon: 'settings'}},
    {path:'/chpwd', name: 'Change Password', component: changePassword, props: {icon: 'keyboard'}},
    {path:'/twofactor', name: 'Two Factor', component: twoFactor, props: {icon:'security'}},
    {path:'/login', name: 'Logout', component: logout, props: {icon:'exit_to_app'}}
]