<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import FormItem from "../components/FormItem.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import Select from "../components/Select.vue";
import usePaginationGetter from "../composable/usePaginationGetter";
import { Product } from "../typings/Product";
import useEntityGetter from "../composable/useEntityGetter";
import ChecklistIcon from "../components/ChecklistIcon.vue";

const data = reactive({
  name: "",
  email: "",
  phone: "",
  city: "",
  tenor: "",
  budget: "",
  car: "",
  type: "",
  message: "",
});

const tenor = [
  {
    label: "1 Tahun",
    value: 1,
  },
  {
    label: "2 Tahun",
    value: 2,
  },
  {
    label: "3 Tahun",
    value: 3,
  },
  {
    label: "4 Tahun",
    value: 4,
  },
  {
    label: "5 Tahun",
    value: 5,
  },
];

const { data: carList } = usePaginationGetter<Product>({
  path: "products",
  perPage: 1000,
  autoFetch: true,
});

const { data: product, fetcher } = useEntityGetter<Product>(null, {
  path: "products",
  autoFetch: false,
});

const cars = computed(() =>
  carList.value.map((item) => ({ value: item.name, label: item.name }))
);

const types = computed(() =>
  product.value?.types.map((item) => ({ value: item.name, label: item.name }))
);

const onCarChange = (value: string | number) => {
  data.car = value as string;
  fetcher(value);
};

const send = () => {
  const query = new URLSearchParams();
  const budget = Intl.NumberFormat("ID-id").format(+data.budget);
  const text = `Saya ${data.name} dari ${data.city} ingin mengajukan kredit mobil dengan data sebagai berikut:\n\nMobil:\n${data.car}\n\nTipe:\n${data.type}\n\nTenor:\n${data.tenor} tahun\n\nBudget DP:\nRp. ${budget}\n\nEmail:\n${data.email}\n\n${data.message}.`;
  query.set("text", text);
  query.set("phone", "6282261050567");
  fetch("https://api.whatsapp.com/send?" + query.toString());
};
</script>
<template>
  <div class="flex justify-center pt-20">
    <div class="flex-1 max-w-screen-lg">
      <div class="flex gap-5">
        <div class="flex-1">
          <h3 class="text-3xl font-semibold text-secondary">Nama Sales</h3>
          <p class="mt-3">
            Segera hubungi saya!. Karena disini saya menawarkan yang terbaik. Minta diskon
            atau mau konsultasi terlebih dahulu? Boleh!, hubungi sekarang!.
          </p>
          <ul class="mt-10">
            <li class="flex items-center gap-3">
              <ChecklistIcon />
              <span>Diskon Terbaik dibulan ini</span>
            </li>
            <li class="flex items-center gap-3">
              <ChecklistIcon />
              <span>Paling Update</span>
            </li>
            <li class="flex items-center gap-3">
              <ChecklistIcon />
              <span>Proses Kredit Cepat, Mudah, Data dibantu, Aman & Terpercaya</span>
            </li>
            <li class="flex items-center gap-3">
              <ChecklistIcon />
              <span>Proses Kredit dibantu sampai Kredit Di Approve</span>
            </li>
            <li class="flex items-center gap-3">
              <ChecklistIcon />
              <span>
                Pelayanan Terbaik, Profesional, Fast Response, Berpengalaman, &amp;
                Terpercaya
              </span>
            </li>
            <li class="flex items-center gap-3">
              <ChecklistIcon />
              <span>Dealer Resmi Mitsubishi Terpercaya</span>
            </li>
            <li class="flex items-center gap-3">
              <ChecklistIcon />
              <span>Kredit Dp rendah mulai 20%</span>
            </li>
            <li class="flex items-center gap-3">
              <ChecklistIcon />
              <span>Terima Perpanjangan asuransi</span>
            </li>
            <li class="flex items-center gap-3">
              <ChecklistIcon />
              <span>Bonus Free Accecories</span>
            </li>
          </ul>
        </div>

        <div class="flex-1">
          <img
            class="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr6-pJxmOCwhl1dAQ0NC8FRRP9nriu-X-cmg&usqp=CAU"
          />
        </div>
      </div>

      <div class="mt-20">
        <h2 class="text-2xl font-semibold text-white">Pengajuan Kredit</h2>
        <div class="mt-5">
          <div class="grid grid-cols-3 gap-5">
            <div>
              <FormItem label="Nama Anda">
                <Input v-model="data.name" />
              </FormItem>
              <FormItem label="Email">
                <Input v-model="data.email" />
              </FormItem>
              <FormItem label="No HP/Telepon/Whatsapp">
                <Input v-model="data.phone" />
              </FormItem>
            </div>
            <div>
              <FormItem label="Kota">
                <Input v-model="data.city" />
              </FormItem>
              <FormItem label="Tenor">
                <Select :items="tenor" v-model="data.tenor" />
              </FormItem>
              <FormItem label="Budget DP">
                <Input v-model="data.budget" />
              </FormItem>
            </div>

            <div>
              <FormItem label="Mobil">
                <Select :items="cars" @change="onCarChange" />
              </FormItem>
              <FormItem label="Tipe">
                <Select :items="types || []" v-model="data.type" />
              </FormItem>
              <FormItem label="Pesan Anda">
                <Input type="textarea" v-model="data.message" />
              </FormItem>
              <Button @click="send" class="w-full">Kirim Pengajuan</Button>
            </div>
          </div>
        </div>

        <div class="mt-20 max-w-[460px]"></div>
      </div>
    </div>
  </div>
</template>
