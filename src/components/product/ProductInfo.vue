<template>
  <section class="product__info">
    <div class="product__info--header">
      <span class="header__category--title">Category: </span>
      <span class="header__category"> {{ category }}</span>
      <span class="header__brand--title">Brand: </span>
      <span class="header__brand"> {{ brand }}</span>
    </div>
    <div class="product__info--description">
      <span class="description__text--title"> Description: </span>
      <p class="description__text">
        {{ description }}
      </p>
    </div>
    <div class="product__info--return">
      <font-awesome-icon icon="fa-solid fa-arrows-rotate" />
      <span class="return__text">14 days to return the goods</span>
    </div>
    <span v-if="discountPercentage" class="product__info--sale"> Sale {{ discountPercentage }}% </span>
  </section>
</template>

<script lang="ts" setup>
import { IProduct } from '@/services';
import { toRefs, reactive } from 'vue';

const props = defineProps<{
  product: IProduct;
}>();

const { product } = reactive(props);
const { category, brand, description, discountPercentage } = toRefs(product);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.product__info {
  flex-basis: 50%;
  margin-top: 1rem;
  font-weight: 200;

  &--header {
    display: flex;
    flex-direction: column;

    .header__category {
      @include text-style;
    }

    .header {
      &__category--title,
      &__brand--title {
        color: $secondary;
        font-style: italic;
      }
    }
  }

  &--description {
    margin-top: 1rem;

    .description {
      &__text--title {
        color: $secondary;
        font-style: italic;
      }

      &__text {
        margin: 0;
        @include text-style;
      }
    }
  }

  &--return {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin: 1rem 0 0.5rem 0;
    font-size: 0.9rem;

    .fa-arrows-rotate {
      color: $warning;
    }
  }

  &--sale {
    font-weight: 600;
    color: $success;
  }
}
</style>
