# Advanced Sorting Visualizer

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Supported Algorithms](#supported-algorithms)
- [Algorithm Visualization](#algorithm-visualization)
- [Contribution](#contribution)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

The **Advanced Sorting Visualizer** is a web application that enables users to visualize how different sorting algorithms work. This educational tool allows users to interactively observe the step-by-step process of various sorting algorithms, making it easier to understand their behavior and efficiency. By manipulating the array size and sorting speed, users can explore how different algorithms perform under varying conditions.

## Features

- **Interactive Visualization:** Watch sorting algorithms in action with real-time animations.
- **Multiple Algorithms:** Choose from several popular sorting algorithms.
- **Adjustable Array Size:** Experiment with different input sizes to see how performance changes.
- **Sorting Speed Control:** Adjust the speed of the visualization for a clearer understanding.
- **Real-Time Statistics:** Display statistics such as the number of comparisons, swaps, and time elapsed during sorting.
- **Responsive Design:** Optimized for various screen sizes, including desktops and mobile devices.
- **Theme Support:** Switch between dark and light themes for user preference.

## Technologies Used

- **HTML5** - For the structure of the web pages.
- **CSS3** - For styling the application and ensuring responsive design.
- **JavaScript** - For the logic of sorting algorithms and user interaction.
- **Font Awesome** - For including icons in the UI.
- **jQuery (optional)** - For simplified DOM manipulation and event handling.

## Installation

To run the Advanced Sorting Visualizer locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/advanced-sorting-visualizer.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd advanced-sorting-visualizer
   ```

3. **Open the `index.html` file in your web browser:**

   ```bash
   open index.html   # For Mac
   start index.html  # For Windows
   ```

   Alternatively, you can use a live server extension in your code editor (like Visual Studio Code) to serve the project.

## Usage

1. **Choose a Sorting Algorithm:**
   - Click on the card of your desired algorithm to select it for visualization.

2. **Adjust the Array Size:**
   - Use the slider to change the size of the array. Larger arrays may take longer to sort, providing insight into the algorithm's performance.

3. **Control Sorting Speed:**
   - Adjust the speed slider to speed up or slow down the visualization. This allows you to observe each step in more detail.

4. **Generate a New Array:**
   - Click the "New Array" button to create a new set of random numbers for sorting.

5. **Start the Sorting Process:**
   - Click the "Start" button to begin the sorting animation.

6. **Pause/Reset Sorting:**
   - Use the "Pause" button to pause the sorting process and the "Reset" button to return to the initial state.

## Supported Algorithms

The Advanced Sorting Visualizer includes the following sorting algorithms:

1. **Bubble Sort:** A simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

2. **Selection Sort:** An in-place comparison sorting algorithm that divides the input list into two parts: a sorted and an unsorted region, repeatedly selecting the smallest element from the unsorted region to place at the end of the sorted region.

3. **Insertion Sort:** Builds a sorted array one element at a time by comparing the current element with the already sorted elements and inserting it in the correct position.

4. **Merge Sort:** A divide-and-conquer algorithm that splits the array into halves, recursively sorts them, and then merges the sorted halves back together.

5. **Quick Sort:** A highly efficient sorting algorithm that selects a 'pivot' element from the array and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot.

6. **Heap Sort:** A comparison-based sorting technique based on the binary heap data structure that repeatedly extracts the maximum element from the heap and reconstructs the heap until the array is sorted.

## Algorithm Visualization

Each algorithm has its own unique visualization style. Key visual elements include:

- **Bars:** Representing the array elements, with heights proportional to their values.
- **Color Changes:** Elements being compared, swapped, or selected are highlighted in different colors for clarity.
- **Animations:** Each step in the sorting process is animated to illustrate the algorithm's behavior effectively.
- **Statistics Panel:** Displays the number of comparisons, swaps, and the time taken for the sorting process.

## Contribution

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository** on GitHub.
2. **Clone your forked repository:**

   ```bash
   git clone https://github.com/your-username/advanced-sorting-visualizer.git
   ```

3. **Create a new branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

4. **Make your changes and commit them:**

   ```bash
   git commit -m "Add some feature"
   ```

5. **Push to your branch:**

   ```bash
   git push origin feature/YourFeature
   ```

6. **Open a pull request** on the original repository to propose your changes.


## Acknowledgments

- Thanks to all contributors and users for their support and feedback.
- Inspired by various sorting algorithms and their visual representations.
- Special thanks to online resources and documentation that guided the development of this project.
