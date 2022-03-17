<template>
  <q-item
    :key="key"
    class="q-mb-sm"
    clickable v-ripple
  >
    <q-item-section>
      <q-item-label>{{ approach.title }}</q-item-label>
    </q-item-section>

    <q-item-section side class="medium-screen-only">
      <div class="text-grey-8 q-gutter-xs">
        <q-btn size="12px" flat dense round icon="edit" />
        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
      </div>
    </q-item-section>

    <q-item-section side class="non-medium-screen-only">
      <q-btn-dropdown flat round dense icon="more_vert">
        <q-list>
          <q-item clickable v-close-popup @click.stop="onItemClick">
            <q-item-section>
              <q-item-label>Editar</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click.stop="onItemClick">
            <q-item-section>
              <q-item-label>Eliminar</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategoryListItem',
  props: ['approach', 'key'],
});
</script>
