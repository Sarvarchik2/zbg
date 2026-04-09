import { ref, computed } from 'vue'

const currentLocale = ref('RU')

export const useLocale = () => {
  const setLocale = (lang: string) => {
    currentLocale.value = lang
  }

  const locale = computed(() => currentLocale.value)

  return {
    locale,
    setLocale
  }
}
