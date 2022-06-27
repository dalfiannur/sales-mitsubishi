import { onMounted, ref } from "vue";
import { HeadlineBanner } from "../typings/HeadlineSlider";

export default function () {
    const data = ref<HeadlineBanner[]>([])

    onMounted(() => {
        for (let i of [1, 2, 3]) {
            data.value.push({
                id: i,
                title: 'Waktunya berkendara dengan mobil idamanmu',
                subTitle: 'Penawaran Special untuk produk yang baru datang',
                subTitle2: 'Diskon sampai dengan 15%.',
                imageSource: '/img/background.webp',
                buttonLink: 'https://wa.me/6281290671767?text=Hallo,%20Saya%20mau%20bertanya%20tentang%20mobil'
            })
        }
    })

    return { data }
}