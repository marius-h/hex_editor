<template>
    <v-layout column>
        <div class="btn btn-primary jbtn-file secondary">
            Datei auswählen
            <input
                type="file"
                @change="fileSelected"
            />
        </div>
        <p>
            <span v-text="hexText"></span>
        </p>
        <!--<v-btn @click="dialog = true">{{ clicked }}</v-btn>-->
        <v-dialog
            v-model="dialog"
            max-width="500"
        >
            <v-card>
                <v-card-title>Bearbeiten</v-card-title>
                <v-card-text>
                    In was wollen Sie "{{ clicked }}" ändern?
                    <v-text-field
                        v-model="textfield"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        flat
                        @click="dialog = false"
                    >schließen
                    </v-btn>
                    <v-btn
                        flat
                        @click="vertifydialog = true"
                    >übernehmen
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="vertifydialog"
            max-width="500"
        >
            <v-card>
                <v-card-title>Es gibt kein Strg + Z ;-)</v-card-title>
                <v-card-text>
                    Wollen Sie wirklich "{{ clicked }}" in "{{ textfield }}" ändern?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        flat
                        @click="dialog = false"
                    >abbrechen
                    </v-btn>
                    <v-btn
                        flat
                        @click="commit()"
                    >JA!
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar
            v-model="error"
            color="error"
        >
            {{ Errormessage }}
            <v-btn
                dark
                flat
                @click="error = false"
            >
                schliessen
            </v-btn>
        </v-snackbar>
    </v-layout>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      vertifydialog: false,
      clicked: 'Käsebrot',
      textfield: '',
      error: true,
      Errormessage: 'Das Textfenster darf nicht leer sein!',
      hexText: 'Test'
    }),
    methods: {
      commit () {
        if (this.textfield === '') {
          this.error = true
          this.vertifydialog = false
        } else {
          this.clicked = this.textfield
          this.textfield = ''
          this.dialog = false
          this.vertifydialog = false
        }
      },
      fileSelected (e) {
        let file = e.target.files[0]
        if (!file) {
          return
        }

        const fs = require('fs')

        /// TODO mit "await" content setzen
        let content = fs.readFile(file.path, function (err, data) {
          if (err) throw err
          const hex = require('hexer')
          content = hex(data)
          console.log(content)
        })

        this.hexText = content
        // let buffer = file.openFile()
        // buffer
      },
      openFile () {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
          // good
          console.log('Funktioniert')
          let fs = require('fs')

          fs.readFile()
        } else {
          alert('Die File API wird in dieser Umgebung nicht unterstützt')
        }
      }
    }
  }
</script>

<style
    lang="stylus"
    scoped
>
    .jbtn-file
        cursor pointer
        position relative
        overflow hidden

    .jbtn-file input[type=file]
        position absolute
        top 0
        right 0
        min-width 100%
        min-height 100%
        text-align right
        //filter alpha(opacity = 0)
        opacity 0
        outline none
        cursor inherit
        display block

</style>
