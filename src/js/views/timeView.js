import state from '../index'

export const updateSeconds = (s) => {
    if(s == 0){
        document.querySelector('.seconds').innerHTML = '00';
    }else{
        document.querySelector('.seconds').innerHTML = s;
    }};

export const updateMinutes = (m) => {
    console.log(m);
    if(m == 0){
        
        document.querySelector('.minutes').innerHTML = '00';
    }else if(m != 0){
        
        document.querySelector('.minutes').innerHTML = m;
    }
};

export const updateHours = (h) => {
    if(h == 0){
        document.querySelector('.hours').innerHTML = '00';

    }else{
        document.querySelector('.hours').innerHTML = h;
    }};

export const updateDays = (d) => {
    if(d == 0){
        document.querySelector('.days').innerHTML = '00';

    }else{
        document.querySelector('.days').innerHTML = d;
    }
};

export const updateMonths = (m) => {
    if(m == 0){
        document.querySelector('.months').innerHTML = '00';

    }else{
        document.querySelector('.months').innerHTML = m;
    }};

export const updateYears = (y) => {

        document.querySelector('.years').innerHTML = y;
}

export const initialUpdate = (e) =>{
    
    document.querySelector('.minutes').innerHTML = e.minutes;
    document.querySelector('.hours').innerHTML = e.hours;
    document.querySelector('.days').innerHTML = e.days;
    document.querySelector('.months').innerHTML = e.months;
    document.querySelector('.years').innerHTML = e.years;

};