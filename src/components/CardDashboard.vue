<template>
   <div>
      <q-card :class="`bg-${info.color}`" class="text-white">
         <q-card-section>
           <q-item>
             <q-item-section class="text-body1">
               {{info.title}}
             </q-item-section>
           
           </q-item>
         </q-card-section>
         <q-card-section>
           <q-item>
             <q-item-section>
               <q-icon size="md" :name="info.icon"/>
             </q-item-section>
             <q-item-section class="text-h4 text-white" side>
               {{ info.qtd }}
             </q-item-section>
           </q-item>
         </q-card-section>
      </q-card>
   </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardDashboard',
  props: {
    info: {
      type: Object
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
