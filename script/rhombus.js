function rhombus() {
    const d1input = document.getElementById('d1Input');
    const d1value = d1input.value;
    const d1 = parseFloat(d1value);
    console.log(d1)



    const d2input = document.getElementById('d2Input');
    const d2value = d2input.value;
    const d2 = parseFloat(d2value);
    console.log(d2);

    const area = 0.5 * d1 * d2;
    console.log(area);


    const finalArea = document.getElementById('rhombusArea')
    finalArea.innerText = area;
}