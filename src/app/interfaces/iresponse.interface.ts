import { IEmployee } from "./iemployee.interface";

export interface Iresponse {
    results: IEmployee[];
    pages: Ipages,
}

export interface Ipages {
    "page": number;
    "per_page": number;
    "total": number;
    "total_pages": number;
}
