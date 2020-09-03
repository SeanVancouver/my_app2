export const showModal = (infoArr) => {
  return {
    type: "SHOW_MODAL",
    payload: infoArr,
  };
};

export const popBgAction = (onoff) => {
  return {
    type: "BG_POPS",
    payload: onoff,
  };
};
