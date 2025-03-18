interface MapProviderConfig {
    url: string;
    attribution: string;
  }
  
  export const mapProviders: { [key: string]: MapProviderConfig } = {
    osm: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    },
    stamenTerrain: {
      url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>'
    }
  };
  
  export type MapProvider = keyof typeof mapProviders;