<template>
  <div class="flex q-pt-xl flex-center">
  <div class="column" style="min-width: 90%">
    <div class="col q-ma-xs">
      <div>
        <h5 class="col-12 title" style="margin: 20px 0;">Usuários</h5>
        <div style="width: 100px;" class="row q-gutter-sm">
          <q-btn
          icon="update"
          color="primary"
          class="col"
          @click="listAll()"
          >
          </q-btn>
        </div>
      </div>
      <div class="q-mt-md">
        <q-table
          :filter="filter"
          color="primary"
          :dense="$q.screen.lt.sm"
          flat
          square
          bordered
          title="Lista de Usuários"
          :rows="rows"
          :columns="columns"
          :visible-columns="['title', 'data', 'cpf', 'nacionalidade', 'ano-de-graduacao', 'area-de-ocupacao', 'data-cadastro', 'premium', 'perfil', 'options']"
          row-key="title"
          separator="cell"
        >
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props" v-if="props.row.perfil !== 3">
              <q-td key="title" :props="props">
                {{ props.row.name }}
              </q-td>
              <q-td key="data" :props="props">
                  {{ props.row.data }}
              </q-td>
              <q-td key="cpf" :props="props">
                  {{ props.row.cpf }}
              </q-td>
              <q-td key="nacionalidade" :props="props">
                  {{ props.row.nacionalidade }}
              </q-td>
              <q-td key="ano-de-graduacao" :props="props">
                  {{ props.row.ano_de_graduacao }}
              </q-td>
              <q-td key="area-de-ocupacao" :props="props">
                  {{ props.row.area_de_ocupacao }}
              </q-td>
              <q-td key="data-cadastro" :props="props">
                  {{ props.row.created_at }}
              </q-td>
              <q-td key="premium" :props="props">
                  <p v-if="props.row.premium">SIM</p>
                  <p v-else>NÃO</p>
              </q-td>
              <q-td key="perfil" :props="props">
                <p v-if="props.row.perfil == 1">Estudante</p>
                <p v-else-if="props.row.perfil == 2">Proficional</p>
              </q-td>
              <q-td key="options" class="text-center" :props="props">
                <q-btn flat color="red" square icon="delete" @click="confirmDelete(props.row.id)" dense/>
                <q-btn label="cupom" color="primary" flat square icon="money" @click="newDialog(props.row.id)" dense/>
              </q-td>
            </q-tr>
          </template>
        </q-table>

      </div>
    </div>
    </div>

    <q-dialog v-model="dialogUser" persistent>
      <q-card class="full-width">
        <q-form @submit="saveItem">
          <q-card-section class="q-py-sm">
            <div class="text-h6">Novo Usuário</div>
          </q-card-section>
          <q-separator />

          <q-card-section class="scroll" style="max-height: 77vh">
            <div class="q-pa-md">
              <div class="q-gutter-md row items-start">
                <q-input
                  class="col"
                  style="min-width: 250px"
                  dense
                  v-model="rows.name"
                  rounded
                  outlined
                  type="text"
                  label="Nome completo"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Campo não pode estar vazio'
                  ]"
                />
                <q-input
                  class="col"
                  style="min-width: 120px"
                  dense
                  v-model="rows.birthday"
                  rounded
                  outlined
                  type="date"
                  label="Data de nascimento"
                  stack-label
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Campo não pode estar vazio'
                  ]"
                />
                <q-input
                  class="col"
                  style="min-width: 250px"
                  dense
                  v-model="rows.cpf"
                  rounded
                  outlined
                  type="text"
                  label="CPF"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Campo não pode estar vazio'
                  ]"
                />
                <div>
                  <div class="q-pa-xs">
                    <q-option-group
                      v-model="rows.profile_type_id"
                      :options="tipo"
                      color="primary"
                      inline
                    />
                  </div>
                </div>
                <q-select
                  class="col"
                  style="min-width: 230px"
                  dense
                  rounded
                  outlined
                  v-model="rows.nationality"
                  :options="options"
                  label="Nacionalidade"
                />

                <q-separator />

                <q-input
                  style="min-width: 30%"
                  class="col"
                  dense
                  v-model="rows.email"
                  rounded
                  outlined
                  type="email"
                  label="Email"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Campo não pode estar vazio'
                  ]"
                />
                <q-input
                  style="min-width: 50%"
                  dense
                  class="col"
                  v-model="formData.confirm_email"
                  rounded
                  outlined
                  type="email"
                  label="Confirme o email"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Campo não pode estar vazio',
                    val => val.trim() === rows.email.trim() || 'Email não correspondente'
                  ]"
                />
                <q-input
                  style="min-width: 30%; max-width: 50%"
                  class="col"
                  dense
                  v-model="rows.password"
                  rounded
                  outlined
                  type="password"
                  label="Senha"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Campo não pode estar vazio'
                  ]"
                />
                <q-input
                  class="col"
                  style="min-width: 50%; max-width: 50%"
                  dense
                  v-model="rows.confirm_password"
                  rounded
                  outlined
                  type="password"
                  label="Confirme a senha"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Campo não pode estar vazio',
                    val => val.trim() === rows.password.trim() || 'Senha não correspondente'
                  ]"
                />

                <q-separator />

                <q-select
                style="min-width: 30%; max-width: 50%"
                dense
                rounded
                outlined
                :loading='loading'
                v-model="rows.occupation_area"
                :options="options2"
                label="Área de actuação"
                class="col"
                />
                <q-select
                  style="min-width: 50%; max-width: 50%"
                  :loading='loading'
                  dense
                  rounded
                  outlined
                  v-model="rows.graduation_year"
                  :options="options1"
                  label="Ano de formatura"
                  class="col"
                /> <br>

                <q-card-actions align="right">
                  <q-btn
                    label="Cancelar "
                    @click="loadingForm = false"
                    color="primary"
                    v-ripple
                    no-caps
                    dense
                    v-close-popup
                  />

                  <q-btn label="Salvar" color="primary" dense type="submit" v-ripple no-caps />
                </q-card-actions>

              </div>
            </div>
          </q-card-section>
        </q-form>
      </q-card>
    </q-dialog>

    <q-dialog v-model="dialogCupom" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h6 row item-start">
                <q-icon name="money" style="margin-right: 10px"/> Gerar cupom
                <q-space/>
                <q-btn icon="close" flat round dense v-close-popup />
              </div>
              <q-separator />
            </q-card-section><br>
            <q-form @submit="gerarCupom">
              <q-card-actions align="left" class="text-primary">
                <q-input filled v-model="formData.percentagem" label="Percentagem" style="max-width: 150px; width: 150px;" suffix="% "/>
                <q-btn  label="Salvar Valor" size="19px" no-caps no-wrap unelevated style="background-color: #FFC300; margin-left: 10px; max-width: 150px; width: 150px" text-color="black"  type="submit" v-ripple v-close-popup />
              </q-card-actions><br>
            </q-form>
          </q-card>

        </q-dialog>

    <q-inner-loading
      :showing="loading"
      label="Atualizando..."
      label-class="text-primary"
      color="primary"
      label-style="font-size: 1.1em"
    />
  </div>
