<template>
  <div>
    <HeroBanner/>
  </div>
</template>

<script>
import HeroBanner from './../components/Hero'
import EventContainer from '@/components/events/EventContainer'
export default {
  components: {
    EventContainer,
    HeroBanner
  }
}
</script>
