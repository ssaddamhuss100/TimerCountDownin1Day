const endDate = new Date('23 sep,2024 20:00:00').getTime();
const startDate = new Date().getTime();


function updateTimer(){
const now = new Date().getTime();
const distanceCovered = npw-startDate;
const distancePending = endDate -now;

//calculate days, min , hrs, sec
//1 day = 24 * 60 * 60 * 1000 ms

const oneDayInMillis = (24 * 60 * 60 * 1000 );
const oneHourInMillis = (60*60*1000);
const oneMinuteInMillis = (60*1000);
const oneSecondInMillis = (1000);
const days =  Math.floor(distancePending % (oneDayInMillis));

const hrs =  Math.floor(distancePending%(24 * 60 * 60 * 1000 )/(60 * 60 * 1000 ));

const mins =  Math.floor(distancePending%(60 * 60 * 1000 )/(60 * 1000));

const secs =  Math.floor(distancePending%(60 * 1000 )/(1000));


//populate in UI











}