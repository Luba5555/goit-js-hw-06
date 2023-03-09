function outputElementsValues(elementId) {
    const elementsChildrenEl = document.querySelector(elementId).children;
    console.log(`Number of categories: ${elementsChildrenEl.length}`);
  
    for (const child of elementsChildrenEl) {
      console.log(`Category: ${child.querySelector('h2').textContent}`);
      console.log(`Elements: ${child.querySelector('ul').children.length}`);
    }
  }
  
  outputElementsValues('#categories');