import { computed, ref, watch } from "vue";
import { range } from "../utils";

const DOTS = "dots";

type Options = {
  page: number;
  siblings: any;
  total: number;
  onChange: (page: number) => void;
  initialPage: number;
  boundaries: any;
};

export function usePagination({
  total,
  initialPage = 1,
  siblings = 1,
  boundaries = 1,
  page,
  onChange,
}: Options) {
  const activePage = ref<number>(page || initialPage);

  const setPage = (pageNumber: number) => {
    if (pageNumber <= 0) {
      activePage.value = 1;
    } else if (pageNumber > total) {
      activePage.value = total;
    } else {
      activePage.value = pageNumber;
    }
  };

  const next = () => setPage(activePage.value + 1);
  const previous = () => setPage(activePage.value - 1);
  const first = () => setPage(1);
  const last = () => setPage(total);

  const paginationRange = computed(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;

    if (totalPageNumbers >= total) {
      return range(1, total);
    }

    const leftSiblingIndex = Math.max(activePage.value - siblings, boundaries);
    const rightSiblingIndex = Math.min(
      activePage.value + siblings,
      total - boundaries
    );

    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1);

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return [
        ...range(1, leftItemCount),
        DOTS,
        ...range(total - (boundaries - 1), total),
      ];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return [
        ...range(1, boundaries),
        DOTS,
        ...range(total - rightItemCount, total),
      ];
    }

    return [
      ...range(1, boundaries),
      DOTS,
      ...range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range(total - boundaries + 1, total),
    ];
  });

  watch(activePage, (active) => {
    onChange(active)
  })

  return {
    range: paginationRange,
    setPage,
    next,
    previous,
    active: activePage,
    first,
    last,
  };
}
