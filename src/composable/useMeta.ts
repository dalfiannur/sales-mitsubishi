import { onMounted } from "vue"

interface Option {
    title: string
}

export default function(config: Option) {
    onMounted(() => {
        document.title = config.title
    })
}