<template>
    <v-container fluid>
        <v-row>
            <v-col
                    sm="6"
                    cols="12"
            >
                <v-text-field
                        v-model="label"
                        label="Name your project"
                ></v-text-field>

            </v-col>

            <v-col cols="12" sm="6">
                <v-text-field
                        v-model="rowHeight"
                        :disabled="!autoGrow"
                        class="mx-4"
                        label="Row height - px"
                        max="500"
                        min="1"
                        step="1"
                        style="width: 125px"
                        type="number"
                ></v-text-field>
                <v-text-field
                        v-model="rows"
                        class="mx-4"
                        label="Rows"
                        max="50"
                        min="1"
                        step="1"
                        style="width: 125px"
                        type="number"
                ></v-text-field>
            </v-col>

            <v-col cols="12"></v-col>

            <v-col cols="12" md="6">
                <v-title> Tags </v-title>
                <v-switch
                        v-model="Analytics"
                        class="ma-1"
                        label="Analytics"
                ></v-switch>
                <v-switch
                        v-model="Tracking"
                        class="ma-1"
                        label="Tracking"
                ></v-switch>

                <v-switch
                        v-model="Marketing"
                        class="ma-1"
                        label="Filled"
                ></v-switch>
                <v-switch
                        v-model="Optimize"
                        class="ma-1"
                        label="Optimize"
                ></v-switch>

                <v-switch
                        v-model="other"
                        class="ma-1"
                        label="other"
                ></v-switch>
            </v-col>

            <v-col
                    cols="12"
                    md="6"
            >
                <v-sheet
                        elevation="12"
                        class="pa-12"
                >
                    <v-textarea
                            v-model="model"
                            :auto-grow="autoGrow"
                            :clearable="clearable"
                            :counter="counter ? counter : false"
                            :filled="filled"
                            :flat="flat"
                            :hint="hint"
                            :label="label"
                            :loading="loading"
                            :no-resize="noResize"
                            :outlined="outlined"
                            :persistent-hint="persistentHint"
                            :placeholder="placeholder"
                            :rounded="rounded"
                            :row-height="rowHeight"
                            :rows="rows"
                            :shaped="shaped"
                            :single-line="singleLine"
                            :solo="solo"
                    ></v-textarea>
                    <div class="mt-12 text-center">
                        Value: {{ model }}
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            Analytics: false,
            Tracking: true,
            Marketing: false,
            Optimize: false,
            Liberty: false,
            Creative: false,
            hint: '',
            label: '',
            model: 'I\'m a textarea.',
            Art: false,
            outlined: false,
            placeholder: '',
            rowHeight: 24,
            rows: 1,
            other: false,
        }),
    }
</script>

<style scoped>

</style>
