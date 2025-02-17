export interface Launch {
  id: string | undefined;
  mission_name: string | undefined;
  launch_data_utc: string | undefined;
  details: string | undefined;
  links: {
    mission_patch: string | undefined;
  };
}
