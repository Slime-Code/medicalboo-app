<template>
  <q-page padding>
    <div class="row q-col-gutter-sm flex">
      <CardDashboard
        class="col-sm-4 col-md-4 col-xs-12"
        v-for="(card, index) in cards"
        :key="index"
        :info="card"
      />
    </div>

    <div class="row q-pa-sm q-col-gutter-x-md">
      <q-card class="col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xl-4">
        <q-card-section>
          <apexchart
            type="donut"
            :options="pieUsers.chartOptions"
            :series="pieUsers.series"
          />
        </q-card-section>
      </q-card>
      <q-card class="col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xl-4">
        <q-card-section>
          <apexchart
            type="donut"
            :options="pieAdmin.chartOptions"
            :series="pieAdmin.series"
          />
        </q-card-section>
      </q-card>

      <q-card class="col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xl-4">
        <q-card-section>
          <apexchart
            type="donut"
            :options="pieContents.chartOptions"
            :series="pieContents.series"
          />
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md">
      <apexchart
        type="area"
        height="550"
        :options="areaChart.chartOptions"
        :series="areaChart.series"
      />
    </div>

    <q-inner-loading
      :showing="loading"
      label="Carregando..."
      color="primary"
      label-class="text-primary"
      label-style="font-size: 1.1em"
    />
  </q-page>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import useApi from "../../composebles/useApi";
import CardDashboard from "../../components/CardDashboard.vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "DashboardPage",
  components: {
    CardDashboard,
    apexchart: VueApexCharts,
  },

  setup() {
    const cards = reactive({
      users: {
        title: "Usuário Cadastrados",
        percent: 0,
        icon: "fa fa-users",
        qtd: 0,
        color: "primary",
      },
      usersToday: {
        title: "Usuários Cadastrados; Hoje",
        percent: 0,
        qtd: 0,
        icon: "today",
        color: "green",
      },
      approach: {
        title: "Abordagens Registradas",
        percent: 0,
        icon: "book",
        qtd: 0,
        color: "purple",
      },
    });

    // eslint-disable-next-line prefer-template
    // const data = now.getFullYear + '-' + now.getMonth + '-' + now.getDay;

    const { list, getByField, getNotByField } = useApi();
    const loading = ref(true);

    onMounted(() => {
      listDados();
    });
    const areaChart = reactive({
      series: [
        {
          name: "Número de usuários",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
      chartOptions: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Registro de Usuários no Decorrer do Ano",
          align: "left",
        },
        labels: [],
        xaxis: {
          categories: [
            "Jan",
            "Fev",
            "Mar",
            "Abril",
            "Maio",
            "Jun",
            "Jul",
            "Agosto",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
        },
        yaxis: {},
        legend: {
          horizontalAlign: "left",
        },
      },
    });

    const pieUsers = reactive({
      series: [44, 55],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        title: {
          text: "Usuários Premium",
          align: "left",
        },
        labels: ["Premium", "Não Premium"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    });
    const pieAdmin = reactive({
      series: [44, 55],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        title: {
          text: "Outros Usuários",
          align: "left",
        },
        labels: ["Admin", "Não Admin"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    });
    const pieContents = reactive({
      series: [20, 100],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        title: {
          text: "Tipo de Conteúdo",
          align: "left",
        },
        labels: ["Premium", "Não Premium"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    });

    const listDados = async () => {
      const notAdmin = (await getNotByField("perfil", "profile_type_id", 3))
        .length;

      // pieAdmin.series[1] = notAdmin
      pieAdmin.series[1] = notAdmin;
      pieAdmin.series[0] = (
        await getByField("perfil", "profile_type_id", 3)
      ).length;
      cards.users.qtd = notAdmin;

      pieUsers.series[1] = (
        await getNotByField("perfil", "premium", true)
      ).length;
      pieUsers.series[0] = (
        await getNotByField("perfil", "premium", false)
      ).length;

      pieContents.series[1] = (
        await getNotByField("approach", "premium", true)
      ).length;
      pieContents.series[0] = (
        await getNotByField("approach", "premium", false)
      ).length;
      const currentDate = new Date(Date.now());

      const date = `${currentDate.getFullYear()}/${
        currentDate.getMonth() > 9 ? "" : "0"
      }${currentDate.getMonth().toLocaleString()}/${
        currentDate.getDay() > 9 ? "" : "0"
      }${currentDate.getDay().toString(16)}`;

      cards.usersToday.qtd = (
        await getByField("perfil", "created_at", date)
      ).length;
      cards.approach.qtd = (await list("approach")).length;

      loading.value = false;

      for (let mounth = 1; mounth <= 12; mounth++) {
        const count = (await getByField("perfil", "month", mounth)).length;
        areaChart.series[0].data[mounth - 1] = count;
      }
    };

    return {
      loading,
      cards,
      areaChart,
      pieUsers,
      pieAdmin,
      pieContents,
    };
  },
});
</script>
