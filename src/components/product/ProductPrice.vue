<template>
  <div class="price__wrapper">
    <section class="product__price-info">
      <div class="product__prices">
        <span v-if="discountPercentage" class="product__price--fix">
          <my-number :input="getFixPrice" :fixed="2" /> $
        </span>
        <span :class="{ crossed: discountPercentage }" class="product__price--full">
          <my-number :input="price" :fixed="2" /> $
        </span>
      </div>
      <div class="product__stock">Left in stock: {{ stock }}pc.</div>
      <div class="product__buttons">
        <my-button class="button__cart" @click="updateCart">{{ buttonStatus }}</my-button>
        <my-button class="button__fast-buy" @click.passive="fastBuy">Buy</my-button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { IProduct } from '@/services';
import { toRefs, reactive, computed } from 'vue';
import { useCartStore, useModalStore } from '@/store';
import router from '@/router';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  product: IProduct;
}>();

const { product } = reactive(props);
const { id, price, discountPercentage, stock } = toRefs(product);
const { addProduct, dropProduct, findProduct } = useCartStore();
const { modalIsShow } = storeToRefs(useModalStore());

const getFixPrice = computed((): number => {
  return price.value * (1 - discountPercentage.value / 100);
});

const buttonStatus = computed((): string => {
  if (findProduct(id.value)) {
    return 'Drop from cart';
  } else {
    return 'Add to cart';
  }
});

const updateCart = (): void => {
  if (findProduct(id.value)) {
    dropProduct(product);
  } else {
    addProduct(product);
  }
};

const fastBuy = (): void => {
  router.push({ name: 'cart' });
  modalIsShow.value = true;
  addProduct(product);
  document.body.style.overflow = 'hidden';
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.price__wrapper {
  flex-basis: 20%;
  font: {
    size: 1.3rem;
    weight: 600;
  }

  .product__price-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: sticky;
    top: 1rem;
    padding: 1rem;
    background-color: white;
    border-radius: 10px;
    @include apply-shadow;

    .product {
      &__prices {
        display: flex;
        align-items: flex-end;
        gap: 1rem;

        .crossed {
          font: {
            size: 0.8em;
            weight: 400;
          }
          color: $danger;
          text-decoration: line-through;
        }
      }

      &__stock {
        font-size: 1rem;
        font-weight: 400;
        color: $secondary;
      }

      &__buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;

        .button__cart {
          min-width: 10.1em;
        }
      }
    }
  }
}
</style>