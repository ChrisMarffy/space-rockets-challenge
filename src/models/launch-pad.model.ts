export interface ILaunchPad {
  site_id: number;
  name: string;
  site_name_long: string;
  stats: string;
  status: string;
  attempted_launches: number;
  successful_launches: number;
  vehicles_launched: string[];
  location: {
    name: string;
    region: string;
    latitude: number;
    longitude: number;
  };
}
