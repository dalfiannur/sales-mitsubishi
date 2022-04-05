import { ref } from "vue";
import { Product } from "../typings/Product";
import useAxios from "./useAxios";

export default function () {
    const data = ref<Product>()
    const axios = useAxios()

    const fetcher = (slug: string) => {
        axios.get('/products/' + slug)
            .then((response) => response.data)
            .then((result) => {
                data.value = result
            })
    }

    return {
        data,
        fetcher
    }
}