var units = {
  length: {
      cm: {
          cm: 1,
          m: 0.01,
          km: 0.00001,
          in: 0.3937,
          ft: 0.0328,
          yd: 0.0109,
          mi: 0.00000621
      },
      m: {
          cm: 100,
          m: 1,
          km: 0.001,
          in: 39.3701,
          ft: 3.2808,
          yd: 1.0936,
          mi: 0.0006214
      },
      km: {
          cm: 100000,
          m: 1000,
          km: 1,
          in: 39370.1,
          ft: 3280.84,
          yd: 1093.61,
          mi: 0.621371
      },
      in: {
          cm: 2.54,
          m: 0.0254,
          km: 0.0000254,
          in: 1,
          ft: 0.0833,
          yd: 0.0278,
          mi: 0.0000158
      },
      ft: {
          cm: 30.48,
          m: 0.3048,
          km: 0.0003048,
          in: 12,
          ft: 1,
          yd: 0.3333,
          mi: 0.000189
      },
      yd: {
          cm: 91.44,
          m: 0.9144,
          km: 0.0009144,
          in: 36,
          ft: 3,
          yd: 1,
          mi: 0.000568
      },
      mi: {
          cm: 160934.4,
          m: 1609.34,
          km: 1.60934,
          in: 63360,
          ft: 5280,
          yd: 1760,
          mi: 1
      }
  },
  temperature: {
      c: {
          c: 1,
          f: 33.8,
          k: 274.15
      },
      f: {
          c: -17.2222,
          f: 1,
          k: 255.928
      },
      k: {
          c: -272.15,
          f: -457.87,
          k: 1
      }
  },
  area: {
      sqcm: {
          sqcm: 1,
          sqm: 0.0001,
          sqkm: 0.00000001,
          sqin: 0.155,
          sqft: 0.0011,
          sqyd: 0.00012,
          sqmi: 0.0000000000386
      },
      sqm: {
          sqcm: 10000,
          sqm: 1,
          sqkm: 0.000001,
          sqin: 1550,
          sqft: 10.764,
          sqyd: 1.196,
          sqmi: 0.000000386
      },
      sqkm: {
          sqcm: 10000000000,
          sqm: 1000000,
          sqkm: 1,
          sqin: 1550003100,
          sqft: 10763910,
          sqyd: 1195990,
          sqmi: 0.386102
      },
      sqin: {
          sqcm: 6.4516,
          sqm: 0.00064516,
          sqkm: 0.00000000064516,
          sqin: 1,
          sqft: 0.0069,
          sqyd: 0.00077,
          sqmi: 0.00000000024
      },
      sqft: {
          sqcm: 929.03,
          sqm: 0.0929,
          sqkm: 0.0000000929,
          sqin: 144,
          sqft: 1,
          sqyd: 0.1111,
          sqmi: 0.0000000359
      },
      sqyd: {
          sqcm: 8361.27,
          sqm: 0.8361,
          sqkm: 0.0000008361,
          sqin: 1296,
          sqft: 9,
          sqyd: 1,
          sqmi: 0.0000003228
      },
      sqmi: {
          sqcm: 25899881103.36,
          sqm: 2589988.110336,
          sqkm: 2.589988110336,
          sqin: 4014489600,
          sqft: 27878400,
          sqyd: 3097600,
          sqmi: 1
      }
  },
  weight: {
      g: {
          g: 1,
          kg: 0.001,
          lb: 0.00220462,
          oz: 0.03527396
      },
      kg: {
          g: 1000,
          kg: 1,
          lb: 2.20462,
          oz: 35.27396
      },
      lb: {
          g: 453.592,
          kg: 0.453592,
          lb: 1,
          oz: 16
      },
      oz: {
          g: 28.3495,
          kg: 0.0283495,
          lb: 0.0625,
          oz: 1
      }
  },
  time: {
      sec: {
          sec: 1,
          min: 0.0166667,
          hr: 0.000277778,
          day: 0.0000115741,
          wk: 0.0000016534,
          month: 0.00000038052,
          year: 0.000000031709
      },
      min: {
          sec: 60,
          min: 1,
          hr: 0.0166667,
          day: 0.000694444,
          wk: 0.0000992063,
          month: 0.0000228154,
          year: 0.00000190129
      },
      hr: {
          sec: 3600,
          min: 60,
          hr: 1,
          day: 0.0416667,
          wk: 0.00595238,
          month: 0.00136986,
          year: 0.000114155
      },
      day: {
          sec: 86400,
          min: 1440,
          hr: 24,
          day: 1,
          wk: 0.142857,
          month: 0.0328767,
          year: 0.00273973
      },
      wk: {
          sec: 604800,
          min: 10080,
          hr: 168,
          day: 7,
          wk: 1,
          month: 0.229979,
          year: 0.0191781
      },
      month: {
          sec: 2628000,
          min: 43800,
          hr: 730,
          day: 30.4167,
          wk: 4.34524,
          month: 1,
          year: 0.0833333
      },
      year: {
          sec: 31536000,
          min: 525600,
          hr: 8760,
          day: 365,
          wk: 52.1429,
          month: 12,
          year: 1
      }
  }
};

// Populate output units based on selected input unit
function populateOutputUnits() {
  var inputUnit = document.getElementById('inputUnit').value;
  var outputUnitSelect = document.getElementById('outputUnit');
  var category = getCategory(inputUnit);

  outputUnitSelect.innerHTML = '';

  for (var unit in units[category][inputUnit]) {
      var option = document.createElement('option');
      option.value = unit;
      option.textContent = unit;
      outputUnitSelect.appendChild(option);
  }
}

// Get the category of the unit
function getCategory(unit) {
  var categories = Object.keys(units);

  for (var i = 0; i < categories.length; i++) {
      if (unit in units[categories[i]]) {
          return categories[i];
      }
  }

  return null;
}

// Perform the conversion
function convert() {
  // Get input values
  var inputValue = parseFloat(document.getElementById('inputValue').value);
  var inputUnit = document.getElementById('inputUnit').value;
  var outputUnit = document.getElementById('outputUnit').value;
  var category = getCategory(inputUnit);

  // Perform conversion
  var result = inputValue * units[category][inputUnit][outputUnit];

  // Display the result
  document.getElementById('result').textContent = result;
}

// Add event listener to inputUnit select element
document.getElementById('inputUnit').addEventListener('change', populateOutputUnits);

// Initial population of outputUnit select element
populateOutputUnits();
