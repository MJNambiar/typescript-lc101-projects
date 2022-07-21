import { Cargo } from "./Cargo";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: [];
    astronatus: [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    function sumMass( items: Payload[] ): number {
        for (let index = 0; let index < items.length; index ++) {
            let sumOfItems += items.massKg[index];
        }
        return sumOfItems;
        // return sum of all items using each item's massKg property
    }

    function currentMassKg(): number {
        return this.sumMass( this.astronauts: number, this.cargoItems: number);
    }
    //not right since taking in an array in summass but not in this function
    
    function canAdd( item: Payload) : boolean {
        if (this.currentMassKg)
    }

}

for (let i=0; i<Cargo.length; i++) {
    addCargo += cargo[i].massKg;
    return addCargo;
}