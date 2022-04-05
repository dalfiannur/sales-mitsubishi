import { ref, onMounted } from 'vue'
import { Product } from '../typings/Product';
import useHttp from './useAxios';

type Options = {
    page: number;
    perPage: number;
}

export default function ({ page, perPage }: Options) {
    const data = ref<Product[]>([])
    const http = useHttp()

    onMounted(() => {
        const query = new URLSearchParams()
        query.set('page', page.toString())
        query.set('per_page', perPage.toString())

        http.get("/products?" + query.toString())
            .then((response) => response.data)
            .then((result) => {
                data.value = result.data
            })
    })

    return {
        data
    }
}