<template>
  <div>
    <div id="tickets">Cargando...</div>
  </div>
</template>

<script>
  export default {
    props:{
      event:{
        type: String,
        required: true,
      }
    },
    head() {
      return {
        script: [
          {
            src: 'https://js.tito.io/v1',
            async: true
          }
        ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://css.tito.io/v1.1'
          }
        ]
      }
    },
    mounted() {
     this.$nextTick( () => {
       if(typeof TitoWidget == 'object'){
        new TitoWidget.Widget({
          event_path: this.event,
          container_id: "tickets",
        }).build();
       }
     })
    }
  }
</script>