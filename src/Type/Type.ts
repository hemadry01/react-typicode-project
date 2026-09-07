export interface Typecode{
    id:number,
    name:string,
    email:string,
    username:string,

    address:{
        street:string,
        suite:string,
        city:string,
        zipcode:string
    }
}