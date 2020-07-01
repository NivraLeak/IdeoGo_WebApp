<template>
    <div class="container">

        <div class="row mt-2">
            <div class="col">
                <h4 class="text-center ">Tus Proyectos</h4>

                <div class="row " >
                    <div>
                        <v-sheet
                                tile
                                height="54"
                                color="grey lighten-3"
                                class="d-flex"
                        >
                            <v-btn
                                    icon
                                    class="ma-2"
                                    @click="$refs.calendar.prev()"
                            >
                                <v-icon>mdi-chevron-left</v-icon>
                            </v-btn>
                            <v-select
                                    v-model="type"
                                    :items="types"
                                    dense
                                    outlined
                                    hide-details
                                    class="ma-2"
                                    label="type"
                            ></v-select>
                            <v-select
                                    v-model="mode"
                                    :items="modes"
                                    dense
                                    outlined
                                    hide-details
                                    label="event-overlap-mode"
                                    class="ma-2"
                            ></v-select>
                            <v-select
                                    v-model="weekday"
                                    :items="weekdays"
                                    dense
                                    outlined
                                    hide-details
                                    label="weekdays"
                                    class="ma-2"
                            ></v-select>
                            <v-spacer></v-spacer>
                            <v-btn
                                    icon
                                    class="ma-2"
                                    @click="$refs.calendar.next()"
                            >
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                        </v-sheet>
                        <v-sheet height="600">
                            <v-calendar
                                    ref="calendar"
                                    v-model="value"
                                    :weekdays="weekday"
                                    :type="type"
                                    :events="events"
                                    :event-overlap-mode="mode"
                                    :event-overlap-threshold="30"
                                    :event-color="getEventColor"
                                    @change="getEvents"
                            ></v-calendar>
                        </v-sheet>
                    </div>

                </div>

                <div class="row">
                    <div class="col pa-md-4 mx-lg-auto">
                        <v-card class="d-inline-block mx-auto">
                            <v-container>

                                <v-row justify="space-between">

                                    <v-col cols="auto">
                                        <h5 class="text-center ">Ambiente</h5>
                                        <v-img
                                                height="200"
                                                width="200"
                                                src="https://cde.laprensa.e3.pe/ima/0/0/2/3/5/235222.jpg"
                                        ></v-img>
                                    </v-col>

                                    <v-col
                                            cols="auto"
                                            class="text-center pl-0"
                                    >
                                        <v-row
                                                class="flex-column ma-5 fill-height"
                                                justify="center"
                                        >
                                            <h5 class="text-center ">Contaminacion</h5>
                                            <v-col >
                                                <v-btn style="min-width:200px">
                                                    Glaciares
                                                </v-btn>
                                            </v-col>

                                            <v-col >
                                                <v-btn style="min-width:200px">
                                                    Playas
                                                </v-btn>
                                            </v-col>

                                            <v-col >
                                                <v-btn style="min-width:200px">
                                                    Bosques
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </div>

                    <div class="col pa-md-4 mx-lg-auto">
                        <v-card
                                class="mx-auto"
                                max-width="500"
                        >
                            <div class="text-center pt-3">
                                <h5>Your tasks</h5>
                            </div>
                            <v-list shaped>
                                <v-list-item-group
                                        v-model="model"
                                        multiple
                                >
                                    <template v-for="(item, i) in items">
                                        <v-divider
                                                v-if="!item"
                                                :key="`divider-${i}`"
                                        ></v-divider>

                                        <v-list-item
                                                v-else
                                                :key="`item-${i}`"
                                                :value="item"
                                                active-class="deep-purple--text text--accent-4"
                                        >
                                            <template v-slot:default="{ active, toggle }">
                                                <v-list-item-content>
                                                    <v-list-item-title v-text="item"></v-list-item-title>
                                                </v-list-item-content>

                                                <v-list-item-action>
                                                    <v-checkbox
                                                            :input-value="active"
                                                            :true-value="item"
                                                            color="deep-purple accent-4"
                                                            @click="toggle"
                                                    ></v-checkbox>
                                                </v-list-item-action>
                                            </template>
                                        </v-list-item>
                                    </template>
                                </v-list-item-group>
                            </v-list>
                        </v-card>
                    </div>
                </div>


            </div>

        </div>

    </div>

</template>
<script>
    export default {
        name: "EditProject",
        data: () => (
            {
                items: [
                    'Task 1',
                    'Task 2',
                    'Task 3',
                    'Task 4',
                    'Task 5',
                ],
                model: ['Carrots'],
                type: 'month',
                types: ['month', 'week', 'day', '4day'],
                mode: 'stack',
                modes: ['stack', 'column'],
                weekday: [0, 1, 2, 3, 4, 5, 6],
                weekdays: [
                    { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
                    { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
                    { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
                    { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
                ],
                value: '',
                events: [],
                colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
                names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
            }
        ),
        methods: {
            getEvents ({ start, end }) {
                const events = []

                const min = new Date(`${start.date}T00:00:00`)
                const max = new Date(`${end.date}T23:59:59`)
                const days = (max.getTime() - min.getTime()) / 86400000
                const eventCount = this.rnd(days, days + 20)

                for (let i = 0; i < eventCount; i++) {
                    const allDay = this.rnd(0, 3) === 0
                    const firstTimestamp = this.rnd(min.getTime(), max.getTime())
                    const first = new Date(firstTimestamp - (firstTimestamp % 900000))
                    const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
                    const second = new Date(first.getTime() + secondTimestamp)

                    events.push({
                        name: this.names[this.rnd(0, this.names.length - 1)],
                        start: first,
                        end: second,
                        color: this.colors[this.rnd(0, this.colors.length - 1)],
                        timed: !allDay,
                    })
                }

                this.events = events
            },
            getEventColor (event) {
                return event.color
            },
            rnd (a, b) {
                return Math.floor((b - a + 1) * Math.random()) + a
            },
        },
    }

</script>
