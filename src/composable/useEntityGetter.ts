import { onMounted, ref, watch } from "vue";
import useAxios from "./useAxios";

interface Option {
  path: string;
  autoFetch: boolean;
}

export default function useEntityGetter<T>(idOrSlugDefault: string|number|null, option: Option) {
  const axios = useAxios()
  const data = ref<T>()
  const isLoading = ref<boolean>(false)
  const isError = ref<boolean>(false)
  const error = ref<Error>()

  const onSuccess = (callback: () => void) => {
    watch(data, () => {
      callback()
    })
  }

  const onError = (callback: (error?: Error) => void) => {
    watch(isError, (err) => {
      if (err) {
        callback(error.value)
      }
    })
  }

  const fetcher = (idOrSlug: string|number) => {
    isLoading.value = true
    isError.value = false
    error.value = undefined

    axios.get(option.path + '/' + idOrSlug)
      .then((response) => response.data)
      .then((result) => {
        data.value = result.data
      })
      .catch(() => {
        isError.value = true
        error.value = new Error("Error")
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  onMounted(() => {
    if (option.autoFetch) {
      if (idOrSlugDefault) fetcher(idOrSlugDefault)
    }
  })

  return {
    data,
    fetcher,
    onSuccess,
    onError,
  }
}