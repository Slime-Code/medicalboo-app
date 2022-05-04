<template>
  <q-page padding class="constrain-4">
    <div class="q-pa-md col-md-4 col-sm-6 col-xs-10 q-gutter-y-lg">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        :autoplay="autoplay"
        ref="carousel"
        infinite
      >
        <q-carousel-slide :name="1" img-src="img/prescrição.png" />
        <q-carousel-slide :name="2" img-src="img/calculadoras.png" />
        <q-carousel-slide :name="3" img-src="img/prescrição.png" />
        <q-carousel-slide :name="4" img-src="img/BG-FULL.png" />

        <template v-slot:control>
          <q-carousel-control
            position="top-right"
            :offset="[18, 18]"
            class="text-white rounded-borders"
            style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
          >
            <q-toggle dense dark color="orange" v-model="autoplay" label="Play & stop" />
          </q-carousel-control>

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
        Fornecemos as evidências fundamentada na experiência clínica dos médicos mais
        notáveis do mundo
      </p>
      <div class="col column flex q-gutter-sm">
        <q-btn class="col" color="green-5" rounded label="Experimente 7 Dias Gratis" :to="{ name: 'home' }" />
        <q-btn class="col" color="grey-5" rounded unelevated dense label="agora Não" :to="{ name: 'home' }" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
