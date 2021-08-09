'use strict';
let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let Seattle = 
{
    LocationName : 'Seattle',
    minCum : 23 ,
    maxCum: 65 ,
    AvagCookie : 6.3 ,
    CustomerNum:[],
    cookieSales : [],
    total : 0,

    render : function ()
    {
    let container = document.getElementById('S1');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.LocationName;
    
    let UlEl = document.createElement('ul');
    container.appendChild(UlEl)
    
    for(let i=0 ; i<time.length; i++)
    {
        let LiEl = document.createElement('li');
        UlEl.appendChild(LiEl);
        LiEl.textContent = `${time[i]} : ${ this.cookieSales[i]} cookies`;
    }

    let total= document.createElement('li');
    UlEl.appendChild(total);
     total.textContent= `total: ${this.total}`

    },
    generate :function ()
    {
        for(let i=0;i<time.length;i++)
        { 
            this.cookieSales.push(Math.floor( this.CustomerNum[i] * this.AvagCookie ));
            this.total += this.cookieSales[i];

        }
    },

    getRandom : function () 
    {
       let minCum = Math.ceil(this.minCum);
       let maxCum = Math.floor(this.maxCum);
       for(let i=0;i<time.length;i++)
       {
            this.CustomerNum.push(Math.floor(Math.random() * (maxCum - minCum + 1) + minCum)); 
 
       }
    }
}
;
Seattle.getRandom(23,65);
Seattle.generate ();
Seattle.render();





let Tokyo = 
{
    LocationName : 'Tokyo',
    minCum : 3 ,
    maxCum: 24 ,
    AvagCookie : 1.2 ,
    CustomerNum:[],
    cookieSales : [],
    total : 0,

    render : function ()
    {
    let container = document.getElementById('T1');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.LocationName;
    let UlEl = document.createElement('ul');
    container.appendChild(UlEl)
    
    for(let i=0 ; i<time.length; i++)
    {
        let LiEl = document.createElement('li');
        UlEl.appendChild(LiEl);
        LiEl.textContent = `${time[i]} : ${ this.cookieSales[i]} cookies`;
    }

    let total= document.createElement('li');
    UlEl.appendChild(total);
     total.textContent= `total: ${this.total}`

},
    generate :function ()
    {
        for(let i=0;i<time.length;i++)
        { 
            this.cookieSales.push(Math.floor( this.CustomerNum[i] * this.AvagCookie ));
            this.total += this.cookieSales[i];

        }
    },

    getRandom : function () 
    {
       let minCum = Math.ceil(this.minCum);
       let maxCum = Math.floor(this.maxCum);
       for(let i=0;i<time.length;i++)
       {
            this.CustomerNum.push(Math.floor(Math.random() * (maxCum - minCum + 1) + minCum)); 
 
       }
    }
}
;
Tokyo.getRandom(3,24);
Tokyo.generate ();
Tokyo.render();


let Dubai = 
{
    LocationName : 'Dubai',
    minCum : 11,
    maxCum: 38,
    AvagCookie : 3.7,
    CustomerNum:[],
    cookieSales : [],
    total : 0,
    render : function ()
    {
    let container = document.getElementById('D1');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.LocationName;
    let UlEl = document.createElement('ul');
    container.appendChild(UlEl)
    
    for(let i=0 ; i<time.length; i++)
    {
        let LiEl = document.createElement('li');
        UlEl.appendChild(LiEl);
        LiEl.textContent = `${time[i]} : ${ this.cookieSales[i]} cookies`;
    }

    let total= document.createElement('li');
    UlEl.appendChild(total);
     total.textContent= `total: ${this.total}`

},
    generate :function ()
    {
        for(let i=0;i<time.length;i++)
        { 
            this.cookieSales.push(Math.floor( this.CustomerNum[i] * this.AvagCookie ));
            this.total += this.cookieSales[i];

        }
    },

    getRandom : function () 
    {
       let minCum = Math.ceil(this.minCum);
       let maxCum = Math.floor(this.maxCum);
       for(let i=0;i<time.length;i++)
       {
            this.CustomerNum.push(Math.floor(Math.random() * (maxCum - minCum + 1) + minCum)); 
 
       }
    }
}
;
Dubai.getRandom(11,38);
Dubai.generate ();
Dubai.render();



let Paris = 
{
    LocationName : 'Paris',
    minCum : 20,
    maxCum: 38,
    AvagCookie : 2.3,
    CustomerNum:[],
    cookieSales : [],
    total : 0,

    render : function ()
    {
    let container = document.getElementById('P1');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.LocationName;
    let UlEl = document.createElement('ul');
    container.appendChild(UlEl)
    
    for(let i=0 ; i<time.length; i++)
    {
        let LiEl = document.createElement('li');
        UlEl.appendChild(LiEl);
        LiEl.textContent = `${time[i]} : ${ this.cookieSales[i]} cookies`;
    }
  
    let total= document.createElement('li');
    UlEl.appendChild(total);
     total.textContent= `total: ${this.total}`

},
    generate :function ()
    {
        for(let i=0;i<time.length;i++)
        { 
            this.cookieSales.push(Math.floor( this.CustomerNum[i] * this.AvagCookie ));
            this.total += this.cookieSales[i];
        }
    },

    getRandom : function () 
    {
       let minCum = Math.ceil(this.minCum);
       let maxCum = Math.floor(this.maxCum);
       for(let i=0;i<time.length;i++)
       {
            this.CustomerNum.push(Math.floor(Math.random() * (maxCum - minCum + 1) + minCum));
 
       }
    }
}
;
Paris.getRandom(20,38);
Paris.generate ();
Paris.render();




let Lima = 
{
    LocationName : 'Lima',
    minCum : 11,
    maxCum: 38,
    AvagCookie : 3.7,
    CustomerNum:[],
    cookieSales : [],
    total : 0,

    render : function ()
    {
    let container = document.getElementById('L1');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.LocationName;
    let UlEl = document.createElement('ul');
    container.appendChild(UlEl)
    
    for(let i=0 ; i<time.length; i++)
    {
        let LiEl = document.createElement('li');
        UlEl.appendChild(LiEl);
        LiEl.textContent = `${time[i]} : ${ this.cookieSales[i]} cookies`;
    }

    let total= document.createElement('li');
    UlEl.appendChild(total);
     total.textContent= `total: ${this.total}`

},
    generate :function ()
    {
        for(let i=0;i<time.length;i++)
        { 
            this.cookieSales.push(Math.floor( this.CustomerNum[i] * this.AvagCookie ));
            this.total += this.cookieSales[i];
        }
    },

    getRandom : function () 
    {
       let minCum = Math.ceil(this.minCum);
       let maxCum = Math.floor(this.maxCum);
       for(let i=0;i<time.length;i++)
       {
            this.CustomerNum.push(Math.floor(Math.random() * (maxCum - minCum + 1) + minCum)); 
 
       }
    }
}
;
Lima.getRandom(11,38);
Lima.generate ();
Lima.render();