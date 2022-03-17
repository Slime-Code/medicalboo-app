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
      <q-list bordered class="rounded-borders"
        style="min-width: 160px; width:100%;">
          <q-item-label header><strong>Lista de usuários</strong></q-item-label>

            <q-separator/>

          <q-item>
            <q-item-section>
              <q-item-label class="q-mt-sm">Geral</q-item-label>
            </q-item-section>

            <q-item-section top side class="medium-screen-only">
              <div class="text-grey-8 q-gutter-xs">
                <q-btn class="gt-xs" size="12px" flat dense round icon="visibility" />
                <q-btn size="12px" flat dense round icon="edit" />
                <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
              </div>
            </q-item-section>
            <q-item-section top side class="non-medium-screen-only">
              <q-btn-dropdown flat round dense icon="more_vert">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Ver</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Editar</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Eliminar</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item-section>
          </q-item>

          <q-separator/>

          <q-item>
            <q-item-section>
              <q-item-label class="q-mt-sm">Geral</q-item-label>
            </q-item-section>

            <q-item-section top side class="medium-screen-only">
              <div class="text-grey-8 q-gutter-xs">
                <q-btn class="gt-xs" size="12px" flat dense round icon="visibility" />
                <q-btn size="12px" flat dense round icon="edit" />
                <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
              </div>
            </q-item-section>
            <q-item-section top side class="non-medium-screen-only">
              <q-btn-dropdown flat round dense icon="more_vert">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Ver</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Editar</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Eliminar</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UsersListPage',
});
</script>

<style lang="sass" scoped>
  .q-header
    background-color: #0053ab
  .explore
    width: 80vw
</style>
