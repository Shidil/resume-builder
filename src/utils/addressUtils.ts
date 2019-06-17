import { Address } from "../models/Address";

export const addressToString = (address: Address) => {
  const result: string[] = [];

  if (address.city) {
    result.push(address.city);
  }

  if (address.state) {
    result.push(address.state);
  }
  
  if (address.country) {
    result.push(address.country);
  }
  
  if (address.pin) {
    result.push(address.pin);
  }

  return result.join(", ");
};