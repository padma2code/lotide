    const assertEqual = function(actual, expected) {
    if (actual !== expected) {
    console.log(`🔴️🔴️🔴️Assertion Failed: ${actual} !== ${expected}`);
    } else {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
    }
    };
    
    const countOnly = function(allItems, itemsToCount) {
        myreturnObject = {  };
        for(var i in itemsToCount)
        {
            let found = 0
            if (itemsToCount[i]===true)
            {
                
                for(let j=0; j < allItems.length;j++)
                {
                    
                    if(i === allItems[j])
                    {
                        found++;
                        
                    }

                    myreturnObject[i] = found;
                    
                    
                }

            }
        }
        
        //console.log(myreturnObject);
        return myreturnObject
        
    }
    const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
      ];
      
      const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
      
      console.log(result1);
      assertEqual(result1["Jason"], 1);
      assertEqual(result1["Karima"], undefined);
      assertEqual(result1["Fang"], 2);
      assertEqual(result1["Agouhanna"], undefined);
      assertEqual({ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false },1);

      const results = {}
      assertEqual(results, 1);
       
