import { playMode } from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode1: playMode.sequence,
  currentIndex: -1,
  routerDirection: 'forward'
}

export default state
