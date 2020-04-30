import { api } from '../../config/api';
import { ApiCallOptions, GenericRestClient } from 'simplerestclients';
import { Promise } from 'synctasks';

export interface Tab {
  description?: string;
  devtoolsFrontendUrl: string;
  faviconUrl?: string;
  id: string;
  title: string;
  type: string;
  url: string;
  webSocketDebuggerUrl: string;
}

export interface BrokerSession {
  proxy: string;
  headless: boolean;
  incognito: boolean;
  id: string;
  idOriginal: string;
  port: number;
  vnc?: number;
  token: string;
  dimensions?: string;
  display: number;
  meta?: any;
  $loki?: number;
}

export interface BrokerParams {
  url?: string;
  proxy?: string;
  headless?: number;
  incognito: number;
  vnc: number;
  dimensions: string;
}

export class BrokerApi extends GenericRestClient {
  private token: string;
  private static instance = null;

  constructor() {
    super(api.broker);
  }

  public static getInstance() {
    if (!BrokerApi.instance) {
      BrokerApi.instance = new BrokerApi();
    }

    return BrokerApi.instance;
  }

  setToken(token: string) {
    this.token = token;

    return true;
  }

  getOptions(): ApiCallOptions {
    return {
      headers: {
        'qalfy-token': this.token
      }
    }
  }

  tabs(id: string): Promise<Tab[]> {
    return this.performApiGet<Tab[]>('tabs/' + id, this.getOptions());
  }

  browse(id: string, params: BrokerParams): Promise<BrokerSession> {
    return this.performApiPost<BrokerSession>('browse/' + id, params, this.getOptions());
  }

  getSession(id: string): Promise<BrokerSession> {
    return this.performApiGet<BrokerSession>('session/' + id, this.getOptions());
  }
}
