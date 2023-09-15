import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const useStore = create(
  immer(set => ({
    showHeader: true,
    setHeader: value =>
      set(state => {
        state.showHeader = value
      })
  }))
)

export default useStore
