
const isbnbtn = document.getElementById("isbnbtn");
const makeisbnbtn = document.getElementById("makeisbnbtn");


isbnbtn.addEventListener("click", function() {
    const isbnval = document.getElementById('isbntext').value
    let isbnresult = 0;
    
    if (isbnval.length === 13) {
        for (let position = 0; position < isbnval.length - 1; position++) {
            let num = parseInt(isbnval[position]);
            if ((position + 1) % 2 === 0) {
                isbnresult = isbnresult + num * 3;
            } else {
                isbnresult = isbnresult + num;
            }
        }
        
        let checkDigit = (10 - (isbnresult % 10)) % 10;
        let lastDigit = parseInt(isbnval[isbnval.length - 1]);
        
        if (checkDigit === lastDigit) {
            alert("This is a valid ISBN number structure");
        } else {
            alert("These numbers do not form a valid ISBN number");
        }
    } else {
        alert("The number is not the right length!");
    }
});

makeisbnbtn.addEventListener("click", function() {
  const isbnval = document.getElementById('isbntext');

  let pad = Math.floor(Math.random() * 10).toString();
  let isbnresult = 0;
  let isbngen = Math.floor(Math.random() * 100000000000).toString().padStart(12, pad); 


  if (isbngen.length === 12) {
      for (let position = 0; position < isbngen.length; position++) {
          let num = parseInt(isbngen[position]);
          if ((position + 1) % 2 === 0) {
              isbnresult = isbnresult + num * 3;
          } else {
              isbnresult = isbnresult + num;
          }
      }

      let checkDigit = (10 - (isbnresult % 10)) % 10;
      isbnval.value = isbngen.concat(checkDigit.toString());

    
      // alert("Generated ISBN with check digit: " + isbnval.value);
  } 
});

