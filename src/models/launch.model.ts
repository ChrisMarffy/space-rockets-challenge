export interface ILaunch {
  flight_number: number;
  mission_name: string;
  launch_success: boolean;
  rocket: {
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: {
        core_serial: string;
        land_success: boolean;
      }[];
    };
    second_stage: {
      block: number;
      payloads: { payload_type: string }[];
    };
  };
  launch_site: {
    site_name: string;
    site_name_long: string;
    site_id: string;
  };
  launch_date_utc: string;
  launch_date_local: string;
  links: {
    mission_patch_small: string;
    flickr_images: string;
    youtube_id: string;
  };
}
