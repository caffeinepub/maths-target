import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Registration {
    name: string;
    email: string;
    message?: string;
    board: Board;
    phone: string;
    className: string;
    parentName: string;
}
export enum Board {
    CBSE = "CBSE",
    ICSE = "ICSE"
}
export interface backendInterface {
    getAllRegistrations(): Promise<Array<Registration>>;
    getRegistrationCount(): Promise<bigint>;
    register(registration: Registration): Promise<void>;
}
