export const products = [
  {
    id: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    price: 149.99,
    category: "Peripherals",
    description:
      "A premium mechanical keyboard with cherry switches, RGB backlighting, and a solid aluminum frame.",
    specs: {
      "Switch Type": "Cherry MX Brown",
      Layout: "Full-size (104 keys)",
      Backlight: "RGB per-key",
      Connection: "USB-C / Wireless",
      Weight: "1.2 kg",
      Warranty: "2 years",
    },
    reviews: [
      { author: "Alex", stars: 5, text: "Best keyboard I've ever owned. The tactile feedback is perfect." },
      { author: "Jordan", stars: 4, text: "Great build quality. Wish it had a wrist rest included." },
      { author: "Sam", stars: 5, text: "Love the wireless mode. Battery lasts weeks." },
    ],
  },
  {
    id: "ultrawide-monitor",
    name: "Ultrawide Monitor",
    price: 599.99,
    category: "Displays",
    description:
      "A 34-inch curved ultrawide monitor with 144Hz refresh rate, perfect for productivity and gaming.",
    specs: {
      "Screen Size": '34" Curved',
      Resolution: "3440 x 1440 (UWQHD)",
      "Refresh Rate": "144Hz",
      "Panel Type": "IPS",
      "Response Time": "1ms",
      Ports: "2x HDMI, 1x DP, USB-C",
    },
    reviews: [
      { author: "Morgan", stars: 5, text: "Incredible for multitasking. Can't go back to dual monitors." },
      { author: "Taylor", stars: 4, text: "Colors are vivid. The curve is subtle but nice." },
    ],
  },
  {
    id: "wireless-mouse",
    name: "Wireless Mouse",
    price: 79.99,
    category: "Peripherals",
    description:
      "An ergonomic wireless mouse with precision tracking and long battery life.",
    specs: {
      Sensor: "Optical 25,600 DPI",
      Buttons: "6 programmable",
      Battery: "70 hours",
      Weight: "63g",
      Connection: "2.4GHz / Bluetooth",
      Charging: "USB-C",
    },
    reviews: [
      { author: "Casey", stars: 5, text: "Super lightweight and precise. Great for FPS games." },
      { author: "Riley", stars: 3, text: "Good mouse but the scroll wheel feels cheap." },
      { author: "Quinn", stars: 4, text: "Battery life is amazing. Very comfortable grip." },
    ],
  },
  {
    id: "usb-hub",
    name: "USB-C Hub",
    price: 49.99,
    category: "Accessories",
    description:
      "A compact USB-C hub with multiple ports for all your connectivity needs.",
    specs: {
      Ports: "3x USB-A, 1x HDMI, 1x SD, 1x USB-C PD",
      "Max Power": "100W passthrough",
      "Data Speed": "USB 3.1 (10Gbps)",
      "HDMI Output": "4K@60Hz",
      Material: "Aluminum",
      Cable: "15cm braided",
    },
    reviews: [
      { author: "Drew", stars: 4, text: "Works great with my laptop. All ports function well." },
      { author: "Avery", stars: 5, text: "Compact and reliable. Exactly what I needed." },
    ],
  },
  {
    id: "noise-cancelling-headphones",
    name: "Noise Cancelling Headphones",
    price: 299.99,
    category: "Audio",
    description:
      "Premium over-ear headphones with active noise cancellation and hi-res audio support.",
    specs: {
      "Driver Size": "40mm",
      "Frequency Response": "4Hz - 40kHz",
      ANC: "Adaptive (3 levels)",
      "Battery Life": "30 hours",
      Weight: "250g",
      Codec: "LDAC, aptX HD, AAC",
    },
    reviews: [
      { author: "Jamie", stars: 5, text: "The noise cancellation is unreal. Perfect for flights." },
      { author: "Pat", stars: 5, text: "Sound quality rivals wired audiophile headphones." },
      { author: "Dana", stars: 4, text: "Very comfortable for long sessions. ANC is top-notch." },
    ],
  },
  {
    id: "webcam-4k",
    name: "4K Webcam",
    price: 129.99,
    category: "Accessories",
    description:
      "A professional 4K webcam with auto-focus and built-in ring light for crystal clear video calls.",
    specs: {
      Resolution: "4K (3840x2160)",
      "Frame Rate": "30fps (4K) / 60fps (1080p)",
      "Field of View": "90 degrees",
      Microphone: "Dual stereo",
      "Auto Focus": "Yes",
      Mount: "Clip + Tripod",
    },
    reviews: [
      { author: "Skyler", stars: 4, text: "Great image quality. The ring light is a nice touch." },
      { author: "Blake", stars: 5, text: "Best webcam I've used. Auto-focus is fast and accurate." },
    ],
  },
];
