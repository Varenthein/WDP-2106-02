/* selectors */

export const getDeviceType = ({ deviceType }) => deviceType;

/* action name creator */

const reducerName = 'deviceType';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

const SET_WIDTH = createActionName('SET_WIDTH');

/* action creators */

export const setWidth = payload => ({ payload, type: SET_WIDTH });

/* reducer */
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SET_WIDTH: {
      let screenType = '';
      if (action.payload < 786) {
        screenType = 'mobile';
      } else if (action.payload < 992) {
        screenType = 'ipad';
      } else {
        screenType = 'desktop';
      }
      return screenType;
    }
    default:
      return statePart;
  }
}
