const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const getListing = (state) => state.list.listing;

export const getError = (state) => state.list.error;

export const getIsLoading = (state) => state.list.isLoading;

export const getShow = (state) => state.list.show;

export const getParams = (state) => state.list.cca3;

export const getDetails = (state) => state.details.details;

export const getErrorDetails = (state) => state.details.error;

export const getIsLoadingDetails = (state) => state.details.isLoading;

export default getIsLoggedIn;
