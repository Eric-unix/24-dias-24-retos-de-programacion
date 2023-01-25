function wrapping(gifts) {
  const giftsWrapped = [];
  for(let i= 0; i<gifts.length; i++){
    const wrap = '*'.repeat(gifts[i].length + 2);
    giftsWrapped.push(`${ wrap}\n*${ gifts[i]}*\n${ wrap
  }`);
  } 
  return giftsWrapped;
}
