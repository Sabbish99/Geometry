function parallelogram() {
    const parallelogramBase = document.getElementById('paraBase');
    parallelogramText = parallelogramBase.value;
    const base = parseFloat(parallelogramText)
    console.log(base);

    const parallelogramHeight = document.getElementById('paraHeight');
    parallelogramText = parallelogramHeight.value;
    const height = parseFloat(parallelogramText);
    console.log(height);

    const area = base * height;
    console.log(area);

    parallelogramArea = document.getElementById('parallelogramArea');
    parallelogramArea.innerText = area;


}