export const showModalA = (infoArr) => {
  return {
    type: "SHOW_MODAL",
    payload: infoArr,
  };
};

export const popBgA = (onoff) => {
  return {
    type: "POP_BG",
    payload: onoff,
  };
};
