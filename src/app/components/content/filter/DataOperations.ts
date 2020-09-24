import data from  '../../../../assets/shop-items.json';
import { IGpusModel, IItem, IFilterObject } from '../views/gpus.model';

export interface DataOperations{
    fullData: IGpusModel;
    getFullData(): IGpusModel;
    getFilteredData(): IGpusModel;
    FetchData(url: string): IGpusModel;
}

export class DataOperations{

    getFullData(): IGpusModel { return data; }

    setFilteredData({items, gpuStats}: IGpusModel, filterObject: IFilterObject): IItem[] {
        console.log("setFilteredData items", items);
        let newItems: IItem[] = items;
        if(filterObject.gpumodel.length){
            newItems = items
            .filter((item) => filterObject.gpumodel
                .find((gpumodel) => gpumodel === item.gpumodel) !== undefined); 
        }
        if(filterObject.producer.length){
            newItems = items
            .filter((item) => filterObject.producer
                .find((producer) => producer === item.producer) !== undefined); 
        }
        if(filterObject.memorytype.length){
            newItems = items
            .filter((item) => filterObject.memorytype
                .find((memorytype) => memorytype === item.memorytype) !== undefined); 
        }
        if(filterObject.vram.length){
            newItems = items
            .filter((item) => filterObject.vram
                .find((vram) => vram === item.vram) !== undefined); 
        }
        return newItems;
    }

    filteringData(){
        let filteredData = this.getFullData();
        return filteredData;
    }
}