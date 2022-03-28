<template>
  <div class="flex q-pt-xl flex-center">
  <div class="column" style="min-width: 90%">
    <div class="col q-ma-xs">
      <div class="row">
        <h5 class="col-12 title" style="margin: 20px 0;">Usuários</h5>
        <div class="col-12" style="margin: auto 0;">
          <q-btn size="12px">Adicionar</q-btn>
        </div>
      </div>
    </div>
    <div class="col q-mt-md">
      <q-table
        :dense="$q.screen.lt.md"
        :grid="$q.screen.xs"
        flat
        square
        bordered
        title="Lista de Usuários"
        :visible-columns="['title', 'definition']"
        row-key="title"
      >

      </q-table>
    </div>
    </div>
  </div>
</template>

<script>
import useApi from 'src/composebles/useApi';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'UsersListPage',
  setup(){
    
    const { list, remove } = useApi()

    const users = ref([])
    const getAllUsers = async ()=>{
      users.value = await list('users')
    }
    onMounted(
      ()=>{
        getAllUsers()
      }
    )
  }
});
</script>

<style lang="sass" scoped>
  .q-header
    background-color: #0053ab
  .explore
    width: 80vw
</style>
