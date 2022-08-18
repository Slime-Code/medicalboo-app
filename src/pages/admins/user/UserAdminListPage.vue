<template>
  <div class="flex q-pt-xl flex-center">
    <div class="column" style="min-width: 90%">
      <div class="col q-ma-xs">
        <div>
          <h5 class="col-12 title" style="margin: 20px 0">Usuários Admin</h5>
          <div style="width: 100px" class="row q-gutter-sm">
            <q-btn
              icon="add"
              color="primary"
              class="col"
              @click="newDialog()"
            />
            <q-btn icon="update" color="primary" class="col" @click="listAll()">
            </q-btn>
          </div>
        </div>
        <div class="q-mt-md">
          <q-responsive :ratio="1" class="col" style="height: 550px">
            <q-table
              color="primary"
              :dense="$q.screen.lt.sm"
              flat
              square
              bordered
              title="Lista de Usuários"
              :rows="rows"
              :columns="columns"
              :visible-columns="[
                'title',
                'data',
                'cpf',
                'nacionalidade',
                'perfil',
                'email',
                'telefone',
                'options',
              ]"
              hide-bottom="true"
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
                  <q-td key="perfil" :props="props">
                    <p>Admin</p>
                  </q-td>
                  <q-td key="email" :props="props">
                    {{ props.row.email }}
                  </q-td>
                  <q-td key="telefone" :props="props">
                    {{ props.row.phone }}
                  </q-td>
                  <q-td key="options" class="text-right" :props="props">
                    <q-btn
                      flat
                      square
                      icon="edit"
                      @click="newDialog(props.row)"
                      dense
                    />
                    <q-btn
                      flat
                      square
                      icon="delete"
                      @click="confirmDelete(props.row.id)"
                      dense
                    />
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </q-responsive>
        </div>
      </div>
    </div>

    <q-dialog v-model="dialogUser" persistent>
      <q-card class="full-width">
        <q-form @submit="saveItem">
          <q-card-section class="q-py-sm">
            <div class="text-h6">Usuário Admin</div>
          </q-card-section>
          <q-separator />

          <q-card-section class="scroll" style="max-height: 77vh">
            <div class="q-pa-md">
              <div class="q-gutter-md colum">
                <q-input
                  class="col"
                  dense
                  v-model="formUser.name"
                  outlined
                  type="text"
                  label="Nome completo"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'Campo não pode estar vazio',
                  ]"
                />
                <q-input
                  class="col"
                  dense
                  v-model="formUser.birthday"
                  outlined
                  type="date"
                  label="Data de nascimento"
                  stack-label
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'Campo não pode estar vazio',
                  ]"
                />
                <q-input
                  class="col"
                  dense
                  v-model="formUser.cpf"
                  outlined
                  label="CPF"
                  lazy-rules
                  mask="###.###.###-##"
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'Campo não pode estar vazio',
                    (val) => TestaCPF(val) || 'CPF inválido',
                  ]"
                />
                <q-select
                  class="col"
                  dense
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
                  outlined
                  type="email"
                  label="Email"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'Campo não pode estar vazio',
                  ]"
                />
                <q-input
                  dense
                  class="col"
                  v-model="formUser.confirm_email"
                  outlined
                  type="email"
                  label="Confirme o email"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'Campo não pode estar vazio',
                    (val) =>
                      val.trim() === formUser.email.trim() ||
                      'Email não correspondente',
                  ]"
                />
                <q-input
                  class="col"
                  dense
                  v-model="formUser.password"
                  outlined
                  type="password"
                  label="Senha"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'Campo não pode estar vazio',
                  ]"
                />
                <q-input
                  class="col"
                  dense
                  v-model="formUser.confirm_password"
                  outlined
                  type="password"
                  label="Confirme a senha"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') ||
                      'Campo não pode estar vazio',
                    (val) =>
                      val.trim() === formUser.password.trim() ||
                      'Senha não correspondente',
                  ]"
                />
                <q-input
                  class="col"
                  dense
                  v-model="formUser.phone"
                  outlined
                  label="Telefone"
                  mask="(##) # ####-####"
                  lazy-rules
                  :rules="[(val) => !!val || 'Campo não pode estar vazio']"
                />

                <q-separator />

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

                  <q-btn
                    label="Salvar"
                    color="primary"
                    dense
                    type="submit"
                    v-ripple
                    no-caps
                  />
                </q-card-actions>
              </div>
            </div>
          </q-card-section>
        </q-form>
      </q-card>
    </q-dialog>

    <q-inner-loading
      v-if="loading"
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
  showSuccessNotification,
} from "src/functions/functionShowNotifications";
import { defineComponent, onMounted, reactive, ref } from "vue";
import { date, useQuasar } from "quasar";
import useAuthUser from "src/composebles/useAuthUser";
import useApi from "../../../composebles/useApi";

const columns = [
  {
    name: "title",
    required: true,
    label: "Nome",
    align: "left",
    field: "title",
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
    name: "cpf",
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
    name: "perfil",
    align: "left",
    label: "Perfil",
    field: "perfil",
    sortable: true,
  },

  {
    name: "email",
    align: "left",
    label: "E-mail",
    field: "E-mail",
    sortable: true,
  },

  {
    name: "telefone",
    align: "left",
    label: "Telefone",
    field: "telefone",
    sortable: true,
  },

  {
    name: "options",
    align: "right",
    label: "Ação",
    field: "options",
    sortable: true,
  },
];

