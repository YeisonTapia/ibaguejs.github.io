<template>
  <div>
    <HeroBanner />
    <EventContainer />
    <About />
  </div>
</template>

<script>
import HeroBanner from './../components/Hero'
import EventContainer from '@/components/events/EventContainer'
import About from '@/components/About'

export default {
  components: {
    EventContainer,
    HeroBanner,
    About
  }
}
</script>
