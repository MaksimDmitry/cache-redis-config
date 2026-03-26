export interface RedisConfig {
  host: string;
  port: number;
  password?: string;
  db?: number;
  tls?: {
    rejectUnauthorized: boolean;
    ca?: string;
    cert?: string;
    key?: string;
  };
  connectTimeout?: number;
  maxRetriesPerRequest?: number;
  enableOfflineQueue?: boolean;
}

export interface CacheConfig {
  redis: RedisConfig;
  defaultTTL: number;
  namespace?: string;
  keyPrefix?: string;
  serialize?: (value: unknown) => string;
  deserialize?: (value: string) => unknown;
}

export interface CacheClient {
  get: <T>(key: string) => Promise<T | null>;
  set: <T>(key: string, value: T, ttl?: number) => Promise<void>;
  del: (key: string) => Promise<void>;
  flush: () => Promise<void>;
  close: () => Promise<void>;
}