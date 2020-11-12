import { trace } from 'console';
import data from  '../../../../assets/shop-items.json';
import { IGpusModel, IItem, IFilterObject } from '../views/gpus.model';

export interface DataOperations{
    fullData: IGpusModel;
    getFullData(): Promise<IItem[]>;
    getFilteredData(): IGpusModel;
    FetchData(url: string): IGpusModel;
}

export class DataOperations{

    fetchOpts = {
        method: 'GET', // or 'PUT'
        mode: 'cors' as RequestMode,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    };

    async getFullData(): Promise<IItem[]> {
        try {
            const response = await fetch('http://localhost:3000/products', this.fetchOpts);
            const data = await response.json();
            console.log('Data Ops data:');
            console.log(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // setFilteredData(items: Promise<IGpusModel>, filterObject: IFilterObject): IItem[] {
    //     console.log("setFilteredData items", items);
    //     let newItems: IItem[] = items;
    //     if(filterObject.gpumodel.length){
    //         newItems = items
    //         .filter((item) => filterObject.gpumodel
    //             .find((gpumodel) => gpumodel === item.gpumodel) !== undefined); 
    //     }
    //     if(filterObject.producer.length){
    //         newItems = items
    //         .filter((item) => filterObject.producer
    //             .find((producer) => producer === item.producer) !== undefined); 
    //     }
    //     if(filterObject.memorytype.length){
    //         newItems = items
    //         .filter((item) => filterObject.memorytype
    //             .find((memorytype) => memorytype === item.memorytype) !== undefined); 
    //     }
    //     if(filterObject.vram.length){
    //         newItems = items
    //         .filter((item) => filterObject.vram
    //             .find((vram) => vram === item.vram) !== undefined); 
    //     }
    //     return newItems;
    // }
}