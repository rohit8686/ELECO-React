import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_IN?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1632948896000",
    name: "Mac book pro",
    price: 194900,
    discount: 8,
    category: "Laptops",
    rating: 4.8,
    newArrival: true,
    desc: [
      `All-Day Battery Life. Go longer than ever with up to 18 hours of battery life.`,
      `Powerful Performance. Take on everything from professional-quality editing to action-packed gaming with ease.`,
      `The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.Superfast Memory.`,
      `8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.`,
    ],
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/61R04c4iitL._AC_UY327_FMwebp_QL65_.jpg",
    name: "Reddragon K552",
    price: 5000,
    discount: 4,
    category: "Keyboards",
    rating: 4.5,
    newArrival: false,
    desc: [
      `Reliable Plug and Play: The USB receiver provides a reliable wireless connection up to 33 ft (1), so you can forget about drop-outs and delays and you can take it wherever you use your computer.`,
      `Type in Comfort: The design of this keyboard creates a comfortable typing experience thanks to the low-profile, quiet keys and standard layout with full-size F-keys, number pad, and arrow keys.`,
      `Durable and Resilient: This full-size wireless keyboard features a spill-resistant design (2), durable keys and sturdy tilt legs with adjustable height. Wireless range: 10 m`,
    ],
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UY327_FMwebp_QL65_.jpg",
    name: "iphone 13",
    price: 80709,
    discount: 5,
    category: "Smart phones",
    rating: 2,
    newArrival: true,
    desc: [
      `48MP+5MP+2MP+2MP Quad camera setup- True 48MP (F 2.0) main camera + 5MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 8MP (F2.2) front camera.`,
      `6000mAH lithium-ion battery`,
      `1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase.`,
      `iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more`,
    ],
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/71lT-zWEYkL._AC_UL480_FMwebp_QL65_.jpg",
    name: "Asus Zenbook 14",
    price: 93731,
    discount: 5,
    category: "Laptops",
    rating: 4.7,
    newArrival: false,
    desc: [
      `All-Day Battery Life. Go longer than ever with up to 18 hours of battery life.`,
      `Powerful Performance. Take on everything from professional-quality editing to action-packed gaming with ease.`,
      `The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.Superfast Memory.`,
      `8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.`,
    ],
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UY327_FMwebp_QL65_.jpg",
    name: "Canon EOS 1500D",
    price: 60497,
    discount: 5,
    category: "DSLR",
    rating: 3.4,
    newArrival: true,
    desc: [
      `Sensor: APS-C CMOS Sensor with 24.1 MP (high resolution for large prints and image cropping). Transmission frequency (central frequency):Frequency: 2 412 to 2 462MHz. Standard diopter :-2.5 - +0.5m-1 (dpt)`,
      `ISO: 100-6400 sensitivity range (critical for obtaining grain-free pictures, especially in low light)`,
      `Image Processor: DIGIC 4+ with 9 autofocus points (important for speed and accuracy of autofocus and burst photography)`,
      `Video Resolution: Full HD video with fully manual control and selectable frame rates (great for precision and high-quality video work)`,
    ],
  },
  {
    _id: uuid(),
    image:
      "https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "Logitech K380",
    price: 2255,
    discount: 8,
    category: "Keyboards",
    rating: 2,
    newArrival: false,
    desc: [
      `Reliable Plug and Play: The USB receiver provides a reliable wireless connection up to 33 ft (1), so you can forget about drop-outs and delays and you can take it wherever you use your computer.`,
      `Type in Comfort: The design of this keyboard creates a comfortable typing experience thanks to the low-profile, quiet keys and standard layout with full-size F-keys, number pad, and arrow keys.`,
      `Durable and Resilient: This full-size wireless keyboard features a spill-resistant design (2), durable keys and sturdy tilt legs with adjustable height. Wireless range: 10 m`,
    ],
  },
  {
    _id: uuid(),
    image:
      "https://images.unsplash.com/photo-1613141412501-9012977f1969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "Logitech G502",
    price: 4278,
    discount: 4,
    category: "Mouse",
    rating: 3.3,
    newArrival: false,
    desc: [
      `3 buttons improve productivity`,
      `Optical sensor works on most surfaces`,
      `Glossy black and metallic gray shine with sophistication`,
      `1 year warranty`,
    ],
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UY327_FMwebp_QL65_.jpg",
    name: "boat rockers 370",
    price: 2223,
    discount: 2,
    category: "Headphones",
    rating: 4,
    newArrival: false,
    desc: [
      `Battery: Rockerz 370 offers a playback time of up to 12 hours.. Frequency Response 20Hz-20KHz,Sensitivity (dB) 79dB±3DB,Impedance 32Ω. Driver Type:Moving Coil Driver`,
      `Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS`,
      `ANC: NA. No. of Mic: 1. Other Inclusions: Micro USB Charging Cable, Warranty Card, User Manual`,
      `Lightweight Ergonomic Design with Easy Controls`,
    ],
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/61xeIT6UHrL._AC_UY327_FMwebp_QL65_.jpg",
    name: "boat bassheads",
    price: 8976,
    discount: 4,
    category: "Headphones",
    rating: 1.4,
    newArrival: false,
    desc: [
      `Battery: Boat BassHeads offers a playback time of up to 12 hours. Frequency Response 20Hz-20KHz,Sensitivity (dB) 79dB±3DB,Impedance 32Ω. Driver Type:Moving Coil Driver`,
      `Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS`,
      `ANC: NA. No. of Mic: 1. Other Inclusions: Micro USB Charging Cable, Warranty Card, User Manual`,
      `Lightweight Ergonomic Design with Easy Controls`,
    ],
  },
];
