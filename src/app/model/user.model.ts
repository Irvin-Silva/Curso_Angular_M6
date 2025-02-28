import { Name } from './name.model';
import { Address } from './address.model';

export interface User{
    id:number;
    name: Name;
    email: string;
    address: Address;
    username: string;
    password: string;
    phone: string;

}