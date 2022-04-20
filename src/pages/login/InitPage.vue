<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="constrain">

      <div v-if="$q.screen.width <= 599">
          <q-img src="img/BG.png" loading="lazy" height="100%">
      </q-img>
         <q-inner-loading
        :showing="true"
        color="white"
        class="bg-transparent"
      />
      </div>

      <div v-else class="column items-center absolute-center q-gutter-y-lg" style="width: 300px; height: 300px">
         <q-img  src="img/logo-original.png"/>
        <q-spinner-dots
          color="primary"
          size="4em"
        />
      </div>
      
    </q-page>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import {useRouter} from 'vue-router'
export default defineComponent({
  name: "InitPage",
  setup() {
     const $router = useRouter()
    onMounted(() => {
      setTimeout(() => {

        $router.push({name: 'login'})

      }, 2500)
    })
    return {};
  },
});
</script>

<style scoped>
.q-btn {
  min-width: 100%;
  border: 0.5px solid #49d166;
  color: #ffff;
  padding: 5px 30px;
  margin-top: 5px;
}
</style>
