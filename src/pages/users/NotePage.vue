<template>
  <q-page padding class="row justify-center q-gutter-sm">
    <div class="col-6 col-xs-12 col-md-6 col-lg-6 col-xl-6">
      <q-input
        class="q-mt-md"
        outlined
        rounded
        bottom-slots
        v-model="text"
        placeholder="Pesquise uma nota"
        dense
        @update:model-value="searchNote()"
      >
      </q-input>
      <div class="q-row">
        <div v-for="(i, index) in notas" :key="index">
          <br />
          <div class="q-pa-md">
            <div>
              <q-input
                borderless
                v-model="i.content"
                filled
                clearable
                color="red-12"
                type="textarea"
                label="Nota"
                @blur="updateNote(i)"
              />
              <div class="textarea-color"></div>
            </div>
            <div class="q-mt-sm textarea-rodape">
              <strong class="row full-width">
                <span class="col-8 rodape-titulo">
                  <q-input
                    outlined
                    dense
                    v-model="i.title"
                    @blur="updateNote(i)"
                    type="text"
                  />
                </span>
                <q-btn
                  class="col-1"
                  flat
                  round
                  icon="delete"
                  color="red-5"
                  dense
                  @click="removeNote(index, i.id)"
                >
                </q-btn>
              </strong>
              <br /><span v-if="i.created_at">
                {{
                  new Date(i.created_at).toLocaleString("pt-BR", { timeZone: "UTC" })
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
          @click="addDataBase"
          fab
          color="green"
          icon="add"
          class="flax absolute-down"
        />   <q-inner-loading :showing="loading" color="primary" />
      </q-page-sticky>
      <br />
   
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { getNote } from "src/store/note/actions";
import { defineComponent, ref, onMounted } from "vue";
// import TextArea from 'components/TextArea.vue';
import useApi from "../../composebles/useApi";
import useAuthUser from "../../composebles/useAuthUser";

export default defineComponent({
  name: "NotePage",
  setup() {
    const loading = ref(false);

    const { user } = useAuthUser();

    const notas = ref([]);

    const form = ref({
      content: "",
      title: "",
      date: null,
      user_id: user.value.id,
    });

    const { post, getByField, update, remove } = useApi();
    const $q = useQuasar();

    const updateNote = async (note) => {
      try {
        await update("notas", note);

        $q.notify({
          type: "positive",
          message: `${note.title} atualizada`,
        });
      } catch (error) {
        alert(error.message);
      }
    };

    const addDataBase = async () => {
      try {
        const note = await post("notas", {
          title: "Título da nota",
          content: "Conteúdo",
          user_id: user.value.id,
        });

        $q.notify({
          type: "positive",
          message: "Nota criada com sucesso!!",
        });
        notas.value.push(note[0]);
      } catch (error) {
        alert(error.message);
      }

      lastNotes.value = [...notas.value];
    };

    const removeNote = async (index, id) => {
      if (id) {
        const isOk = confirm("Deseja realmente apagar essa nota?");

        if (isOk) {
          await remove("notas", id);
          $q.notify({
            type: "warning",
            message: "Nota elimana com sucesso!!",
          });
          notas.value.splice(index, 1);
        }
      } else {
        notas.value.splice(index, 1);
      }
      lastNotes.value = [...notas.value];
    };

    const text = ref("");

    const lastNotes = ref([]);

    const searchNote = () => {
      if (!text.value.trim().length) {
        notas.value = [...lastNotes.value];
      } else {
        const result = notas.value.filter((note) => {
          const searchNoteTitle = note.title.trim().toLowerCase();
          const searchNoteContent = note.content.trim().toLowerCase();
          const textSearch = text.value.trim().toLowerCase();
          return (
            searchNoteTitle.includes(textSearch) || searchNoteContent.includes(textSearch)
          );
        });
        notas.value = [...result];
      }
    };

    const getNoteByUser = async () => {
      try {
        loading.value = true;
        notas.value = await getByField("notas", "user_id", user.value.id);
        lastNotes.value = [...notas.value]
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    };
    onMounted(() => {
      getNoteByUser();
    });

    return {
      updateNote,
      searchNote,
      removeNote,
      addDataBase,
      text,
      loading,
      notas,
      color: {
        type: String,
        default: "red",
      },
    };
  },
});
</script>
