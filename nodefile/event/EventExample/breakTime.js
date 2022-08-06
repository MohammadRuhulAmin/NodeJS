const School = require('./School')
const school = new School();
school.on('BellRing',({period,message})=>{
    console.log(`${period} + ${message}`) // same variable 
});

school.on('EndClass',({time,message})=>{
    console.log(`${time} + ${message}`)
})



school.startPeriod();
school.endPeriod();

