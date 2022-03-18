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
          <div v-for="i in notas" :key="i" >
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
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const dataAtual = `${dia}/${mes}/${ano}`;

    const loading = ref(true);

    const cont = ref(1);

    const { user } = useAuthUser();

    const { id } = user;

    const form = ref({
      content: '', title: '', date: dataAtual, user_id: id,
    });

    const notas = ref([]);
    const { post } = useApi();
    const { list } = useApi();
    const addDataBase = async () => {
      try {
        loading.value = true;
        const aux = await list('notas');
        notas.value = aux.map((elem) => elem);
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    const add = async () => {
      cont.value += 1;
      notas.value.push(form);
      await post('notas', form);
      alert(JSON.stringify(form.value));
      alert(JSON.stringify(notas.value));
      const aux = await list('notas');
      notas.value = aux.map((elem) => elem);
    };
    onMounted(() => {
      addDataBase();
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
