declare namespace CSS {
  let paintWorklet: paintWorklet;
}

interface paintWorklet {
  addModule(moduleURL: string | URL, options?: WorkletOptions): Promise<void>;
}