<template>
  <div class="flex q-pt-xl flex-center">
  <div class="column" style="min-width: 90%">
    <div class="col q-ma-xs">
      <div>
        <h5 class="col-12 title" style="margin: 20px 0;">Abordagem</h5>
        <div style="width: 100px;" class="row q-gutter-sm">
          <q-btn
            icon="add"
            color="primary"
            class="col"
            @click="
            newDialog()
            " 
          >
          </q-btn>
          <q-btn
          icon="update"
          color="primary"
          class="col"

          >
          </q-btn>
        </div>
      </div>
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
import {  defineComponent, reactive, ref } from "vue"
export default defineComponent({
  setup(){

    const showAddApproach = ref(false)
    const formData = reactive({
      title: "",
      definition: "",
      diagnosis: "",
      complentary: "",
      topic_id: null,
      type_approach: null
    })

    const newDialog = (data)=> {
      if(data) {
        Object.keys(data).forEach(key => {
          formData[key]= data[key]
        })

      } else {
        formData.title= ""
        formData.definition= ""
        formData.diagnosis= ""
        formData.complentary= ""
        formData.topic_id= null
        formData.type_approach= null
      }
      showAddApproach.value=true
    }
    return {
      newDialog,
      showAddApproach
    }
  }
})
</script>

<style>

</style>

<!--
<template>
  <div class="flex q-pt-xl flex-center">
  <div class="column" style="min-width: 90%">
    <div class="col q-ma-xs">
      <div>
        <h5 class="col-12 title" style="margin: 20px 0;">Abordagem</h5>
        <div style="width: 100px;" class="row q-gutter-sm">
          <q-btn
            icon="add"
            color="primary"
            class="col"
            @click="
            newDialog()
            " 
          >
          </q-btn>
          <q-btn
          icon="update"
          color="primary"
          class="col"

          >
          </q-btn>
        </div>
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
  setup(){
    const showAddApproach = ref(false)
    const loading = ref(false)
    const formData = reactive({
      title: "",
      definition: "",
      diagnosis: "",
      complentary: "",
      topic_id: null,
      type_approach: null
    })

    const newDialog = ()=> {
      if(data) {
        Object.keys(data).forEach(key => {
          formData[key]= data[key]
        })

      } else {
        formData.title= ""
      formData.definition= ""
      formData.diagnosis= ""
      formData.complentary= ""
      formData.topic_id= null
      formData.type_approach= null
      }
      showAddApproach.value=true
    }

    return {
      newDialog,
      showAddApproach,
      loading
    }
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
-->