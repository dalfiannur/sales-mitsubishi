import { onMounted, ref } from "vue";

export default function (slug: string) {
    const data = ref<any>({});

    onMounted(() => {
        fetch("https://60447203c0194f00170bbc63.mockapi.io/v1/news/" + slug)
            .then((response) => response.json())
            .then((result) => {
                data.value = result
            })
    })

    return { data };
}
