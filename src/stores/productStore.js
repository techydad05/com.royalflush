import { createClient } from  "../client.js";
import { writable } from "svelte/store";
export const productStore = writable([]);

export const getProducts = async () => {
    const client = createClient();
    const { products } = await client.products.list();
    console.log(client);
    console.log(products);
    productStore.set(products);
};