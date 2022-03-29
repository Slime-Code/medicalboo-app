<template>
    <q-page :loading='loading' class="constrain">
      <div class="column">
        <div class="col">
          <br>
          <q-input
            outlined
            rounded
            bottom-slots
            v-model="text"
            label="Pesquise o seu tópico favorito"
            dense
            class="constrain-2"
            >

            <template v-slot:append>
              <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
              <q-icon name="search" />
            </template>

          </q-input>
        </div>
        <div class="col constrain">
          <br>
          <strong style="color: blue;">Abordagem Geral</strong><hr>
          <q-spinner
            class="flex flex-center"
            v-if="loading"
            size="xl"
            color="primary"
          />
          <ApproachButtom
           v-for="(approach, index) in approachs.geral" :title="approach" :key="index"/>
          <br>
          <strong style="color: blue;">Abordagem Terapeutica</strong><hr>
            <q-spinner
              class="flex flex-center"
              v-if="loading1"
              size="xl"
              color="primary"
            />
          <ApproachButtom
           v-for="(approach, index) in approachs.terapeutica" :title="approach" :key="index"/>
        </div>
      </div>
    </q-page>
</template>

<script>
import {
  showErrorNotification
} from 'src/functions/functionShowNotifications';
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ApproachButtom from '../../components/ApproachButtom.vue';
import useApi from '../../composebles/useApi';

export default defineComponent({
  name: 'ProfilePage',
  components: {
    ApproachButtom,
  },
  setup() {
    const route = useRoute();

    const loading = ref(true);

    const loading1 = ref(true);

    const { list } = useApi();

    const approachs = { geral: [], terapeutica: [] };

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        const aux = await list('approach');
        aux.forEach((element) => {
          if (element.type_approach_id === 1 && element.topic_id == route.params.id) {
            approachs.geral.push(element);
          } else if (element.type_approach_id === 2 && element.topic_id == route.params.id) {
            approachs.terapeutica.push(element);
          }
        });

        loading.value = false;
        loading1.value = false;
      } catch (error) {
        showErrorNotification(error);
      }
    };
    onMounted(() => {
      listTopicsAproachs();
    });
    return {
      loading,
      loading1,
      text: ref(''),
      approachs,
      slide: ref('style'),
      rota: 'approach',
    };
  },
});
</script>

<style lang="sass" scoped>
  .explore
    width: 90vw
</style>
