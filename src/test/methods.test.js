
import {getDistancePerSupply} from '../methods'


const name ='Millennium Falcon';
const MGLT = 75; 
const consumables = '2 months';
const distance = 1000000;

const test = `Expect ${name} to be resupplied 9 times for a distance of ${distance}`;

it(test, () => {
    expect(getDistancePerSupply(MGLT,consumables,distance)).toEqual(9);
});

 const _name ='Y-wing';
 const _MGLT = 80; 
 const _consumables = '1 week';
 const _distance = 1000000;

 const _test = `Expect ${_name} to be resupplied 74 times for a distance of ${_distance}`;

it(_test, () => {
    expect(getDistancePerSupply(_MGLT,_consumables,_distance)).toEqual(74);
});


//  Testing for Rebel Transport: 
/**
 * 
 * ERROR 404 : START SHIP NOT FOUND! :)
 *  */   