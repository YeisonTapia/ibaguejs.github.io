<template>
  <div>
    <v-tabs> 
      <v-tab 
        ripple
        v-for="(tab, index) in tabs"
        :key="index"
        :href="`#tab-${index}`">
        {{tab.name}}
      </v-tab>
      <v-tab-item
        v-for="(tab, index) in tabs"
        :key="index"
        :value="'tab-' + index">
        <component 
        :events="tab.componentName == 'EventListUpcoming' ? eventtUpcoming : eventPrevious"
        :is="tab.componentName" />
      </v-tab-item>
    </v-tabs>
    
  </div>
</template>

<script>
export default {
  props:{
    event:{
      type: Array,
      default: () => []
    }
  },
  components:{
    EventListUpcoming: () => import('@/components/events/EventListUpcoming'),
    EventListPrevious: () => import('@/components/events/EventListPrevious')
  },
  data (){
    return {
    tabs: [
        { componentName: 'EventListUpcoming', name: 'Próximos' },
        { componentName: 'EventListPrevious', name: 'Pasados' }
      ],
    }
  },
  computed:{
    eventtUpcoming(){
      return []
    },
    eventPrevious(){
      return []
    }
  }
}
</script>