export default defineComponent({
  setup() {
    const loading = ref(true);
    const $q = useQuasar();

    const dialogUser = ref(false);

    const { list, post, update, remove } = useApi();

    const { user, register } = useAuthUser();

    const rows = ref([]);

    const topics = ref([]);

    const formData = reactive({
      name: "",
      id: null,
    });

    const formUser = reactive({
      id: null,
      name: "",
      birthday: date,
      cpf: "",
      nationality: "",
      profile_type_id: 3,
      email: "",
      password: "",
      confirm_email: "",
      confirm_password: "",
      user_id: null,
      phone: null,
      premium: true,
    });

    const options = ref([]);

    const options2 = ref([]);
    const options1 = ref([]);

    const tipo = ref([
      {
        label: "Estudante",
        value: 1,
      },
      {
        label: "Profissional",
        value: 2,
      },
    ]);

    const users = ref([]);
    const getAllUsers = async () => {
      users.value = await list("users");
    };

    const listAll = async () => {
      try {
        loading.value = true;
        const aux = await list("perfil");
        rows.value = aux.map((item) => ({
          id: item.id,
          name: item.name,
          data: item.birthday,
          cpf: item.cpf,
          perfil: item.profile_type_id,
          email: item.email,
          nacionalidade: item.nationality,
          user_id: item.user_id,
          phone: item.phone,
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
        await remove("perfil", id);
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
        // alert(JSON.stringify(formUser))
        if (!formUser.id) {
          // alert(formUser.id)
          const aux = formUser;
          delete aux.id;
          const use = await register(aux);
          showSuccessNotification("Usuário cadastrado com sucesso!");
          formUser.user_id = use.id;
          delete formUser.confirm_email;
          delete formUser.confirm_password;
          // alert('fuiiiiiiii')
          await post("perfil", formUser);
        } else {
          delete formUser.confirm_email;
          delete formUser.confirm_password;
          alert('atualizar')
          await update("perfil", formUser);
        }
        listAll();
        showSuccessNotification("Dados Cadastrados Com Sucesso!");
        loading.value = false;
        dialogUser.value = false;
      } catch (error) {
        loading.value = false;
        dialogUser.value = false;
        alert(error.message)
        showErrorNotification(
          `houve uma falha ao carregar os dados para o banco: ${error}`
        );
      }
    };

    const listTopicsAproachs = async () => {
      try {
        const aux = await list("nationality");
        options.value = aux.map((elem) => elem.name);
        loading.value = false;
      } catch (error) {
        showErrorNotification(
          `houve uma falha ao carregar os dados do banco: ${error}`
        );
      }
    };

    const listOcupation = async () => {
      try {
        loading.value = true;
        const aux1 = await list("occupation_area");
        options2.value = aux1.map((elem) => elem.occupation_area);
        const aux = await list("graduation_year");
        options1.value = aux.map((elem) => elem.graduation_year);
        loading.value = false;
      } catch (error) {
        showErrorNotification(
          `houve uma falha ao carregar os dados do banco: ${JSON.stringify(
            error
          )}`
        );
      }
    };

    const newDialog = (data) => {
      if (data) {
        Object.keys(data).forEach((key) => {
          formData[key] = data[key];
        });
        formUser.id = data.id;
        formUser.name = data.name;
        formUser.phone = data.phone;
        formUser.birthday = data.data;
        formUser.cpf = data.cpf;
        formUser.nationality = data.nacionalidade;
        formUser.profile_type_id = 3;
        formUser.email = data.email;
        formUser.password = data.password;
        formUser.confirm_email = data.email;
        formUser.confirm_password = data.password;
        formUser.user_id = data.user_id;
        // formUser.created_at = data.created_at;
      } else {
        formUser.id = null;
        formData.name = "";
        formUser.name = "";
        formUser.birthday = "";
        formUser.cpf = "";
        formUser.nationality = "";
        formUser.email = "";
        formUser.password = "";
        formUser.confirm_email = "";
        formUser.confirm_password = "";
        formUser.user_id = null;
      }
      dialogUser.value = true;
    };

    function confirmDelete(id) {
      $q.dialog({
        title: "Eliminar registro",
        message: "Gostaria de apagar este registro?",
        persistent: true,
        cancel: "Cancelar",
      })
        .onOk(() => {
          deleteItem(id);
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    onMounted(() => {
      listOcupation();
      listTopicsAproachs();
      listAll();
      getAllUsers();
    });

    function TestaCPF(strCPF) {
      // var Soma;
      // var Resto;
      // Soma = 0;
      if (strCPF === "000.000.000-00") return false;

      // for (let i = 1; i <= 9; i++)
      //   Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      // Resto = (Soma * 10) % 11;

      // if (Resto == 10 || Resto == 11) Resto = 0;
      // if (Resto != parseInt(strCPF.substring(9, 10))) return false;

      // Soma = 0;
      // for (let i = 1; i <= 10; i++)
      //   Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      // Resto = (Soma * 10) % 11;

      // if (Resto == 10 || Resto == 11) Resto = 0;
      // if (Resto != parseInt(strCPF.substring(10, 11))) return false;
      return true;
    }

    return {
      TestaCPF,
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
      // onItemClick,
      columns,
      rows,
      listAll,
      topics,
      varDialogPassword: ref(false),
    };
  },
});
</script>

<style></style>
