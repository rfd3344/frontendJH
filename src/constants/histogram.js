

export const MIN_YAXIS = 5;
export const SVG_WIDTH = 1000;
export const SVG_HEIGHT = 600;

export const ACTIONS = {
  CHANGE_YAXIS: 'CHANGE_YAXIS',
  CHANGE_READONLY: 'CHANGE_READONLY',
  CHANGE_BAR: 'CHANGE_BAR',
};

export const INITIAL_STATE = {
  maxYAxis: 15,
  readOnly: false,
  bars: [
    { color: 'blue', value: 0 },
    { color: 'green', value: 6 },
    { color: 'pink', value: 10 },
    { color: 'orange', value: 15 },
    // { color: 'darkblue', value: 2 },
    // { color: 'green', value: 6 },
    // { color: 'pink', value: 10 },
    // { color: 'orange', value: 12 },
  ],
};
