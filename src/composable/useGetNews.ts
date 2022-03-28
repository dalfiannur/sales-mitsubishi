import { ref, onMounted } from 'vue'
type Options = {
    page: number;
    perPage: number
}

export default function({ page, perPage }: Options) {
    const data = ref<any[]>([])

    const fetcher = () => {
        fetch("https://60447203c0194f00170bbc63.mockapi.io/v1/news")
            .then((response) => response.json())
            .then((result) => {
                data.value = result.slice(page - 1, page * perPage)
            })
    }

    onMounted(() => fetcher())

    return {
        data,
        fetcher
    }
}