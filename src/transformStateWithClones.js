'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
/* function transformStateWithClones(state, actions) {
  let cloneState = { ...state };
  const result = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        if (action.extraData) {
          cloneState = { ...cloneState, ...action.extraData };
        }
        break;

      case 'removeProperties':
        if (Array.isArray(action.keysToRemove)) {
          cloneState = { ...cloneState };

          for (const key of action.keysToRemove) {
            delete cloneState[key];
          }
        }
        break;

      case 'clear':
        for (const key in cloneState) {
          cloneState = {};
        }
        break;
    }
  }
  result.push({ ...cloneState });

  return result;
} */

function transformStateWithClones(state, actions) {
  let cloneState = { ...state };
  const result = [];

  for (const i of actions) {
    if (i.type === 'addProperties') {
      cloneState = { ...cloneState, ...i.extraData };
    }

    if (i.type === 'removeProperties') {
      for (const key of i.keysToRemove) {
        delete cloneState[key];
      }
    }

    if (i.type === 'clear') {
      for (const key in cloneState) {
        delete cloneState[key];
      }
    }
    result.push({ ...cloneState });
  }

  return result;
}

module.exports = transformStateWithClones;
