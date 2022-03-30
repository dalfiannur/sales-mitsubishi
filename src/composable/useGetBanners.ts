import { onMounted, ref } from "vue";
import { Banner } from "../typings/Banner";

export default function () {
  const data = ref<Banner[]>([
    {
      source: 'https://assets.mitsubishi-motors.co.id/articles/1638196306-foto-lead-1-minjpg.jpg',
    },
    {
      source: 'https://asset.kompas.com/crops/9ylfBy0J6rKhyWU3LUZWRy3tlYg=/90x0:720x420/750x500/data/photo/2020/07/06/5f02951cc4187.jpg',
    },
    {
      source: 'https://statik.tempo.co/data/2019/12/15/id_897862/897862_720.jpg',
    },
    {
      source: 'https://assets.mitsubishi-motors.co.id/articles/1555353054-mobile.jpeg',
    },
    {
      source: 'https://cdn.motor1.com/images/mgl/G3y1mx/s3/mitsubishi-eclipse-cross-ralliart-style.webp',
    }
  ])

  return { data }
}