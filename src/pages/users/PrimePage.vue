<template>
  <q-page padding class="constrain-4">
    <div class="q-pa-md col-md-4 col-sm-6 col-xs-10 q-gutter-y-lg">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        :autoplay="true"
        ref="carousel"
        infinite
      >
        <q-carousel-slide
          v-for="(img, index) in data"
          :name="index"
          :img-src="img.img_url"
        />

        <template v-slot:control>
          <q-carousel-control
            position="bottom-right"
            :offset="[18, 18]"
            class="q-gutter-xs"
          >
            <q-btn
              push
              round
              dense
              color="orange"
              text-color="black"
              icon="arrow_left"
              @click="$refs.carousel.previous()"
            />
            <q-btn
              push
              round
              dense
              color="orange"
              text-color="black"
              icon="arrow_right"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
    <div class="column flex items-center">
      <p class="text-h6">Clareza Quando Você Mais Precisa</p>
      <p class="text-body2 text-center">
        Fornecemos as evidências fundamentada na experiência clínica dos médicos
        mais notáveis do mundo
      </p>
      <div class="col column flex q-gutter-sm">
        <q-btn
          v-if="!just"
          class="col"
          color="green-5"
          rounded
          label="Experimente 7 Dias Gratis"
          @click="seteDiasGrates"
        />

        <q-btn
          v-else="just"
          class="col"
          color="green-5"
          rounded
          label="Quero Ser Premium"
          href="https://buy.stripe.com/test_00g8At4EX8wi2iIbII"
        />

        <q-spinner
          class="absolute-center"
          v-if="loading"
          size="xl"
          color="primary"
        />
        <q-btn
          class="col"
          color="grey-5"
          rounded
          unelevated
          dense
          label="agora Não"
          :to="{ name: 'home' }"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import useAuthUser from "src/composebles/useAuthUser";
import useApi from "src/composebles/useApi";

export default {
  setup() {
    const formData = {
      user_id: null,
      created_at: null,
      dias: 30,
      expirou: true,
    };

    const { getByField, post, update, list } = useApi();

    const { user } = useAuthUser();

    const $q = useQuasar();

    const router = useRouter();

    const loading = ref(false);

    const data = ref([]);

    const just = ref(null);

    onMounted(async () => {
      data.value = await list("img");
      const user_grates = await getByField(
        "prazo_premium",
        "user_id",
        user.value.id
      );
      if (user_grates.length > 0) just.value = true;
    });

    const seteDiasGrates = async () => {
      try {
        loading.value = true;
        const user_grates = await getByField(
          "prazo_premium",
          "user_id",
          user.value.id
        );
        if (user_grates.length === 0) {
          const perfil = await getByField("perfil", "user_id", user.value.id);
          formData.user_id = user.value.id;
          formData.created_at = new Date();
          formData.expirou = false;
          await post("prazo_premium", formData);
          perfil[0].premium = true;
          await update("perfil", perfil[0]);
          $q.notify({
            type: "positive",
            message: `Parabéns ${perfil[0].name}... Agora é Cliente Premium!`,
          });
          router.push({ name: "home" });
        }
      } catch (error) {
        alert(error);
      } finally {
        loading.value = false;
      }
    };
    return {
      just,
      data,
      loading,
      slide: ref(1),
      autoplay: ref(true),
      seteDiasGrates,
    };
  },
};
</script>
