const EventEmitter = require('events');
class School extends EventEmitter{
    startPeriod(){
        console.log('Class Started');
        setTimeout(()=>{
            this.emit('BellRing',{
                period:'First Period',
                message : 'Class has Finished'
            });
        },3000)
    }
    endPeriod(){
        console.log('Class has Ended');
        setTimeout(()=>{
            this.emit('EndClass',{
                time:'12:40PM',
                message:'Today class is closed!'
            })
        },3000)
    }
}

module.exports = School;