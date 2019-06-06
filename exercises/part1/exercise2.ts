{
  // Extend Todo to support arbitrarily additional properties
  type Todo = {
    title?: string
    done?: boolean | string,
    description?: string | number,
    author?: string,
    dueDate?: Date,
  }

  // Ok:
  const x : Todo = {
    title: "test",
    done: false,
    author: "you"
  }

  const x2 : Todo = {
    title: "test",
    done: false,
    dueDate: new Date()
  }

  // Not ok:
  const y: Todo = { }

  const z: Todo = {
    title: "test",
    done: "nope",
    description: 3,
    author: "you"
  }
}
