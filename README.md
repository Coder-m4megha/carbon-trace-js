-----

# 🌱 carbon-trace-js

**carbon-trace-js** ek lightweight JavaScript library hai jo aapki website ke real-time **Carbon Footprint** aur **Data Transfer** ko monitor karti hai. Yeh developers ko "Sustainable Web Development" karne mein madad karti hai.

-----

## ✨ Features

  * 🚀 **Real-time Tracking:** Browser ke network data transfer ko live monitor karta hai.
  * 📊 **Eco-Dashboard:** Screen ke corner mein ek sundar floating UI widget dikhata hai.
  * ⚖️ **Lightweight:** Zero dependencies, aapki site ki speed par koi asar nahi padega.
  * 🛡️ **CORS Friendly:** External images aur APIs ke liye smart fallback logic.

-----

## 🛠️ Installation

Aap ise NPM ke zariye install kar sakte hain:

```bash
npm install carbon-trace-js
```

-----

## 🚀 How to Use

### 1\. In Modern Frameworks (React, Vue, etc.)

```javascript
import CarbonTrace from 'carbon-trace-js';

// Monitoring shuru karein
CarbonTrace.start();
```

### 2\. In Plain HTML/JS

```html
<script src="./node_modules/carbon-trace-js/index.js"></script>
<script>
    CarbonTrace.start({
        updateInterval: 2000, // Score update hone ka time (ms)
        showDashboard: true // Dashboard dikhana hai ya nahi
    });
</script>
```

-----

## 📋 Carbon Calculation Formula

Yeh library standard digital carbon formula ka use karti hai:
`1 GB data transfer ≈ 0.8g of CO2`

-----

## 📄 License

MIT © [Megha Yadav]

-----
