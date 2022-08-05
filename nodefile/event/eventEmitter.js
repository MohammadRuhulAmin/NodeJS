const EventEmitter = require('events'); // it provides a class ! 
const Emitter = new EventEmitter();

Emitter.on('BellRing',()=>{
    console.log('We Need To Run ...!');
});


/**
 * emit means =>> making a noice / produce - singnalling 
 */
Emitter.emit('BellRing');


// Register a listener for classStarted Event
Emitter.on('classStarted',(value1)=>{
    console.log(`class has started ${value1}`)
})


// Raise an event
setTimeout(()=>{
    Emitter.emit('classStarted','Second Period will be finished');
},2000)



Emitter.on('CallForDuty',({message1,message2})=>{
    setTimeout(()=>{
        console.log(`JOSS ! ${message1} + ' => ' ${message2}`)
    },2000)
})

Emitter.emit('CallForDuty',{
    message1:'This is Message One',
    message2:'This is Message Two'
});



// Register a listener 
Emitter.on('Goal',({goalOne,goalTwo})=>{
    console.log('Yee Goal !!')
    console.log(`${goalOne} + ' ' + ${goalTwo}`);
})

// Raise an event!
Emitter.emit('Goal',{
    goalOne:'Goal One is Done',
    goalTwo : 'Goal Two is Done'
})