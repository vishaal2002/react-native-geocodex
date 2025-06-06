# react-native-geocodex

A smart and lightweight geocoding utility for React Native. Supports forward and reverse geocoding using OpenStreetMap without an API key.

## Installation

```sh
npm install react-native-geocodex
# or
yarn add react-native-geocodex

```

## Usage

```js
import { geocode, reverseGeocode } from 'react-native-geocodex';

async function example() {
  // Convert address to coordinates
  const coords = await geocode('1600 Amphitheatre Parkway, Mountain View, CA');
  console.log('Coordinates:', coords);

  // Convert coordinates back to address
  const address = await reverseGeocode(coords.latitude, coords.longitude);
  console.log('Address:', address);
}

example();


