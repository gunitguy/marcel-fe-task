import { Tube } from "../types";

class TubesDataStorage {
  private tubes: Tube[];

  constructor() {
    this.tubes = [];
  }

  getTubes() {
    return this.tubes;
  }

  setTubes(data: Tube[]) {
    this.tubes = data;
  }
}

export default new TubesDataStorage();
