export function sessionHasErrored(state = false, action) {
  switch (action.type) {
    case 'SESSION_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function sessionIsLoading(state = false, action) {
  switch (action.type) {
    case 'SESSION_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function sessionIsAvailable(state = false, action) {
  switch (action.type) {
    case 'SESSION_AVAILABLE_SUCCESS':
      return action.session;

    default:
      return state;
  }
}

export function token(state = false, action) {
  switch (action.type) {
    case 'TOKEN_IS_SET':
      return action.token;

    default:
      return state;
  }
}