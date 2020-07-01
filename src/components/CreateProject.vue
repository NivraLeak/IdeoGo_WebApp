<template>

    <v-card>
        <v-toolbar
                flat
                color="blue-grey"
                dark
                max-width="800"
        >
            <v-toolbar-title>Name your project</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
            <v-text-field filled label="Title" value="My new project"></v-text-field>

            <v-textarea
                    filled
                    label="Text"
                    value=""
            ></v-textarea>

            <v-divider class="my-2"></v-divider>

            <v-item-group multiple>
                <v-subheader>Tags</v-subheader>
                <v-item
                        v-for="n in 8"
                        :key="n"
                        v-slot:default="{ active, toggle }"
                >
                    <v-chip
                            active-class="purple--text"
                            :input-value="active"
                            @click="toggle"
                    >
                        Tag {{ n }}
                    </v-chip>
                </v-item>
            </v-item-group>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="success"
                    depressed
            >
                Post
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            //
        }),
    }
</script>

<style scoped>

</style>
