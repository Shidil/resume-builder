import { Address } from "./Address";

export interface PersonalInfo {
  firstName: string;
  middleName?: string;
  lastName: string;
  address: Address;
  phone: string;
  email: string;
}