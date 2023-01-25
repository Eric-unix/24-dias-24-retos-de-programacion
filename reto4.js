function fitsInOneBox(boxes) {
    //l => longitud, w => anchura, h => altura
    return boxes.sort((a,b)=> a.l -b.l).every((box, i)=>{
      if(i == boxes.length-1) return true
      const cajaSig = boxes[i+1];
      const nextBox = box.l < cajaSig.l && box.w < cajaSig.w && box.h < cajaSig.h
      return nextBox
    })
  }