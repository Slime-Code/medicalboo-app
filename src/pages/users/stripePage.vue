<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Pagar agora!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    const publishableKey = 'pk_test_51KwV3WHT6eyluporXSVjSq8KDeSJBAZTDd2BtmY6YF4p7idvO0udZgH528S6tBRWa34aeSOCRWycsAsi6Rb8vSiK00nfqVRZD4';
    return {
      publishableKey,
      loading: false,
      lineItems: [
        {
          price: 'some-price-id', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'your-success-url',
      cancelURL: 'your-cancel-url',
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      // this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>