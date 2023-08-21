// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
      
      const hqLocation = 42; //Schubers Headquarters Location

      const distance = Math.abs (pickupLocation - hqLocation);
     
      return distance; 


//returns the number of blocks given a value
}

const pickupLocation1 = 43;
const distance1 = distanceFromHqInBlocks (pickupLocation1);
console.log(distance1);




function distanceFromHqInFeet (pickupLocation) {
   
      const hqLocation = 42; 
      const blockLength= 264; //length of city blocks in feet 
      const distanceInBlocks = Math.abs(pickupLocation - hqLocation);
      const distanceInFeet = distanceInBlocks * blockLength;
      return distanceInFeet; 

}

const distanceInFeet1 = distanceFromHqInFeet(pickupLocation1);
console.log(distanceInFeet1);

    function distanceTravelledInFeet(startBlock, endBlock) {
        const blockLength = 264; // Length of one city block in feet
        const distanceInBlocks = Math.abs(endBlock - startBlock);
        const distanceInFeet = distanceInBlocks * blockLength; 
        return distanceInFeet; 
    }

 const startBlock1 = 43;
 const endBlocK1 = 48; 
 const distanceTraveled1 = distanceTravelledInFeet(startBlock1, endBlock1,);
console.log(distanceTraveled1);


function calculatesFarePrice(startBlock, endBlock) {
    const blockLength = 264; // Length of one city block in feet
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * blockLength;

    if (distanceInFeet <= 400) {
        return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const fare = (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
        return fare;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25; // Flat fare of $25 for distance between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // Distance over 2500 feet
    }
}


const endBlock1 = 44;
console.log(calculatesFarePrice(startBlock1, endBlock1)); // Output should be 0

const startBlock2 = 34;
const endBlock2 = 32;
console.log(calculatesFarePrice(startBlock2, endBlock2)); // Output should be 2.56

const startBlock3 = 50;
const endBlock3 = 58;
console.log(calculatesFarePrice(startBlock3, endBlock3)); // Output should be 25

const startBlock4 = 34;
const endBlock4 = 24;
console.log(calculatesFarePrice(startBlock4, endBlock4)); // Output should be 'cannot travel that far'


