class Watch {
    constructor(){}
    static showTime(){
        this.date = new Date();
        this.h =  this.date.getHours()
        this.m =  this.date.getMinutes()
        this.s =  this.date.getSeconds()
        if(this.s < 10) {this.s = '0' + this.s.toString()}
        if(this.h < 10) {this.h = '0' + this.h.toString()}
        if(this.m < 10) {this.m = '0' + this.m.toString()}
        var time = this.h + ':' + this.m + ':' + this.s
        document.querySelector('.clock').innerText = time
        setTimeout(Watch.showTime, 1000)
    }
}


w = new Watch();
Watch.showTime();