import { Injectable } from '@angular/core';
import { DataModel } from './model/dataModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private mochData: DataModel[] = [
    new DataModel(1908,	'Alberta',	'Production potatoes',	'Hundredweight',	'thousands',	1180),
    new DataModel(1908,	'Canada',	'Production potatoes',	'Hundredweight',	'thousands',	44273),
    new DataModel(1908,	'British Columbia',	'Production potatoes',	'Hundredweight',	'thousands',	1908),
    new DataModel(1908,	'Manitoba',	'Production potatoes',	'Hundredweight',	'thousands',	2284),
    new DataModel(1908,	'New Brunswick',	'Production potatoes',	'Hundredweight',	'thousands',	6721),
    new DataModel(1908,	'Nova Scotia',	'Production potatoes',	'Hundredweight',	'thousands',	4730),
    new DataModel(1908,	'Ontario',	'Production potatoes',	'Hundredweight',	'thousands',	13858),
    new DataModel(1908,	'Prince Edward Island',	'Production potatoes',	'Hundredweight',	'thousands',	4396),
    new DataModel(1908,	'Quebec',	'Production potatoes',	'Hundredweight',	'thousands',	10008),
    new DataModel(1908,	'Saskatchewan',	'Production potatoes',	'Hundredweight',	'thousands',	1096),

    new DataModel(1909,	'Alberta',	'Production potatoes',	'Hundredweight',	'thousands',	1560),
    new DataModel(1909,	'Canada',	'Production potatoes',	'Hundredweight',	'thousands',	59453),
    new DataModel(1909,	'British Columbia',	'Production potatoes',	'Hundredweight',	'thousands',	1909),
    new DataModel(1909,	'Manitoba',	'Production potatoes',	'Hundredweight',	'thousands',	2471),
    new DataModel(1909,	'New Brunswick',	'Production potatoes',	'Hundredweight',	'thousands',	7348),
    new DataModel(1909,	'Nova Scotia',	'Production potatoes',	'Hundredweight',	'thousands',	5459),
    new DataModel(1909,	'Ontario',	'Production potatoes',	'Hundredweight',	'thousands',	17679),
    new DataModel(1909,	'Prince Edward Island',	'Production potatoes',	'Hundredweight',	'thousands',	4057),
    new DataModel(1909,	'Quebec',	'Production potatoes',	'Hundredweight',	'thousands',	18513),
    new DataModel(1909,	'Saskatchewan',	'Production potatoes',	'Hundredweight',	'thousands',	2366),

    new DataModel(1910,	'Alberta',	'Production potatoes',	'Hundredweight',	'thousands',	1500),
    new DataModel(1910,	'Canada',	'Production potatoes',	'Hundredweight',	'thousands',	60000),
    new DataModel(1910,	'British Columbia',	'Production potatoes',	'Hundredweight',	'thousands',	1910),
    new DataModel(1910,	'Manitoba',	'Production potatoes',	'Hundredweight',	'thousands',	2500),
    new DataModel(1910,	'New Brunswick',	'Production potatoes',	'Hundredweight',	'thousands',	7400),
    new DataModel(1910,	'Nova Scotia',	'Production potatoes',	'Hundredweight',	'thousands',	5500),
    new DataModel(1910,	'Ontario',	'Production potatoes',	'Hundredweight',	'thousands',	17700),
    new DataModel(1910,	'Prince Edward Island',	'Production potatoes',	'Hundredweight',	'thousands',	4100),
    new DataModel(1910,	'Quebec',	'Production potatoes',	'Hundredweight',	'thousands',	19000),
    new DataModel(1910,	'Saskatchewan',	'Production potatoes',	'Hundredweight',	'thousands',	2400),

  ];


  constructor() { }

  getMockData(): DataModel[] {
    return this.mochData;
  }
}
