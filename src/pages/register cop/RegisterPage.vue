<template>
  <div class="q-pa-md">
    <q-btn label="Reset" push color="white" text-color="primary" @click="reset" class="q-mb-md" />

    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="green-13"
      animated
    >
      <q-step
        :name="1"
        icon="settings"
        :done="done1"
      >
        For each ad campaign that you create, you can control how much you're willing to
        spend on clicks and conversions, which networks and geographical locations you want
        your ads to show on, and more.

        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="green-13" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        icon="create_new_folder"
        :done="done2"
      >
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="green-13" label="Continue" />
          <q-btn flat @click="step = 1" color="green-13" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        icon="add_comment"
        :done="done3"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="green-13" @click="done3 = true" label="Finish" />
          <q-btn flat @click="step = 2" color="green-13" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FirstStepPage',
  setup() {
    const step = ref(1);
    const done1 = ref(false);
    const done2 = ref(false);
    const done3 = ref(false);

    return {
      step,
      done1,
      done2,
      done3,

      reset() {
        done1.value = false;
        done2.value = false;
        done3.value = false;
        step.value = 1;
      },
    };
  },
});
</script>

<style scoped>
  .q-header {
    background-color: #0053ab;
  }
  .explore {
    width: 80vw;
  }
  .login-content {
    margin-top: 40px;
    margin-bottom: auto;
    height: 100%;
  }

  .login-cab {
    padding: 0 10px;
    margin-bottom: 30px;
  }

  .login-title {
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  .login-text-area .q-field {
    margin-top: 0;
    margin-bottom: 0;
  }

  .login-btn-area {
    margin-top: 40px;
  }

  .login-content .q-btn {
    margin: 5px 0;
  }
</style>
