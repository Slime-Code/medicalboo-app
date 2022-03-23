<template>
   <q-page :loading='loading' class="flex flex-center">
      <div class="column explore q-row" style="margin: 0 auto; padding: 3px 10px ;
       border-left: 5px solid #013b68;">
          Sindrome inflamatória multissistémica associada ao Covid-19
        <q-icon name="favorite" style="color: #ccc; font-size: 1.2em; margin-top-left: 10px" />
      </div>

      <div class="column explore">
        <div class="col">
          <q-expansion-item
            dense
            dense-toggle
            expand-separator
            icon="settings"
            label="Definição"
          >
            <q-card>
              <q-card-section>
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            dense
            dense-toggle
            expand-separator
            icon="diagnostics"
            label="Diagnóstico"
          >
            <q-card>
              <q-card-section>
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            dense
            dense-toggle
            expand-separator
            icon="perm_identity"
            label="Exames Complementares"
          >
            <q-card>
              <q-card-section>
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </div>
    </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue';
// import ApproachButtom from '../../components/ApproachButtom.vue';

export default defineComponent({
  name: 'ProfilePage',
  setup() {
    return {
      loading: ref(true),
      topics: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?'],
      slide: ref('style'),
    };
  },
});
</script>

<style lang="sass" scoped>
  .explore
    width: 90vw
</style>
