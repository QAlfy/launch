import { BrokerApi } from '../connectors/broker';
import { BrokerParams } from '../connectors/broker';
import { BrokerSession } from '../connectors/broker';
import { tabsFetch } from './tabs';

export function sessionHasErrored(err = null) {
  console.error(err);

  return {
    type: 'SESSION_HAS_ERRORED',
    hasErrored: err !== null,
    msg: err
  };
}

export function sessionIsLoading(bool: boolean) {
  return {
    type: 'SESSION_IS_LOADING',
    isLoading: bool
  };
}

export function sessionIsAvailable(session: BrokerSession) {
  return {
    type: 'SESSION_AVAILABLE_SUCCESS',
    session
  };
}


export function browseIsStarting(bool: boolean) {
  return {
    type: 'BROWSE_IS_STARTING',
    bool
  };
}

export function browseHasFinished(session: BrokerSession) {
  return {
    type: 'BROWSE_HAS_FINISHED',
    session
  };
}

export function browse(sessionId: string, params: BrokerParams) {
  return (dispatch) => {
    dispatch(browseIsStarting(true));

    BrokerApi.getInstance().browse(sessionId, params)
      .then((response) => {
        dispatch(browseIsStarting(false));

        return response;
      })
      .then((session) => {
        dispatch(sessionIsAvailable(session));
        dispatch(tabsFetch(session.idOriginal));
      })
      .catch((err) => {
        dispatch(browseIsStarting(false));
        dispatch(sessionHasErrored(err));
      });
  };
}

export function getSession(sessionId: string) {
  return (dispatch) => {
    dispatch(sessionIsLoading(true));

    BrokerApi.getInstance().getSession(sessionId)
      .then((response) => {
        dispatch(sessionIsLoading(false));

        return response[0] || null;
      })
      .then((session) => {
        dispatch(sessionIsAvailable(session));

        if (session) {
          dispatch(tabsFetch(session.idOriginal))
        }

        return session;
      })
      .catch((err) => {
        dispatch(sessionIsLoading(false));
        dispatch(sessionHasErrored(err));
      });
  };
}

export function setToken(token: string) {
  BrokerApi.getInstance().setToken(token);

  return {
    type: 'TOKEN_IS_SET',
    token
  };
}