</template>

<script>
import {
  showErrorNotification,
  // showSuccessNotification,
} from 'src/functions/functionShowNotifications';
import {
  defineComponent, onMounted, reactive, ref,
} from 'vue';
import cc from 'coupon-code';
import { useQuasar } from 'quasar';
import useApi from '../../../composebles/useApi';

const columns = [
  {
    name: 'title',
    required: true,
    label: 'Nome',
    align: 'left',
    field: 'title',
    sortable: true,
  },

  {
    name: "data",
    align: "left",
    label: "Data de Nascimento",
    field: "data",
    sortable: true,
  },

  {
    name: "CPF",
    align: "left",
    label: "CPF",
    field: "CPF",
    sortable: true,
  },

  {
    name: "nacionalidade",
    align: "left",
    label: "Nacionalidade",
    field: "Nacionalidade",
    sortable: true,
  },

  {
    name: "ano-de-graduacao",
    align: "left",
    label: "Ano de Graduação",
    field: "ano-de-graduacao",
    sortable: true,
  },

  {
    name: "area-de-ocupacao",
    align: "left",
    label: "Área de Ocupação",
    field: "area-de-ocupacao",
    sortable: true,
  },

  {
    name: "data-cadastro",
    align: "left",
    label: "Cadastrado Aos",
    field: "data",
    sortable: true,
  },

  {
    name: "premium",
    align: "left",
    label: "premium",
    field: "premium",
    sortable: true,
  },

  {
    name: "perfil",
    align: "left",
    label: "Perfil",
    field: "perfil",
    sortable: true,
  },

  {
    name: 'options', align: 'center', label: 'Ação', field: 'options', sortable: true,
  },

];

