<template>
  <form @submit.prevent class="summary-form">
    <div class="summary">
      <promo-total-prices />
      <promo-list />
      <promo-common-info />
      <promo-input />
      <AppButton @click="modalIsShow = true" class="summary__buy">Buy now</AppButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useModal } from '@/store';
import { PromoList, PromoInput, PromoTotalPrices, PromoCommonInfo } from '@/components/cart/promo/_index';

const { modalIsShow } = storeToRefs(useModal());
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.summary-form {
  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: sticky;
    top: 80px;
    padding: 1rem;
    background-color: $white;
    border-radius: 12px;
    @include apply-shadow;

    &__buy {
      margin-top: 1rem;
      width: 100%;
    }
  }
}
</style>
