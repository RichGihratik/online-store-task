import { defineStore } from 'pinia';
import { ref, type Ref, computed } from 'vue';

import { IFilter, ISort, IProduct, ProductRepository, useStringSort, TProductKeys, TValuesCount } from '@/services';

export const useProductsStore = defineStore('products', () => {
  const _products: Ref<IProduct[]> = ref([]);
  const repo = ProductRepository.getInstance();
  const _productMap: Ref<{ [key: string]: IProduct }> = ref({});

  async function fetchData() {
    _products.value = await repo.fetchProducts();
    _products.value.forEach((item) => (_productMap.value[item.id] = item));
  }

  fetchData();

  const products = computed(() => {
    return _products.value
      .filter((product) => {
        let result = true;
        for (const value of filters.value) {
          result = value[1].reduce((acc, item) => acc && item(product), result);
          if (!result) return false;
        }
        return result;
      })
      .sort(sortType.value);
  });

  const productsRaw = computed(() => {
    return [..._products.value];
  })

  function getProductById(id: string) {
    return _productMap.value[id];
  }

  function countValues<Key extends TProductKeys>(key: Key, map: TValuesCount<Key>) {
    map.forEach((value) => value.count = 0);
    for (const product of products.value) {
      const value = map.get(product[key]);
      value ? value.count++ : null;
    }
  };

  function getValuesCountMap<Key extends TProductKeys>(key: Key): TValuesCount<Key> {
    const result = new Map<IProduct[Key], { count: number, total: number }>();
    for (const product of _products.value) {
      const value = result.get(product[key]);
      if (!value) result.set(product[key], {count: 0, total: 1} );
      else value.total++;
    }

    countValues(key, result);
    return result;
  };

  const filters: Ref<Map<string, IFilter[]>> = ref(new Map());
  const sortType: Ref<ISort> = ref(useStringSort('title'));

  return {
    products,
    filters,
    sortType,
    productsRaw,
    countValues,
    fetchData,
    getProductById,
    getValuesCountMap,
  };
});
