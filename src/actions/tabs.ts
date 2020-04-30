import { BrokerApi } from '../connectors/broker';

export function tabsHasErrored(err = null) {
  console.error(err);

  return {
    type: 'TABS_HAS_ERRORED',
    hasErrored: err !== null,
    msg: err
  };
}

export function tabsIsLoading(bool) {
  return {
    type: 'TABS_IS_LOADING',
    isLoading: bool
  };
}

export function tabsFetchSuccess(tabs) {
  return {
    type: 'TABS_FETCH_SUCCESS',
    tabs
  };
}

export function tabsFetch(sessionId) {
  return (dispatch) => {
    dispatch(tabsIsLoading(true));

    BrokerApi.getInstance().tabs(sessionId)
      .then((response) => {
        dispatch(tabsIsLoading(false));

        return response;
      })
      .then((tabs) => dispatch(tabsFetchSuccess(tabs)))
      .catch((err) => {
        dispatch(tabsIsLoading(false));
        dispatch(tabsHasErrored(err));
      });
  };
}
