export const API_KEY = `AIzaSyCdJ5lYm_N2jZF2qjRMABTGOgbNTGL16lQ`;

export function value_conveter(value){
 if(value >=1000000){
    return Math.floor(value/1000000)+'M'
 }
 else if(value >=1000){
    return Math.floor(value/1000)+'K'
 }
 else{
    return value
 }
}