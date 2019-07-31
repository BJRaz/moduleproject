import { StringUtils } from "./lib/stringutils"     // local library/module
import { Horse, MyList } from "./mymodule"          //       --
import * as sm from "stringmodule";                 // external library/module

class Main
{
    public static Start() : number {

        console.log("Start");

        console.log(StringUtils.Length("A simple string..."));

        console.log(sm.returnString());

        console.log(sm.reverseString(sm.returnString()));

        var h = new Horse();
        h.findHorse();
        
        var list = new MyList([1,2,3,4,5]);
        
        for (const obj of list) {
            console.log(obj);
        }
        
        return 0;
    }

}

Main.Start();
