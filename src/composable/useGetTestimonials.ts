import { onMounted, ref } from "vue"
import { Testimonial } from "../typings/Testimonial"
import faker from '@faker-js/faker'

export default function () {
  const data = ref<Testimonial[]>([])

  onMounted(() => {
    const _data: Testimonial[] = [];
    for (let item in new Array(5).fill(0)) {
      _data.push({
        image: faker.image.image(undefined, undefined, true),
        avatar: faker.image.avatar(),
        content: faker.lorem.paragraph(2),
        name: faker.name.findName(),
      })
    }
    console.log(_data)
    data.value = _data
  })

  return { data }
}