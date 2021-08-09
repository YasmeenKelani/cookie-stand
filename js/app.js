'use strict';

let time=['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

let LocationArray=[];

let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

  function Location (locationName, minCum, maxCum, avagCookie){
  this.locationName = locationName;
  this.minCum = minCum;
  this.maxCum = maxCum;
  this.avagCookie = avagCookie;
  this.cookieSales = [];
  this.customerNum = [];
  this.totalSales = 0;
  LocationArray.push(this)  
}
Location.prototype.calculatecustomerNum= function(){
   let min = Math.ceil(this.minCum);
  let  max = Math.floor(this.maxCum);
    
    for (let i=0; i<time.length; i++){
        
        this.customerNum.push(Math.floor(Math.random() * (max - min + 1) + min))  
    }
    
  };


  Location.prototype.calculatecookieSales= function(){
    for (let i=0; i<time.length; i++){
      let hourlySales= Math.ceil(this.customerNum[i]*this.avagCookie);
      this.cookieSales.push(hourlySales);
      this.totalSales += hourlySales;
    }
  };
     Location.prototype.render = function () {
         let trEl= document.createElement('tr');
         tableEl.appendChild(trEl)
         let tdEl1 = document.createElement('td');
         trEl.appendChild(tdEl1);
         tdEl1.textContent = `${this.locationName}`;
    for (let i=0;i<time.length;i++)
    {  let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = `${this.cookieSales[i]}`;
     }
    let tdEl5 = document.createElement('td');
     trEl.appendChild(tdEl5);
     tdEl5.textContent = this.totalSales; 
}
       
   
    
    function createTableHeader() {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
     
        let thEl1 = document.createElement('th');
        trEl.appendChild(thEl1);
        thEl1.textContent = '';
     
        for (let x = 0; x <= time.length-1; x++) {
            let thEl1 = document.createElement('th');
            trEl.appendChild(thEl1);
            thEl1.textContent = `${time[x]}`;
     
        }
        //  for (let i=0; i<place.length;i++)
        let thEl10 = document.createElement('th');
        trEl.appendChild(thEl10);
        thEl10.textContent = 'Daily Location Total';
    }
     
    createTableHeader();
     
    function createTableFooter(){
        
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl)
        let thEl20 = document.createElement('td');
        trEl.appendChild(thEl20);
        thEl20.textContent = "total";
     
        let TotalofT =0;
        
        for(let i=0 ; i<time.length;i++){
            let totalSales=0;
             
            for(let j=0 ; j<LocationArray.length;j++){
                totalSales +=LocationArray[j].cookieSales[i];
                TotalofT += LocationArray[j].cookieSales[i];
     
        }
         
    let thEl10 = document.createElement('td');
        trEl.appendChild(thEl10);
        thEl10.textContent = totalSales;
    }
    let thEl70 = document.createElement('td');
        trEl.appendChild(thEl70);
        thEl70.textContent = TotalofT;
    };


    let Seattle= new Location ('seatlle', 23, 65,6.3)
    let Tokyo=   new Location ('Tokyo', 3, 24,1.2)
    let Dubai=   new Location ('Dubai', 11, 38,3.7)
    let Paris=   new Location ('Paris', 20, 38,2.3)
    let Lima=    new Location ('Lima', 2, 16,4.6)
    Seattle.calculatecustomerNum();
    Seattle.calculatecookieSales();
    Seattle.render()

    Tokyo.calculatecustomerNum();
    Tokyo.calculatecookieSales();
    Tokyo.render()

    Dubai.calculatecustomerNum();
    Dubai.calculatecookieSales();
    Dubai.render()

    Paris.calculatecustomerNum();
    Paris.calculatecookieSales();
    Paris.render()

    Lima.calculatecustomerNum();
    Lima.calculatecookieSales();
    Lima.render()
    createTableFooter();







