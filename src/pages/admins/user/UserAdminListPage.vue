<template>
  <div class="flex q-pt-xl flex-center">
  <div class="column" style="min-width: 90%">
    <div class="col q-ma-xs">
      <div>
        <h5 class="col-12 title" style="margin: 20px 0;">Usuários Admin</h5>
        <div style="width: 100px;" class="row q-gutter-sm">
          <q-btn
            icon="add"
            color="primary"
            class="col"
            @click="
            newDialog()
            "
          />
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
          color="primary"
          :dense="$q.screen.lt.sm"
          flat
          square
          bordered
          title="Lista de Usuários"
          :rows="rows"
          :columns="columns"
          :visible-columns="['title', 'data', 'cpf', 'nacionalidade', 'ano-de-graduacao', 'area-de-ocupacao', 'data-cadastro', 'perfil', 'options']"
          row-key="title"
          separator="cell"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
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
              <q-td key="perfil" :props="props">
                <p>Admin</p>
              </q-td>
              <q-td key="options" class="text-right" :props="props">
                <q-btn flat square icon="edit" @click="newDialog(props.row)" dense/>
                <q-btn flat square icon="delete" @click="confirmDelete(props.row.id)" dense/>
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
            <div class="text-h6">Novo Usuário Admin</div>
          </q-card-section>
          <q-separator />

          <q-card-section class="scroll" style="max-height: 77vh">
            <div class="q-pa-md">
              <div class="q-gutter-md row items-start">
                <q-input
                  class="col"

                  dense
                  v-model="formUser.name"
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

                  dense
                  v-model="formUser.birthday"
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

                  dense
                  v-model="formUser.cpf"
                  rounded
                  outlined
                  type="text"
                  label="CPF"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Campo não pode estar vazio'
                  ]"
                />
                <q-select
                  class="col"

                  dense
                  rounded
                  outlined
                  v-model="formUser.nationality"
                  :options="options"
                  label="Nacionalidade"
                />

                <q-separator />

                <q-input

                  class="col"
                  dense
                  v-model="formUser.email"
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

                  dense
                  class="col"
                  v-model="formUser.confirm_email"
                  rounded
                  outlined
                  type="email"
                  label="Confirme o email"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Campo não pode estar vazio',
                    val => val.trim() === formUser.email.trim() || 'Email não correspondente'
                  ]"
                />
                <q-input

                  class="col"
                  dense
                  v-model="formUser.password"
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

                  dense
                  v-model="formUser.confirm_password"
                  rounded
                  outlined
                  type="password"
                  label="Confirme a senha"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Campo não pode estar vazio',
                    val => val.trim() === formUser.password.trim() || 'Senha não correspondente'
                  ]"
                />

                <q-separator />

                <br>

                <q-card-actions align="right">
                  <q-btn
                    label="Cancelar "
                    @click="loading = false"
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
/* eslint-disable no-plusplus */
import {
  showErrorNotification,
  // showSuccessNotification,
} from 'src/functions/functionShowNotifications';
import {
  defineComponent, onMounted, reactive, ref,
} from 'vue';
import { useQuasar } from 'quasar';
import useAuthUser from 'src/composebles/useAuthUser';
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
    name: 'data',
    align: 'left',
    label: 'Data de Nascimento',
    field: 'data',
    sortable: true,
  },

  {
    name: 'cpf',
    align: 'left',
    label: 'CPF',
    field: 'CPF',
    sortable: true,
  },

  {
    name: 'nacionalidade',
    align: 'left',
    label: 'Nacionalidade',
    field: 'Nacionalidade',
    sortable: true,
  },

  {
    name: 'ano-de-graduacao',
    align: 'left',
    label: 'Ano de Graduação',
    field: 'ano-de-graduacao',
    sortable: true,
  },

  {
    name: 'area-de-ocupacao',
    align: 'left',
    label: 'Área de Ocupação',
    field: 'area-de-ocupacao',
    sortable: true,
  },

  {
    name: 'data-cadastro',
    align: 'left',
    label: 'Cadastrado Aos',
    field: 'data',
    sortable: true,
  },

  {
    name: 'perfil',
    align: 'left',
    label: 'Perfil',
    field: 'perfil',
    sortable: true,
  },

  {
    name: 'options', align: 'right', label: 'Ação', field: 'options', sortable: true,
  },

];

