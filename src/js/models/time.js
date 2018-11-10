import axios from 'axios';
import {state} from '../index';
import getAge from 'get-age';
import DateDiff from 'date-diff';
import * as timeView from '../views/timeView';
import Timer from 'timer';


export default class Time{
    constructor(){
        this.oldTime = {};
        this.newTime = {};
        this.age = {};
        this.month = [ '','January, February','March', 'April', 'May', 'June','July', 'August','September', 'October', 'November', 'December'];
    }

    getOldTime(){
        
        this.oldTime.year = prompt('Enter the year of birth');
        this.oldTime.month = prompt('Enter the month of birth');
        this.oldTime.day = prompt('Enter the day of birth');
        //test
        // this.oldTime.year = 1997;
        // this.oldTime.month = 7;
        // this.oldTime.day = 16;
}

    getNewTime(){
        const d = new Date();
        this.newTime.year = d.getFullYear();
        this.newTime.month = d.getMonth();
        this.newTime.day = d.getDate();

    }
    getAge(){
        const date1 = new Date(this.newTime.year, this.newTime.month, this.newTime.day); 
        const date2 = new Date(this.oldTime.year, this.oldTime.month, this.oldTime.day);
            
        const diff = new DateDiff(date1, date2);

        this.age.years = Math.floor(diff.years()); 
        this.age.months = this.getmonth();
        this.age.days = this.getDays();
        this.age.hours = state.date.getHours();
        this.age.minutes = state.date.getMinutes();
        this.secondCalc(); 
        timeView.initialUpdate(state.time.age);
        
    }

    getmonth(){
        if(this.newTime.month - this.oldTime.month > 0){
            return (this.newTime.month - this.oldTime.month)
        }else if(this.newTime.month - this.oldTime.month < 0){
            return (12 - this.newTime.month - this.oldTime.month)
        }
    }

    getDays(){
        if(this.newTime.day - this.oldTime.day > 0){
            return (this.newTime.day - this.oldTime.day)
        }else if(this.newTime.day - this.oldTime.day < 0){
            return (30 - this.newTime.day - this.oldTime.day)
        }
    }
    yearCalc(years){
        this.age.years = years + 1;
        timeView.updateYears(this.age.years);
    }

    monthCalc(months){
        months = months + 1;
        if(months == 11){
            months = 0;
            this.age.months = months;
            timeView.updateMonths(this.age.months);
            this.yearCalc(this.age.years);

        }else{
            this.age.months = months;
            timeView.updateMonths(this.age.months);
        }
        

    }
    dayCalc(days){
        days = days + 1;
        //condition for February
        if(days == 27 && this.age.months == 2 && this.newTime.years%4 != 0){
            days = 0;
            this.age.days = days;
            timeView.updateDays(this.age.days);
            this.monthCalc(this.age.months);
            //condition for leap year
        }else if(days == 28 && this.age.months == 2 && this.newTime.years%4 == 0){
            days = 0;
            this.age.days = days;
            timeView.updateDays(this.age.days);
            this.monthCalc(this.age.months);
        }else if(days == 29 && this.newTime.month%2 == 1){
            days = 0;
            this.age.days = days;
            timeView.updateDays(this.age.days);
            this.monthCalc(this.age.months);
        }else if(days == 30 && this.newTime.month%2 == 0){
            days = 0;
            this.age.days = days;
            timeView.updateDays(this.age.days);
            this.monthCalc(this.age.months);
        }else{
            this.age.days = days;
         timeView.updateDays(this.age.days);
        }
        
    }
    hourCalc(hours){
        hours = hours + 1;
        if(hours == 24){
            this.age.hours = 0;
            
            timeView.updateHours(this.age.hours);
            this.dayCalc(this.age.days);
        }else{
            this.age.hours = hours;
            timeView.updateHours(this.age.hours);
        }
        
    }
    minuteCalc(minutes){
        minutes = minutes + 1;
        if(minutes == 60){
            this.age.minutes = 0;
            timeView.updateMinutes(this.age.minutes);
            this.hourCalc(this.age.hours);
            
        }else{
            this.age.minutes = minutes;
            timeView.updateMinutes(this.age.minutes);
        }
        

    }
    secondCalc(){
        this.age.seconds = Math.floor(Math.random() * (+60 - +1)) + +1; 
     

        const cancel = setInterval(() =>{
            this.age.seconds  += 1;
            timeView.updateSeconds(this.age.seconds);
            if(this.age.seconds == 60){
                this.age.seconds = 0;
                timeView.updateSeconds(this.age.seconds);
                this.minuteCalc(this.age.minutes);
            }
            // el.innerText = `${seconds}`;
        }, 1000);
        
    }
}