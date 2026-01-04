function inspectSpacing(selector) {
    const el = document.querySelector(selector);
    const children = el.querySelectorAll('*');
    
    console.log(`=== ${selector} ===`);
    const style = getComputedStyle(el);
    console.log(`padding: ${style.padding}`);
    console.log(`margin: ${style.margin}`);
    
    children.forEach((child, i) => {
        const s = getComputedStyle(child);
        if (s.padding !== '0px' || s.margin !== '0px') {
            console.log(`\n[${i}] ${child.tagName}.${child.className}`);
            console.log(`  padding: ${s.padding}`);
            console.log(`  margin: ${s.margin}`);
        }
    });
}

inspectSpacing('#form');