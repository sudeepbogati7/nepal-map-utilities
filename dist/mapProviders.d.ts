interface MapProviderConfig {
    url: string;
    attribution: string;
}
export declare const mapProviders: {
    [key: string]: MapProviderConfig;
};
export type MapProvider = keyof typeof mapProviders;
export {};
