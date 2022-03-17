<template>
  <div class="flex q-pt-xl flex-center">
  <div class="column" style="min-width: 90%">
    <div class="col q-ma-xs">
      <div>
        <h5 class="col-12 title" style="margin: 20px 0;">Abordagem</h5>
      </div>
    </div>
    <div class="col q-mt-md">
      <q-list bordered class="rounded-borders"
        style="min-width: 160px; width:100%;">
          <q-item-label header><strong>Lista de abordagens</strong></q-item-label>
            <q-separator/>
            <div
              v-for="(approach,index) in approaches"
              :key="index"
            >
              <approach-list-item
                :key="approach.id"
                :approach="approach"
              />
              <q-separator/>
            </div>
        </q-list>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[48, 48]">
      <q-btn
        fab
        icon="add"
        round
        color="primary"
        size="lg"
        @click="showAddApproach = true"
      />
    </q-page-sticky>

    <q-dialog v-model="showAddApproach" persistent>
      <add-approach />
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import ApproachListItem from '../../../components/approach/ApproachListItem.vue';
import AddApproach from '../../../components/approach/AddApproach.vue';

export default defineComponent({
  name: 'ApproachesListPage',
  components: {
    ApproachListItem,
    AddApproach,
  },
  data() {
    return {
      showAddApproach: false,
      loading: false,
    };
  },
  methods: {
    ...mapActions('approach', ['getApproaches']),
  },
  mounted() {
    this.getApproaches();
  },
  computed: {
    ...mapGetters('approach', ['approaches']),
  },
});
</script>

<style lang="sass" scoped>
  .q-header
    background-color: #0053ab
  .explore
    width: 80vw
</style>
