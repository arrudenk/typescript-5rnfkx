{
  /**
   * My collection is a generic collection, make sure it is typed correctly,
   * such that the lines below result in the correct compile errors
   * 
   * Eliminate all any's.
   * 
   * Note: in this exercise it might be needed to slightly change implementation
   */

  class MyCollection {
    private data: number[]

    constructor(initial?: any) {
      if (initial) this.data = Array.from(initial);
      else this.data = new Array();
    }

    get(index: number): number | 0 {
      return this.data[index];
    }

    add(value: number) {
      this.data.push(value);
    }

    forEach(callback: (value: number, index?: number) => void) {
      for (let i = 0; i < this.data.length; i++) {
        callback(this.data[i], i);
      }
    }

    map<O>(callback:(item: number, index: number) => O): O[] {
      return this.data.map(callback)
    }  
  }

  const c4 = new MyCollection([1, 2, 3])
  
  // No compile errors
  const c1 = new MyCollection();

  const c2 = new MyCollection(new Set([1, 2, 3]))
  c2.add(4)

  const x: number = c2.get(0)

  c2.forEach((value: number) => {
    console.log(value)
  })

  c2.forEach((value: number) => {
    let x: number = value
  })

  const c3 = new MyCollection()

  const y: number = c3.get(0) * 2

  const firstDoubledAsString: string = c3.map(value => "" + (value * 2))[0]

  // Compile errors on each of the following statements:
  c2.add("Test")

  c2.forEach((value: string) => {
    console.log(value)
  })

  const firstDoubledIsNotABoolean: boolean = c3.map(value => "" + (value * 2))[0]
}