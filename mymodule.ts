export class Horse {
    findHorse() {
        return "This returns a horse...";
    }
}


export class MyList<T> implements Iterator<T> {
    index: number;
    
    constructor(protected values: Array<T>) {
        this.index = 0;    
    }

    next(value?: any): IteratorResult<T> {
        return new MyIteratorResult<T>(this.index === this.values.length, this.values[this.index++]);
    }

    [Symbol.iterator] = () => {
        return this;
    }
}

class MyIteratorResult<T>  {   //implements IteratorResult<T>

    constructor(protected isDone: boolean, protected hasValue : T) {
        this.done = isDone;
        this.value = hasValue;
    }
    done: boolean;    
    value: T;
}

