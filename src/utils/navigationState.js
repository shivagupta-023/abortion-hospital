// Module-level variable — resets on browser refresh, persists during SPA navigation
let _scrollTarget = null;

export const setScrollTarget = (target) => { _scrollTarget = target; };

export const getAndClearScrollTarget = () => {
  const t = _scrollTarget;
  _scrollTarget = null;
  return t;
};
