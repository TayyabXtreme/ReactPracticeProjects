# Currency Converter

A simple currency converter application built with React, utilizing a custom hook to fetch and convert currency rates from an external API.

![Currency Converter Demo](pic.jpg)


## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
  - [Custom Hook](#custom-hook)
  - [Components](#components)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features
- Convert between multiple currencies.
- Real-time exchange rate fetching from a public API.
- Clean and responsive UI.



## Installation
To run this application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/TayyabXtreme/ReactPracticeProjects.git
    cd xtremcurrencyconverter
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage
1. Open the application in your browser:
    ```plaintext
    http://localhost:3000
    ```

2. Select the currencies you want to convert from and to.

3. Enter the amount and click "Convert" to see the converted amount.

## Code Overview

### Custom Hook
The custom hook `useCurrencyInfo` is used to fetch exchange rates and perform the conversion.

```javascript
import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then(response => response.json())
            .then(res => {
                setData(res[currency]);
                console.log(data);
            })
            .catch(error => console.log(error));
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;
