export function tabsHasErrored(state = false, action) {
  switch (action.type) {
    case 'TABS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function tabsIsLoading(state = false, action) {
  switch (action.type) {
    case 'TABS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function tabs(state = [], action) {
  switch (action.type) {
    case 'TABS_FETCH_SUCCESS':
      return action.tabs;

    default:
      return state;
  }
}
