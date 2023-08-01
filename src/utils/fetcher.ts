export const fetchGetRevalidate = async (url: string, revalidate: number) => {
  try {
    const res = await fetch(url, { cache: 'no-cache' })
    const data = await res.json()
    return data
  } catch (e) {
    const err = e as Error
    throw new Error(`failed fetchGetRevalidate ${err.message}`)
  }
}