export default defineComponent({

  setup() {
    const loading = ref(true);
    const $q = useQuasar();

    const { list, post, update, remove, getByField } = useApi();

    const rows = ref([]);

    const topics = ref([]);

    const formData = reactive({
      cod_cupom: '',
      percentagem: 0,
      user_id: null,
      id: null,
      created_at: null
    });

    const formUser = reactive({
      name: '',
      birthday: '',
      cpf: '',
      nationality: '',
      profile_type_id: 1,
      email: '',
      password: '',
      confirm_email: '',
      confirm_password: '',
      occupation_area: '',
      graduation_year: '',
    });

    const options = ref([]);

    const options2 = ref([]);
    const options1 = ref([]);

    const tipo = ref([
      {
        label: 'Estudante',
        value: 1,
      },
      {
        label: 'Profissional',
        value: 2,
      },
    ]);

    const users = ref([]);
    const getAllUsers = async () => {
      users.value = await list('users');
    };

    const listAll = async () => {
      try {
        loading.value = true;
        const aux = await list('perfil');
        rows.value = aux.map((item) => ({
          id: item.id,
          name: item.name,
          data: item.birthday,
          cpf: item.cpf,
          perfil: item.profile_type_id,
          area_de_ocupacao: item.occupation_area,
          ano_de_graduacao: item.graduation_year,
          email: item.email,
          created_at: item.created_at,
          password: item.password,
          nacionalidade: item.nationality,
          premium: item.premium,
        }));
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };
    const deleteItem = async (id) => {
      try {
        loading.value = true;
        await remove('perfil', id);
        listAll();
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    const saveItem = async () => {
      try {
        loading.value = true;
        if (!formData.id) {
          delete formData.id;

          await post('perfil', formData);
        } else {
          await update('perfil', formData);
        }
        listAll();
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    const listTopicsAproachs = async () => {
      try {
        const aux = await list('nationality');
        options.value = aux.map((elem) => elem.name);
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    const listOcupationAreaGraduation = async () => {
      try {
        loading.value = true;
        const aux1 = await list('occupation_area');
        options2.value = aux1.map((elem) => elem.occupation_area);
        const aux = await list('graduation_year');
        options1.value = aux.map((elem) => elem.graduation_year);
        loading.value = false;
      } catch (error) {
        showErrorNotification(`houve uma falha ao carregar os dados do banco: ${JSON.stringify(error)}`);
      }
    };

    onMounted(() => {
      listTopicsAproachs();
      listAll();
      listOcupationAreaGraduation();
      getAllUsers();
    });

    const onItemClick = async () => {

    };

    const dialogCupom = ref(false);
    const newDialog = async (data) => {
      if (data) {
        const auxUserId = await getByField('perfil', 'id', data)
        const user_id = await getByField('cupom', 'user_id', auxUserId[0].user_id)
        if (user_id.length > 0) {
          $q.notify({
            type: "negative",
            message: `O usuário ${auxUserId[0].name}, já possui um cupom!!`,
          });
        } else {
          formData.user_id = auxUserId[0].user_id;
          dialogCupom.value = true;
        }
      } else {
        formData.cod_cupom = '';
        formData.percentagem = 0;
        formData.user_id = null;
      }
    };

    function confirmDelete(id) {
      $q.dialog({
        title: 'Eliminar registro',
        message: 'Gostaria de apagar este registro?',
        persistent: true,
        cancel: 'Cancelar',
      }).onOk(() => {
        deleteItem(id);
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
        .onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        });
    }

    const gerarCupom = async () => {
      try {
        formData.cod_cupom = cc.generate();
        formData.created_at = new Date();
        delete formData.id;
        $q.dialog({
          title: 'Gerar Cupom?',
          message: 'Tens a certeza que queres gerar esse cupom?',
          persistent: true,
          cancel: 'Cancelar',
        }).onOk(() => {
          post('cupom', formData);
          $q.notify({
            type: "positive",
            message: "Cupom criado com sucesso!!",
          });
        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
      } catch (error) {
        alert('verifique se está conectado a internet!!')
      }
      
    }

    return {
      options,
      tipo,
      gerarCupom,
      confirmDelete,
      newDialog,
      formData,
      formUser,
      loading,
      deleteItem,
      dialogCupom,
      saveItem,
      onItemClick,
      columns,
      rows,
      listAll,
      topics,
      filter: ref(''),
      varDialogPassword: ref(false),
    };
  },
});
</script>

<style>

</style>
