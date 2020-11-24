<template>
    <v-col class="vue-template cyan accent-2" style="height: 100%">
        <form @submit.prevent="userLogin">
            <v-container>
                <h3 class="mt-5" style="text-align:center;">Sign In</h3>
                <v-text-field
                    v-model="user.email"
                    :error-messages="emailErrors"
                    label="Email"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                    v-model="user.password"
                    :error-messages="passwordErrors"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                    @click:append="show1 = !show1"
                ></v-text-field>
                <div class="d-flex">
                    <v-btn class="mr-md-3" rounded type="submit" dark color="blue-grey darken-4">Sign In</v-btn>
                    <hello></hello>
                </div>
            </v-container>
            <v-container> 
                <p class="forgot-password mt-2 mb-5">
                    <router-link to="/forgot-password">Forgot password?</router-link>
                </p>
            </v-container>
        </form>
    </v-col>
</template>


<script>
import firebase from "firebase";
import hello from "../components/Hello.vue";
export default {
    components: {
        hello,
    },
    data() {
        return {
            show1: false,
                show2: true,
                show3: false,
                show4: false,
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                    emailMatch: () => ('The email and password you entered don\'t match'),
            },
            user: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        userLogin() {
                firebase
                .auth()
                .signInWithEmailAndPassword(this.user.email, this.user.password)
                .then(() => {
                    this.$router.push('/library')
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    }
};
</script>