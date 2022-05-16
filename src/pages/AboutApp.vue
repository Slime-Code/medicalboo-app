<template>
  <q-page padding class="constrain-4">
    <div class="text-h4">
      Sobre o app
    </div>
    <q-separator class="q-my-sm"/>
    <div class="flex column">
      <div class="col self-center" v-if="loading">
        <q-spinner-dots size="3rem" color="primary"/>
      </div>
      <div v-else v-html="aboutApp.conteudo">
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"
import useApi from "../composebles/useApi"

export default defineComponent({
  setup(){
    const { list } = useApi()
    const aboutApp = ref({
      title: "",
      conteudo: ""
    })
    const loading = ref(false)
    async function loadInfo() {
      loading.value = true
      const data = await list('sobreApp')
      aboutApp.value = data[0]
      loading.value = false
    }

    onMounted(
      () => loadInfo()
    )
    return {
      aboutApp,
      loading
    }
  }
})
</script>

<style>

</style>