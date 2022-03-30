<template>
  <a class="q-link cursor-pointer q-ma-xs">
    <q-banner rounded class="bg-white text-grey-6 q-approach">
      <div class="row">
        <div @click="go" class="col q-py-xs">
          {{ title.title }}
        </div>
        <div class="col-grow-1 q-pa-xs">
          <div class=" column">
              <q-rating
                @click="addFavorit"
                max="1"
                v-model="ratingModel"
                name="quality"
                size="2em"
                color="yellow"
                icon="star_border"
                icon-selected="star"
                no-dimming
              />
          </div>
        </div>
        <div class="col-grow-1">
          <div class="q-approach-bar"></div>
        </div>
      </div>
    </q-banner>
  </a>
</template>

<script>
import {
  showErrorNotification,
  showSuccessNotification,
} from 'src/functions/functionShowNotifications';
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useApi from '../composebles/useApi';
import useAuthUser from '../composebles/useAuthUser';

export default defineComponent({
  name: 'ApproachButtom',

  props: {
    title: {
      type: Object,
      required: 'Sem titulo',
    },

    icon: {
      type: String,
      default: 'img:img/feto.png',
    },

    color: {
      type: String,
      default: '',
    },

    accessCap: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const { user } = useAuthUser();

    const router = useRouter();

    const loading = ref(true);

    const { post, remove, getByField } = useApi();

    const formData = {
      user_id: '',
      approach_id: '',
    };

    const go = async (evt, index) => {
      router.push(`/approach-detail/${props.title.id}`);
    };

    // ---------- Inicializar O estado De Favoritos -------------
    const ratingModel = ref(0);
    const initFavorit = async () => {
      try {
        const idFavorit = await getByField('favorite_approach_user', 'approach_id', props.title.id);
        if (idFavorit.length > 0) {
          ratingModel.value = 1;
        } else { ratingModel.value = 0; }
        // alert(JSON.stringify(idFavorit));
      } catch (error) {
        showErrorNotification(`falha na Operação Pelo Seguinte Erro: ${JSON.stringify(error)}`);
      }
      /// loading.value = false;
    };
    // ---------- Fim Inicializar O estado De Favoritos -------------

    const addFavorit = async () => {
      try {
        if (ratingModel.value !== 1) {
          const idFavorit = await getByField('favorite_approach_user', 'approach_id', props.title.id);
          await remove('favorite_approach_user', idFavorit[0].id);
        } else {
          formData.user_id = user.value.id;
          formData.approach_id = props.title.id;
          loading.value = true;
          await post('favorite_approach_user', formData);
          loading.value = false;
          showSuccessNotification(' Adicionado aos favoritos com sucesso !!!');
        }
      } catch (error) {
        showErrorNotification(JSON.stringify(error));
      }
    };

    onMounted(async () => {
      await initFavorit();
    });

    return {
      addFavorit,
      go,
      ratingModel,
    };
  },
});
</script>

<style lang="sass" scoped>
  .q-approach
    border: 2px solid #f0f0f0
  .q-approach-bar
    width: 5px
    min-height: 10px
    height: 100%
    padding: 2px 0
    background: red
    margin: 0 5px
    margin-left: 10px
    border-radius: 20px
</style>
