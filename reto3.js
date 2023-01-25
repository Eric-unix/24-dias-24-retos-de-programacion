function distributeGifts(packOfGifts, reindeers) {
    let weightGifts = 0;
    let maxWeightReindeers = 0;
  
    packOfGifts.forEach( (gift) => {
      weightGifts += gift.length;
    });
  
    reindeers.forEach( (reindeer) => {
      maxWeightReindeers += (reindeer.length * 2);
    });
  
    return Math.floor(maxWeightReindeers / weightGifts);
  }