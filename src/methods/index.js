

const DASY_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;
const DAYS_IN_YEAR = 365;
const HOURS_IN_DAY = 24;



//
export const getDistancePerSupply = (MGLT,consumables)=>{
    const consumableHours = getConsumableHours(consumables);
    return Math.floor(consumableHours*MGLT);
}

//return consumables in hours
export const getConsumableHours = (consumables)=>{

    const consumableData = sanitizeConsumable(consumables);

    const count = consumableData[0]; // unit reading e.g 2 for 2 Days depending on the unit retunred
    let unit = consumableData[1]; //week | days | month | year

    //strip 's' on `units` we are only interested in the non-pluralised units
    //eg. days = day. the count means evertyhing here.


    const pluralisedIndex = unit.indexOf('s'); //
    unit = pluralisedIndex == -1 ? unit : unit.substring(0,pluralisedIndex);
     

    
    let hours = 0;
    switch (unit) {
        case 'year':
        return hours = Math.floor((DAYS_IN_YEAR*HOURS_IN_DAY)*count)
            break;
        case 'month':
        return hours = Math.floor((DAYS_IN_MONTH*HOURS_IN_DAY)*count)
        break;

        case 'week':
        return hours = Math.floor((DASY_IN_WEEK*HOURS_IN_DAY)*count)
        break;

        case 'day':
        return hours = Math.floor((HOURS_IN_DAY)*count)
        default:
        return hours
    }


}


//
export const sanitizeConsumable = (consumables)=>{

    const numberPattern = /\d+/g;
    const letterPattern = /[a-zA-Z]+/g;

    const count = consumables.match(numberPattern);
    const unit = consumables.match(letterPattern);

    console.log(count[0],unit[0]);

    return [count[0],unit[0]];
}

export const temp = (var1,var2)=>{

}