export default defineComponent({
  name: 'UserAdminListPage',

  setup() {
    const loading = ref(true);
    const $q = useQuasar();

    const {
      list, post, update, remove,
    } = useApi();

    const { user, register } = useAuthUser();

    const rows = ref([]);

    const topics = ref([]);

    const formData = reactive({
      name: '',
      id: null,
    });

    const formUser = reactive({
      name: '',
      birthday: '',
      cpf: '',
      nationality: '',
      profile_type_id: 3,
      email: '',
      password: '',
      confirm_email: '',
      confirm_password: '',
      occupation_area: '',
      graduation_year: '',
      user_id: '',
    });

    const dialogUser = ref(false);

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
          user_id: item.user_id,
        }));
        // filtrar todos os Admins -------------------------------
        for (let index = 0; index < rows.value.length; index++) {
          if (rows.value[index].perfil !== 3) {
            rows.value.splice(index, 1);
            index -= 1;
          }
        }
        loading.value = false;
      } catch (error) {
        loading.value = false;
        alert(JSON.stringify(error));
      }
    };
    const deleteItem = async (id) => {
      try {
        loading.value = true;
        await remove('perfil', id);
        listAll();
        loading.value = false;
      } catch (error) {
        loading.value = false;
        alert(error);
      }
    };

    const saveItem = async () => {
      try {
        loading.value = true;
        if (!formUser.user_id) {
          // delete formUser.value.id;
          formUser.profile_type_id = 3;
          delete formUser.user_id;
          alert(JSON.stringify(formUser));
          const use = await register(formUser);
          alert(use);
          formUser.user_id = use.id;
          alert(JSON.stringify(formUser.user_id));
          delete formUser.confirm_email;
          delete formUser.confirm_password;

          await post('perfil', formUser);
        } else {
          alert('atualizar');
          await update('perfil', formUser);
        }
        listAll();
        loading.value = false;
        dialogUser.value = false;
      } catch (error) {
        loading.value = false;
        // dialogUser.value = false;
        alert(error);
        showErrorNotification(`houve uma falha ao carregar os dados para o banco: ${error}`);
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

    const listOcupation = async () => {
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
      listOcupation();
      listTopicsAproachs();
      listAll();
      getAllUsers();
    });

    const onItemClick = async () => {

    };

    const newDialog = (data) => {
      if (data) {
        Object.keys(data).forEach((key) => {
          formData[key] = data[key];
        });
        formUser.id = data.id;
        formUser.name = data.name;
        formUser.birthday = data.data;
        formUser.cpf = data.cpf;
        formUser.graduation_year = data.ano_de_graduacao;
        formUser.nationality = data.nacionalidade;
        formUser.profile_type_id = 3;
        formUser.email = data.email;
        formUser.password = data.password;
        formUser.occupation_area = data.area_de_ocupacao;
        formUser.confirm_email = data.email;
        formUser.confirm_password = data.password;
        formUser.user_id = data.user_id;
        formUser.created_at = data.created_at;
      } else {
        formData.name = '';
        formUser.name = '';
        formUser.birthday = '';
        formUser.cpf = '';
        formUser.graduation_year = '';
        formUser.nationality = '';
        formUser.email = '';
        formUser.password = '';
        formUser.occupation_area = '';
        formUser.confirm_email = '';
        formUser.confirm_password = '';
        formUser.user_id = '';
      }
      dialogUser.value = true;
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

    return {
      user,
      options2,
      options1,
      options,
      tipo,
      confirmDelete,
      newDialog,
      formData,
      formUser,
      loading,
      deleteItem,
      dialogUser,
      saveItem,
      onItemClick,
      columns,
      rows,
      listAll,
      topics,
      varDialogPassword: ref(false),
    };
  },
});
</script>

<style>

</style>
