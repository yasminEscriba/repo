import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    endpoint: string='https://roulettemillionaire.azurewebsites.net/api/';
    timeout_spinsroulette: number=4;
    constructor(){
    }   
}