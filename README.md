# CSV Transform Stream Project

This project demonstrates how to transform CSV data using Node.js streams. It includes two implementations: one using the `fs` module to read from and write to files, and another using in-memory data to showcase stream transformations without file system operations.

## Features

-   Read CSV data from a file or in-memory.
-   Transform CSV data (convert to uppercase).
-   Write transformed data to an output file or display it on the console.
-   Handles streaming efficiently to minimize memory usage.

## Usage

### Using File System

To run the CSV transformation using the file system, execute the following command:

```bash
node CSV_transform.js
```

Make sure you have an `input.csv` file in the project directory. The transformed data will be written to `output.csv`.

### Without File System

To run the CSV transformation without using the file system, execute:

```bash
node CSV_Transform_Without_FS.js
```

This will display the transformed CSV data directly in the console.

## File Descriptions

-   **CSV_transform.js**:

    -   Reads CSV data from `input.csv`.
    -   Transforms the data to uppercase.
    -   Writes the transformed data to `output.csv`.
    -   Utilizes the `fs` module and streams for file handling.

-   **CSV_Transform_Without_FS.js**:
    -   Simulates CSV input data as a string.
    -   Transforms the data to uppercase.
    -   Outputs the transformed data directly to the console.
    -   Demonstrates stream transformation without file system operations.

This version focuses solely on the project description, features, usage instructions, and file descriptions. Let me know if you need any further adjustments!
