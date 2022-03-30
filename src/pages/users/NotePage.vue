<template>
    <q-page class="flex flex-center">
      <div class="column explore row items-center no-wrap">
        <div class="col">
          <q-input
            outlined
            rounded
            bottom-slots
            v-model="text"
            label="Pesquise o seu tópico favorito"
            dense>

            <template v-slot:append>
              <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
              <q-icon name="search" />
            </template>

          </q-input>
          <hr>
        </div >
        <div class="q-row">
          <div v-for="(i, index) in notas" :key="index" >
            <br>
            <div class="q-pa-md" style="max-width: 400px">
              <div class="textarea">
                <q-input
                  borderless
                  v-model="i.content"
                  filled
                  clearable
                  color="red-12"
                  type="textarea"
                  label="digite a sua nota aqui"
                  size="2px"
                />
                <div class="textarea-color"></div>
              </div>
              <div class="textarea-rodape">
                <strong>
                  <span class="rodape-titulo"><input type="text" v-model="i.title"/></span>
                </strong>
                <br><span>{{ i.created_at }}</span>
              </div>
            </div>
          </div>
        </div>
        <q-btn
            @click="add"
            fab
            color="green"
            icon="add"
            class="flax absolute-down"
        /> <br>
        <q-spinner
          v-if="loading"
          size="xl"
          color="primary"
        />
      </div>
    </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
// import TextArea from 'components/TextArea.vue';
import useApi from '../../composebles/useApi';
import useAuthUser from '../../composebles/useAuthUser';

export default defineComponent({
  name: 'NotePage',
  setup() {
    const loading = ref(true);

    const cont = ref(1);

    const { user } = useAuthUser();

    const notas = ref([]);

    const form = ref({
      content: '', title: '', date: null, user_id: user.value.id,
    });

    const { post, list, update } = useApi();

    const addDataBase = async () => {
      try {
        loading.value = true;
        // alert(JSON.stringify(notas.value));
        notas.value = await list('notas');
        await update('notas', notas);
        // notas.value = aux.map((elem) => elem);
        loading.value = false;
      } catch (error) {
        loading.value = false;
        alert(JSON.stringify(error));
      }
    };

    const add = async () => {
      cont.value += 1;
      await post('notas', form.value);
      alert(JSON.stringify(form.value));
      alert(JSON.stringify(notas.value));
      await update('notas', notas.value);
      // notas.value = await list('notas');
    };
    onMounted(async () => {
      await addDataBase();
      // await add();
    });
    return {
      loading,
      text: ref(''),
      cont,
      add,
      notas,
      color: {
        type: String,
        default: 'red',
      },
    };
  },
});
</script>
