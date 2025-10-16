function totup(myForm) {
  let total = 0;
  
  const entries = myForm.elements.entry;
  
  if (entries) {

    const entryElements = (entries.length) ? entries : [entries];

    for (let i = 0; i < entryElements.length; i++) {
      const entryValue = parseFloat(entryElements[i].value);
     
      if (!isNaN(entryValue)) {
        total += entryValue;
      }
    }
  }

  console.log("total", total);

  const discountValue = parseFloat(myForm.elements.d1.value);
  if (!isNaN(discountValue)) {
    total = total * (1 - (discountValue / 100));
  }

  document.getElementById("totalled").innerHTML = total.toFixed(2);
}
