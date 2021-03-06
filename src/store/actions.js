import * as types from './mutation-types'
export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list)
  commit(types.SET_PLATLIST, list)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}

export const updateRouterDirect = function ({commit, state}, val) {
  commit(types.UPDATE_ROUTER_DIRECTION, val)
}
