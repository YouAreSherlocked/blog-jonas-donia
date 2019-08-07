import types from './types';

export const switchMode = mode => ({
  type: types.SWITCH_MODE,
  mode: mode
});

export default {
  switchMode
}