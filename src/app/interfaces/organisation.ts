export interface Organisation {
  id: number;
  name: string;
  organisation_id: number;
  password: string;
  contact_number: string;
  address: string;
  pin_code: number;
  createdOn: string | Date;
  lastUpdate: string | Date;
}
export interface OrganisationLogin {
  userName: string;
  password: string;
}
