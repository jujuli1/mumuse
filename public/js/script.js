

const cursor = document.querySelector('.fond')
const sourie = cursor.addEventListener('mousemove', function(event) {
    let x = event.clientX;
    let y = event.clientY;
    

  
    cursor.computedStyleMap.left = (x - 50) + 'px';
    cursor.computedStyleMap.top = (y - 50) + 'px';
  
    console.log(x, y);

    if ( x === 1000 || x === 1250 && y === 280 || y === 550)  {

        console.log('Iles Brisée');
   
  };

  
});


