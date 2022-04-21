import { onMounted, ref, watch } from "vue";
import useAxios from "./useAxios";

interface Option {
  path: string;
  perPage: number;
  autoFetch?: boolean;
}

export default function usePaginationGetter<T>(option: Option) {
  const axios = useAxios()
  const data = ref<T[]>([])
  const currentPage = ref<number>(1)
  const perPage = ref<number>(option.perPage)
  const totalPage = ref<number>(0)
  const isLoading = ref<boolean>(false)
  const isError = ref<boolean>(false)
  const error = ref<Error>()
  const order = ref<{ by: string, asc: boolean }>({
    by: 'created_at',
    asc: false
  })

  const getQueries = () => {
    const query = new URLSearchParams()
    query.set("page", currentPage.value.toString())
    query.set("perPage", perPage.value.toString())
    query.set('orderBy', order.value.by)
    query.set('orderAsc', order.value.asc ? 'true' : 'false')
    return query.toString()
  }

  const setPage = (page: number) => {
    currentPage.value = page
  }

  const setPerPage = (page: number) => {
    perPage.value = page
  }

  const setOrder = (by: string, asc: boolean) => {
    order.value.by = by
    order.value.asc = asc
  }

  const setTotalPage = ({ total, per_page }: { total: number, per_page: number }) => {
    totalPage.value = Math.ceil(Math.floor(total / per_page))
  }

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

  const fetcher = () => {
    isLoading.value = true
    isError.value = false
    error.value = undefined

    const queries = getQueries()

    axios.get(`${option.path}?${queries}`)
      .then((response) => response.data)
      .then((result) => {
        data.value = result.data
        setTotalPage(result.meta)
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
      fetcher()
    }
  })

  watch([currentPage, perPage, order], () => {
    fetcher()
  })

  return {
    data,
    currentPage,
    perPage,
    totalPage,
    fetcher,
    setPage,
    setPerPage,
    setOrder,
    onSuccess,
    onError,
  }
}