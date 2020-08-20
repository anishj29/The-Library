<template>
  <div class="contact">    
        <v-card flat>
            <v-snackbar>
                <span>Message Sent!</span>
                <v-icon dark>mdi-checkbox-marked-circle</v-icon>
            </v-snackbar>
            <v-form ref="form" @submit.prevent="submit">
            <v-container fluid>
                <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                    v-model="form.last"                    
                    :rules="rules.name"
                    color="blue darken-2"
                    label="First name"
                    required
                    ></v-text-field>
                </v-col>
                 <v-col cols="12" sm="6">
                    <v-text-field
                    v-model="form.last"                    
                    :rules="rules.name"
                    color="blue darken-2"
                    label="Last name"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                     <v-text-field 
                    v-model="form.email"
                    color="blue darken-2"
                    label="Email"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-textarea
                    v-model="form.message"
                    color="blue darken-2"
                    >
                    <template v-slot:label>
                        <div>
                            Message
                        </div>
                    </template>
                    </v-textarea>
                </v-col>
                </v-row>
            </v-container>
            <v-card-actions>
                <v-btn
                
                color="primary"
                type="submit"
                >Register</v-btn>
            </v-card-actions>
            </v-form>
        </v-card>
  </div>    
</template>

<script>
export default {
    data () {
      const defaultForm = Object.freeze({
        first: '',
        last: '',
        message: '',
        email: '',
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
    
        },
        snackbar: false,
        defaultForm,
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.first &&
          this.form.last &&
          this.form.message &&
          this.form.email
        )
      },
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      },
    },
}
</script>