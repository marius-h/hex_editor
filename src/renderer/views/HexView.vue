<template>
    <v-layout>
        <v-btn @click="dialog = true">Das wird n Super Editor</v-btn>
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
                    >schließen</v-btn>
                    <v-btn
                            flat
                            @click="commit()"
                    >übernehmen</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
                    >schließen</v-btn>
                    <v-btn
                            flat
                            @click="commit()"
                    >übernehmen</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
    export default {
      data () {
        return {
          dialog: false,
          vertifydialog: false,
          clicked: 'Käsebrot',
          textfield: ''
        }
      },
      methods: {
        commit () {
          this.dialog = false
          this.clicked = this.textfield
        }
      }
    }
    var hex = require('hexer')
    var hexer = hex.Transform()
    hexer.pipe(process.stdout)

    process.stdin.on('data', function onData (chunk) {
      var i = findBoundary(chunk)
      while (i > 0) {
        hexer.write(chunk.slice(0, i))
        hexer.reset()
        chunk = chunk.slice(i)
        i = findBoundary(chunk)
      }
      if (chunk.length) {
        hexer.write(chunk)
      }
    })
</script>
