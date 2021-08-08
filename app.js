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
        LiEl.textContent = `${time[i]} : ${ this.cookieSales[i]}`;
    }
},
    generate :function ()
    {
        for(let i=0;i<time.length;i++)
        { 
            this.cookieSales.push( this.CustomerNum[i] * this.AvagCookie );
        }
    },

    getRandom : function () 
    {
       let minCum = Math.ceil(this.minCum);
       let maxCum = Math.floor(this.maxCum);
       for(let i=0;i<time.length;i++)
       {
            this.CustomerNum.push(Math.floor(Math.random() * (maxCum - minCum + 1) + minCum)); //The maximum is inclusive and the minimum is inclusive
 
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
        LiEl.textContent = `${time[i]} : ${ this.cookieSales[i]}`;
    }
},
    generate :function ()
    {
        for(let i=0;i<time.length;i++)
        { 
            this.cookieSales.push( this.CustomerNum[i] * this.AvagCookie );
        }
    },

    getRandom : function () 
    {
       let minCum = Math.ceil(this.minCum);
       let maxCum = Math.floor(this.maxCum);
       for(let i=0;i<time.length;i++)
       {
            this.CustomerNum.push(Math.floor(Math.random() * (maxCum - minCum + 1) + minCum)); //The maximum is inclusive and the minimum is inclusive
 
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
        LiEl.textContent = `${time[i]} : ${ this.cookieSales[i]}`;
    }
},
    generate :function ()
    {
        for(let i=0;i<time.length;i++)
        { 
            this.cookieSales.push( this.CustomerNum[i] * this.AvagCookie );
        }
    },

    getRandom : function () 
    {
       let minCum = Math.ceil(this.minCum);
       let maxCum = Math.floor(this.maxCum);
       for(let i=0;i<time.length;i++)
       {
            this.CustomerNum.push(Math.floor(Math.random() * (maxCum - minCum + 1) + minCum)); //The maximum is inclusive and the minimum is inclusive
 
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
        LiEl.textContent = `${time[i]} : ${ this.cookieSales[i]}`;
    }
},
    generate :function ()
    {
        for(let i=0;i<time.length;i++)
        { 
            this.cookieSales.push( this.CustomerNum[i] * this.AvagCookie );
        }
    },

    getRandom : function () 
    {
       let minCum = Math.ceil(this.minCum);
       let maxCum = Math.floor(this.maxCum);
       for(let i=0;i<time.length;i++)
       {
            this.CustomerNum.push(Math.floor(Math.random() * (maxCum - minCum + 1) + minCum)); //The maximum is inclusive and the minimum is inclusive
 
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
        LiEl.textContent = `${time[i]} : ${ this.cookieSales[i]}`;
    }
},
    generate :function ()
    {
        for(let i=0;i<time.length;i++)
        { 
            this.cookieSales.push( this.CustomerNum[i] * this.AvagCookie );
        }
    },

    getRandom : function () 
    {
       let minCum = Math.ceil(this.minCum);
       let maxCum = Math.floor(this.maxCum);
       for(let i=0;i<time.length;i++)
       {
            this.CustomerNum.push(Math.floor(Math.random() * (maxCum - minCum + 1) + minCum)); //The maximum is inclusive and the minimum is inclusive
 
       }
    }
}
;
Lima.getRandom(11,38);
Lima.generate ();
Lima.render();


