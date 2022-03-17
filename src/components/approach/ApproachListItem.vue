<template>
  <q-item
    :key="key"
    class="q-mb-sm"
  >
    <q-item-section>
      <q-item-label>{{ approach.title }}</q-item-label>
    </q-item-section>

    <q-item-section side class="medium-screen-only">
      <div class="text-grey-8 q-gutter-xs">
        <q-btn
          size="12px"
          flat
          dense
          round
          icon="edit"
          @click.stop="editApproach" />
        <q-btn
          class="gt-xs"
          size="12px"
          flat
          dense
          round
          icon="delete"
          @click.stop="promptToDelete(approach.id)"/>
      </div>
    </q-item-section>

    <q-item-section side class="non-medium-screen-only">
      <q-btn-dropdown flat round dense icon="more_vert">
        <q-list>
          <q-item clickable @click.stop="editApproach">
            <q-item-section>
              <q-item-label>Editar</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable @click.stop="promptToDelete(approach.id)">
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
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'ApproachListItem',
  props: ['approach', 'key'],
  methods: {
    ...mapActions('approach', ['deleteApproach']),

    editApproach() {
      console.log('teste');
    },

    promptToDelete(id) {
      console.log(id);
      this.$q.dialog({
        title: 'Eliminando',
        message: 'Pretende realmente eliminar este registro?',
        cancel: true,
        ok: {
          color: 'negative',
          flat: true,
          label: 'eliminar',
        },
        persistent: true,
      }).onOk(() => {
        this.deleteApproach(id);
      });
    },
  },
});
</script>
