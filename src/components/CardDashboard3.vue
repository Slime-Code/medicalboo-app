<template>
    <div style="margin-top: 20px; min-width: 100px" class="my_card">
      <div class="content_person top">
        <h6>Artigos Cadastrados Em {{ titulo }} Categorias</h6>
      </div>
      <div class="content_person footer">
        <i :class="icon"><q-icon name="receipt"/></i>
        <p class="qtd">{{ quantidade }}</p>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardDashboard',
  props: {
    titulo: {
      type: Number,
      default: 0,
    },

    percentagem: {
      type: Number,
      default: 1,
    },

    icon: {
      type: String,
      default: 'folder',
    },

    quantidade: {
      type: Number,
      default: 1,
    },
  },
});
</script>

<style lang="scss" scoped>
  .my_card {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
    background-color: #DC3545;
    color:white;
    padding: 0 10px;
    border-radius: 10px;

    .content_person {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
    }

    @media (min-width: $breakpoint-md-max) {
      .content_person {
        font-size: 1.4em;
        margin: 20px 0;
      }
    }

    p{
      font-size: 0.9em;
    }

    .top {
      h6 {
        margin: 0;
      }
      .percentagem {
        color: greenyellow;
        font-weight: bold;
      }
    }

    .footer {
      font-size: 0.9em;
      i {
        font-size: 30px;
      }
    }

    @media (max-width: $breakpoint-md-max) {
      .footer {
        .qtd {
          font-size: 20px;
        }
      }
    }
    @media (max-width: 305px) {
      font-size: 0.7em;
      .content_person {
        margin: 5px 0;
      }
    }
  }
</style>
