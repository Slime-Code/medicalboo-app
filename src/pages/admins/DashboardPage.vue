<template>
  <q-page class="flex flex-top">
    <div class="row" style="min-width: 100%;">
      <div class="col-6 col-sm-3">
        <CardDashboard
        titulo="Total de usuários Cadastrados"
        percentagem="100"
        :quantidade="usuarios"
        />
      </div>

      <div class="col-6 col-sm-3">
        <CardDashboard1
        titulo="Usuários Cadastrados Hoje"
        :percentagem="percentagemCadastradosHoje"
        :quantidade="usuariosHoje"
        />
      </div>

      <div class="col-6 col-sm-3">
        <CardDashboard2
        titulo="Total de Usuários Premium"
        :percentagem="percentagemPremium"
        :quantidade="userPremium"
        />
      </div>

      <div class="col-6 col-sm-3">
        <CardDashboard3
        :titulo="contCategoria"
        :quantidade="cont"
        />
      </div>

    </div>
  </q-page>
</template>

<script>

import { defineComponent, onMounted, ref } from 'vue';
import useApi from '../../composebles/useApi';
import CardDashboard from '../../components/CardDashboard.vue';
import CardDashboard1 from '../../components/CardDashboard1.vue';
import CardDashboard2 from '../../components/CardDashboard2.vue';
import CardDashboard3 from '../../components/CardDashboard3.vue';

export default defineComponent({
  name: 'DashboardPage',
  components: {
    CardDashboard,
    CardDashboard1,
    CardDashboard2,
    CardDashboard3,
  },

  setup() {
    const userNormal = ref(0);

    const userPremium = ref(0);

    const usuarios = ref(0);

    const usuariosHoje = ref(0);

    const now = new Date();

    const cont = ref(0);

    const percentagemPremium = ref(0);

    const contCategoria = ref(0);

    const percentagemCadastradosHoje = ref(0);

    // eslint-disable-next-line prefer-template
    // const data = now.getFullYear + '-' + now.getMonth + '-' + now.getDay;

    const { list, getByField } = useApi();

    const listDados = async () => {
      const contes = await list('perfil');
      const categorias = await list('categoria');

      // Artigos Caadastrados em 14 Categorias..................................................
      categorias.forEach(async (el) => {
        const topicos = await getByField('topic', 'categoria_id', el.id);
        topicos.forEach(async (element) => {
          const approaches = await getByField('approach', 'topic_id', element.id);
          cont.value += approaches.length;
        });
      });

      contCategoria.value = categorias.length;

      // Total De Usuários Premiums e Normais..................................................

      contes.forEach((element) => {
        if (element.premium) {
          userPremium.value += 1;
        } else {
          userNormal.value += 1;
        }
        // eslint-disable-next-line eqeqeq
        if (element.created_at == now) {
          usuariosHoje.value += 1;
        }
      });
      usuarios.value = userNormal.value + userPremium.value;
      percentagemPremium.value = (100 * userPremium.value) / usuarios.value;
      percentagemCadastradosHoje.value = (100 * usuariosHoje.value) / usuarios.value;
    };

    onMounted(() => {
      listDados();
    });

    return {
      userNormal,
      userPremium,
      usuarios,
      usuariosHoje,
      cont,
      percentagemPremium,
      contCategoria,
      percentagemCadastradosHoje,
    };
  },
});
</script>
