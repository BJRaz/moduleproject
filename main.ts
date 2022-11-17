import { StringUtils } from "./lib/stringutils";     // local library/module
import { Horse, MyList } from "./mymodule";          //       --
import * as sm from "stringmodule";                 // external library/module
import * as data from "./lib/db";

// generator - returns an iterator
function* f() {
    for(let i=0;i<10;i++)
        yield i;
};

class Hest<T>
{
    public where(cb: (arg: T) => {}) {
        
        return function* f() {
            yield 1;
        };
    }
}

class Main
{
    async getData() {
        return await setTimeout(() => 10, 2000);
    }

    public static Start() : number {

        // calls f() which returns an iterator
        let iterator = f();
        iterator.next();
        for (const item of iterator) {
            console.log(item);
        }
        
        data.getData().then((o : Score[]) => {
            o.forEach(element => {
                console.log(element.game + ', ' + element.created)
            });
        });

        
        return 0;
    }
    public static test() {
        var m = new Main();
        var hest = m.getData().then(v => {
            console.log(v);
        });

        

        console.log(hest);

        console.log("Start");

        console.log(StringUtils.Length("A simple string..."));

        console.log(sm.returnString());

        console.log(sm.reverseString(sm.returnString()));

        var h = new Horse();
        h.findHorse();

        
        var list = new MyList<string>(["1","2","3","4","5"]);
        
        for (const obj of list) {
            console.log(obj);
        }
        
    }
}

Main.Start();
