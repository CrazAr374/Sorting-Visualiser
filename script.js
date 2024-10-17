document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    let array = [];
    let sorting = false;
    let paused = false;
    let selectedAlgorithm = null;
    let comparisons = 0;
    let swaps = 0;
    let startTime = 0;
    let timerInterval;

    // Get DOM elements
    const visualization = document.getElementById('visualization');
    const arraySizeInput = document.getElementById('arraySize');
    const arraySizeValue = document.getElementById('arraySizeValue');
    const speedInput = document.getElementById('sortingSpeed');
    const speedValue = document.getElementById('speedValue');
    const generateArrayBtn = document.getElementById('generateArray');
    const startSortBtn = document.getElementById('startSort');
    const pauseSortBtn = document.getElementById('pauseSort');
    const resetSortBtn = document.getElementById('resetSort');
    const algorithmCards = document.querySelectorAll('.algorithm-card');
    const themeToggle = document.getElementById('themeToggle');
    const loadingScreen = document.getElementById('loading-screen');
    
    // Stats elements
    const comparisonsElement = document.getElementById('comparisons');
    const swapsElement = document.getElementById('swaps');
    const timeElapsedElement = document.getElementById('timeElapsed');

    // Hide loading screen after 1 second
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 1000);

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Generate initial array
    function generateArray() {
        const size = parseInt(arraySizeInput.value);
        array = Array.from({length: size}, () => Math.floor(Math.random() * 100) + 1);
        renderArray();
        resetStats();
    }

    // Render array as bars
    function renderArray() {
        visualization.innerHTML = '';
        const maxValue = Math.max(...array);
        array.forEach((value, idx) => {
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = `${(value / maxValue) * 100}%`;
            visualization.appendChild(bar);
        });
    }

    // Reset statistics
    function resetStats() {
        comparisons = 0;
        swaps = 0;
        comparisonsElement.textContent = '0';
        swapsElement.textContent = '0';
        timeElapsedElement.textContent = '0.00s';
        if (timerInterval) clearInterval(timerInterval);
    }

    // Update timer
    function startTimer() {
        startTime = Date.now();
        timerInterval = setInterval(() => {
            const elapsed = (Date.now() - startTime) / 1000;
            timeElapsedElement.textContent = elapsed.toFixed(2) + 's';
        }, 10);
    }

    // Sleep function for animation delay
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Swap function with animation
    async function swap(i, j) {
        const bars = document.querySelectorAll('.bar');
        bars[i].classList.add('selected');
        bars[j].classList.add('selected');
        
        await sleep(101 - speedInput.value);
        
        [array[i], array[j]] = [array[j], array[i]];
        [bars[i].style.height, bars[j].style.height] = [bars[j].style.height, bars[i].style.height];
        
        swaps++;
        swapsElement.textContent = swaps;
        
        bars[i].classList.remove('selected');
        bars[j].classList.remove('selected');
    }

    // Compare function
    function compare(i, j) {
        comparisons++;
        comparisonsElement.textContent = comparisons;
        return array[i] - array[j];
    }

    // Sorting Algorithms
    async function bubbleSort() {
        const n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (paused) await new Promise(resolve => {
                    const checkPause = () => {
                        if (!paused) resolve();
                        else setTimeout(checkPause, 100);
                    };
                    checkPause();
                });
                
                if (compare(j, j + 1) > 0) {
                    await swap(j, j + 1);
                }
            }
        }
    }

    async function quickSort(start = 0, end = array.length - 1) {
        if (start >= end) return;

        async function partition(start, end) {
            const pivot = array[end];
            let i = start - 1;

            for (let j = start; j < end; j++) {
                if (paused) await new Promise(resolve => {
                    const checkPause = () => {
                        if (!paused) resolve();
                        else setTimeout(checkPause, 100);
                    };
                    checkPause();
                });

                if (compare(j, end) < 0) {
                    i++;
                    await swap(i, j);
                }
            }
            await swap(i + 1, end);
            return i + 1;
        }

        const pivotIndex = await partition(start, end);
        await quickSort(start, pivotIndex - 1);
        await quickSort(pivotIndex + 1, end);
    }

    async function mergeSort(start = 0, end = array.length - 1) {
        if (start >= end) return;

        const mid = Math.floor((start + end) / 2);
        await mergeSort(start, mid);
        await mergeSort(mid + 1, end);
        await merge(start, mid, end);
    }

    async function merge(start, mid, end) {
        const leftArray = array.slice(start, mid + 1);
        const rightArray = array.slice(mid + 1, end + 1);
        let i = 0, j = 0, k = start;
    
        while (i < leftArray.length && j < rightArray.length) {
            if (paused) await new Promise(resolve => {
                const checkPause = () => {
                    if (!paused) resolve();
                    else setTimeout(checkPause, 100);
                };
                checkPause();
            });
    
            // Comparing elements and updating the array
            if (leftArray[i] <= rightArray[j]) {
                array[k] = leftArray[i];
                i++;
            } else {
                array[k] = rightArray[j];
                j++;
            }
            await updateBar(k);
            k++;
        }
    
        // Copy remaining elements
        while (i < leftArray.length) {
            array[k] = leftArray[i];
            await updateBar(k);
            i++;
            k++;
        }
    
        while (j < rightArray.length) {
            array[k] = rightArray[j];
            await updateBar(k);
            j++;
            k++;
        }
    }
    
    async function mergeSort(start = 0, end = array.length - 1) {
        if (start >= end) return;
    
        const mid = Math.floor((start + end) / 2);
        await mergeSort(start, mid);
        await mergeSort(mid + 1, end);
        await merge(start, mid, end);
    }
    

    async function updateBar(index) {
        const bars = document.querySelectorAll('.bar');
        const maxValue = Math.max(...array);
        bars[index].style.height = `${(array[index] / maxValue) * 100}%`;
        bars[index].classList.add('selected');
        await sleep(101 - speedInput.value);
        bars[index].classList.remove('selected');
    }

    async function heapSort() {
        const n = array.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            await heapify(n, i);
        }

        for (let i = n - 1; i > 0; i--) {
            await swap(0, i);
            await heapify(i, 0);
        }
    }

    async function heapify(n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && compare(left, largest) > 0) {
            largest = left;
        }

        if (right < n && compare(right, largest) > 0) {
            largest = right;
        }

        if (largest !== i) {
            await swap(i, largest);
            await heapify(n, largest);
        }
    }

    async function shellSort() {
        const n = array.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = array[i];
                let j = i;
                
                while (j >= gap && compare(j - gap, j) > 0) {
                    await swap(j, j - gap); // Correctly swap elements with gap distance
                    j -= gap;
                }
                
                array[j] = temp;
                await updateBar(j);  // Update the bar to reflect changes
            }
        }
    }
    
    

    // Event Listeners
    generateArrayBtn.addEventListener('click', generateArray);
    
    arraySizeInput.addEventListener('input', () => {
        arraySizeValue.textContent = arraySizeInput.value;
        generateArray();
    });

    speedInput.addEventListener('input', () => {
        speedValue.textContent = speedInput.value;
    });

    algorithmCards.forEach(card => {
        card.addEventListener('click', () => {
            algorithmCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedAlgorithm = card.dataset.algorithm;
        });
    });

    startSortBtn.addEventListener('click', async () => {
        if (!selectedAlgorithm || sorting) return;
        sorting = true;
        paused = false;
        startSortBtn.disabled = true;
        pauseSortBtn.disabled = false;
        resetSortBtn.disabled = true;
        generateArrayBtn.disabled = true;
        arraySizeInput.disabled = true;
        startTimer();

        switch (selectedAlgorithm) {
            case 'bubbleSort':
                await bubbleSort();
                break;
            case 'quickSort':
                await quickSort();
                break;
            case 'mergeSort':
                await mergeSort();
                break;
            case 'heapSort':
                await heapSort();
                break;
            case 'shellSort':
                await shellSort();
                break;
        }

        sorting = false;
        startSortBtn.disabled = false;
        pauseSortBtn.disabled = true;
        resetSortBtn.disabled = false;
        generateArrayBtn.disabled = false;
        arraySizeInput.disabled = false;
        clearInterval(timerInterval);
    });

    pauseSortBtn.addEventListener('click', () => {
        paused = !paused;
        pauseSortBtn.innerHTML = paused ? '<i class="fas fa-play"></i> Resume' : '<i class="fas fa-pause"></i> Pause';
    });

    resetSortBtn.addEventListener('click', () => {
        sorting = false;
        paused = false;
        startSortBtn.disabled = false;
        pauseSortBtn.disabled = true;
        resetSortBtn.disabled = false;
        generateArrayBtn.disabled = false;
        arraySizeInput.disabled = false;
        pauseSortBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
        clearInterval(timerInterval);
        generateArray();
    });

    // Initial setup
    generateArray();
});