import { IItem, IFilterObject } from '../sup-shop/views/sup.model';

interface IDataOperations {
  getFullData(): Promise<IItem[]>;
  getItem(id: string): Promise<IItem>;
  addProduct(data: IItem): void;
  editProduct(data: IItem): void;
  deleteItem(id: string): void;
  getFilteredData(items: IItem[], filterObject?: IFilterObject, ids?: string[]): IItem[];
}

export default class DataOperations implements IDataOperations {
  url: string;
  mod: RequestMode;
  fetchOpts: RequestInit;

  constructor() {

    this.url = 'https://shop-sup-wood.herokuapp.com/products';
    this.mod = 'cors';
    this.fetchOpts = {
      method: 'GET',
      mode: this.mod,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

  }

  async getFullData(): Promise<IItem[]> {
    try {
      const response = await fetch(
        this.url,
        this.fetchOpts,
      );
      const data = await response.json();
      // console.log('Data Ops data:');
      // console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getItem(id: string): Promise<IItem> {
    // console.log("DataOps getItem ID ", id);
    try {
      const response = await fetch(
        `${this.url}/${id}`,
        this.fetchOpts,
      );
      const item = await response.json();
      return item;
    } catch (error) {
      throw error;
    }
  }

  async getSelectedItems(id: string[]): Promise<IItem[]>{
    let items: IItem[] = [];
    for(let i = 0; i < id.length; i++){
      try {
        const response = await fetch(
          `${this.url}/${id[i]}`,
          this.fetchOpts,
        );
        const item: IItem = await response.json();
        items.push(item);
      } catch (error) {
        throw error;
      }
    }
    return items;
  }

  async addProduct(data: IItem){

    const mode: RequestMode = 'cors';

    const fetchOpts = {
        body: JSON.stringify(data),
        method: 'POST',
        mode: mode,
        headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }),
    };
    try {
      console.log('Fetch add product ', data);
        const response = await fetch(this.url, fetchOpts);
        console.log('Fetch response ', response.body);
        return response;
    } catch (error) {
        console.log('Fetch error ', error);
    }
  }

  async editProduct(data: IItem){

    const mode: RequestMode = 'cors';
    const fetchOpts = {
        body: JSON.stringify(data),
        method: 'UPDATE',
        mode: mode,
        headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }),
    };
    try {
        console.log('Fetch edit product ', data);
        const response = await fetch(this.url, fetchOpts);
        console.log('Fetch response ', response.body);
        return response;
    } catch (error) {
        console.log('Fetch error ', error);
    }
  }

  deleteItem(id: string): Promise<Response> {
    console.log('DataOperations delete ', id);
    const mode: RequestMode = 'cors';
    const fetchOpts = {
      method: 'DELETE',
      mode: mode,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    try {
      return fetch(`${this.url}/${id}`, fetchOpts);
    } catch (error) {
      throw error;
    }
  }

  getFilteredData(items: IItem[], filterObject?: IFilterObject, ids?: string[]): IItem[] {
      console.log("setFilteredData items", items);
      let newItems: IItem[] = items;

      

      // if(filterObject.gpumodel.length){
      //     newItems = items
      //     .filter((item) => filterObject.gpumodel
      //         .find((gpumodel) => gpumodel === item.gpumodel) !== undefined);
      // }
      // if(filterObject.producer.length){
      //     newItems = items
      //     .filter((item) => filterObject.producer
      //         .find((producer) => producer === item.producer) !== undefined);
      // }
      // if(filterObject.memorytype.length){
      //     newItems = items
      //     .filter((item) => filterObject.memorytype
      //         .find((memorytype) => memorytype === item.memorytype) !== undefined);
      // }
      // if(filterObject.vram.length){
      //     newItems = items
      //     .filter((item) => filterObject.vram
      //         .find((vram) => vram === item.vram) !== undefined);
      // }
      return newItems;
  }
  

  addToCart(id: string, i: number = 0): boolean {
    if(localStorage.getItem('cartItems')?.includes(id)){
      return false;
    }
    else {
      const newIdsString = localStorage.getItem('cartItems')+` ${id}`;
      localStorage.setItem('cartItems', newIdsString);
  
      console.log('localStorage', localStorage.getItem('cartItems'));
      return true;
    }
  }
}

