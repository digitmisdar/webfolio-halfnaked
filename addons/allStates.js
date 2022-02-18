import createStore from 'teaful'

export const { useStore, getStore, withStore } = createStore({
  menuOpen: false,
  ProjectsSeen: false
});