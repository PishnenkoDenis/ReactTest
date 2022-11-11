const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const getListing = (state) => state.list.listing;

export const getError = (state) => state.list.error;

export const getIsLoading = (state) => state.list.isLoading;

export const getShow = (state) => state.list.show;

export default getIsLoggedIn;
