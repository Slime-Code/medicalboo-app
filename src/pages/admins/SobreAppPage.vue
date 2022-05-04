<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-pa-sm">Sobre O App</div>
      <q-separator></q-separator>
        <q-list
          v-for="(content, index) in formDat"
          :key="index"
          bordered
          class="rounded-borders q-my-sm"
        >
          <q-expansion-item label="Conteúdo">
            <q-separator />

            <template v-slot:header>
              <q-item-section> {{ content.title }} </q-item-section>
            </template>
            <q-card>
              <q-card-section>
                                    <q-editor
                      v-model="formDat[index].conteudo"
                      min-height="8rem"
                      :toolbar="[
                        [
                          {
                            label: $q.lang.editor.align,
                            icon: $q.iconSet.editor.align,
                            fixedLabel: true,
                            list: 'only-icons',
                            options: ['left', 'center', 'right', 'justify'],
                          },
                          {
                            label: $q.lang.editor.align,
                            icon: $q.iconSet.editor.align,
                            fixedLabel: true,
                            options: ['left', 'center', 'right', 'justify'],
                          },
                        ],
                        [
                          'bold',
                          'italic',
                          'strike',
                          'underline',
                          'subscript',
                          'superscript',
                        ],
                        ['token', 'hr', 'link', 'custom_btn'],
                        ['print', 'fullscreen'],
                        [
                          {
                            label: $q.lang.editor.formatting,
                            icon: $q.iconSet.editor.formatting,
                            list: 'no-icons',
                            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                          },
                          {
                            label: $q.lang.editor.fontSize,
                            icon: $q.iconSet.editor.fontSize,
                            fixedLabel: true,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                              'size-1',
                              'size-2',
                              'size-3',
                              'size-4',
                              'size-5',
                              'size-6',
                              'size-7',
                            ],
                          },
                          {
                            label: $q.lang.editor.defaultFont,
                            icon: $q.iconSet.editor.font,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                              'default_font',
                              'arial',
                              'arial_black',
                              'comic_sans',
                              'courier_new',
                              'impact',
                              'lucida_grande',
                              'times_new_roman',
                              'verdana',
                            ],
                          },
                          'removeFormat',
                        ],
                        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                        ['undo', 'redo'],
                        ['viewsource'],
                      ]"
                      :fonts="{
                        arial: 'Arial',
                        arial_black: 'Arial Black',
                        comic_sans: 'Comic Sans MS',
                        courier_new: 'Courier New',
                        impact: 'Impact',
                        lucida_grande: 'Lucida Grande',
                        times_new_roman: 'Times New Roman',
                        verdana: 'Verdana',
                      }"
                    >
                    </q-editor>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>

        <q-btn
          class="q-mb-sm"
          icon="send"
          color="primary"
          outline
          label="Salvar"
          no-caps
          @click="saveContent"
        />

    <q-inner-loading
      :showing="loadingForm"
      label="Carregando dados..."
      label-class="text-primary"
      color="primary"
      label-style="font-size: 1.1em"
    />
  </q-page>
</template>

<script>
import {
  defineComponent, onMounted, ref,
} from 'vue';
// import { useQuasar } from 'quasar';
import useApi from '../../composebles/useApi';

export default defineComponent({
  setup() {
    // const $q = useQuasar();

    const loadingForm = ref(false);
    const loadingTable = ref(false);

    const {
      list,
      post,
      update,
    } = useApi();
    const rows = ref([]);
    const optionsAproach = ref(null);
    const optionsTopic = ref(null);

    const formDat = ref([]);

    const listSobreApp = async () => {
      formDat.value = await list('sobreApp');
      // alert(JSON.stringify(formDat));
    };

    const getLists = async () => {
      const auxAproach = await list('type_approach');
      const auxTopic = await list('topic');
      optionsAproach.value = auxAproach.map((item) => ({
        label: item.type_approach,
        value: item.id,
      }));
      optionsTopic.value = auxTopic.map((item) => ({
        label: item.name,
        value: item.id,
      }));
    };

    const filter = ref('');

    const addContent = () => {
      formDat.value.push({
        title: 'Novo conteúdo',
        content: '',
      });
    };

    const loadingContent = ref(false);

    const saveContent = async () => {
      try {
        formDat.value.forEach(async (content) => {
          const data = {
            title: content.title,
            conteudo: content.conteudo,
            id: content.id,
          };
          loadingContent.value = true;

          if (content.id) {
            await update('sobreApp', data);
          } else {
            delete data.id;
            await post('sobreApp', data);
          }
          loadingContent.value = false;
        });
      } catch (error) {
        alert(error.message);
      }
    };

    onMounted(() => {
      // getContents();
      listSobreApp();
      // getAproaches();
      getLists();
    });

    return {
      formDat,
      loadingContent,
      saveContent,
      loadingForm,
      loadingTable,
      addContent,
      filter,
      optionsAproach,
      optionsTopic,
      rows,
    };
  },
});
</script>

<style></style>

