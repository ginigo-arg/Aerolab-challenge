export const reducerUser = (userState, action): any => {
  switch (action.type) {
    case "GET_USER": {
      return (userState = action.payload);
    }

    case "UPDATE_COINS":
      userState.points = action.payload;
      return {
        ...userState,
      };

    case "RESTART_COINS":
      userState.points -= action.payload;
      return {
        ...userState,
      };

    default:
      return userState;
  }
};
