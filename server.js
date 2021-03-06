const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const cars = [
    {
        brand: "Nissan",
        model: "300zx",
        motor: "VG30",
        horsepower:"300",
        torque:"283",
        cylinders: 6,
        mpgs:`19/24`,
        origin: "japan",
        msrp: 33000,
        info: "The fourth generation Fairlady Z (Z32) or known as the Nissan 300ZX, was released in 1989. It was both bold and beautiful with its wide, low-proportioned styling, distinctive front  end featuring headlights slanted at over 60 degrees, a lively silhouette, and the short overhang that accentuated its excellent maneuverability and increased performance.",
        videoEmbed: "https://www.youtube.com/embed/ffq2oaEZnUo",
        photoUrl: "https://media.sketchfab.com/models/c0cec80ad27548409625f1c96a0cc8ce/thumbnails/375fc4f8dc0c43feba4187dd08948775/104cf5a555a44f3aac0f20053227e0fc.jpeg"
    },
    {
        brand: "Nissan",
        model: "350z",
        motor: "VQ35",
        horsepower:"306",
        torque:"268",
        cylinders: 6,
        mpgs:`10/25`,
        origin: "japan",
        msrp: 36500,
        info: "The Nissan 350Z, a two-door, two-seater sports car, kicked off production for the  fifth generation of Nissan Z-Cars 2002 and ended the 6-year production hiatus in the US. 350Z, with its’ sleek redesign of 240Z DNA, helped rejuvenate the Nissan market presence going into the latter half of the decade.",
        videoEmbed: "https://www.youtube.com/embed/sSwGs6TlcCY",
        photoUrl: "https://file.kelleybluebookimages.com/kbb/base/house/2008/2008-Nissan-350Z-FrontSide_NI350081_505x375.jpg"
    },
    {
        brand: "Nissan",
        model: "370z",
        motor: "VQ37",
        horsepower:"332",
        torque:"270",
        cylinders: 6,
        mpgs:`19/26`,
        origin: "japan",
        msrp: 30090,
        info: "In production from 2009 to present, the 2010 Nissan 370Z coupe was a staple of the Nissan vehicle lineup. Built with a V6 engine and an available 7-speed automatic transmission, exquisite performance has been jam-packed into its sleek and refined aerodynamic frame. What is next for the Nissan Z?",
        videoEmbed: "https://www.youtube.com/embed/0rxBGoewjXU",
        photoUrl: "https://media.ed.edmunds-media.com/nissan/370z/2019/oem/2019_nissan_370z_coupe_nismo_fq_oem_1_1600.jpg"
    },
    {
        brand: "Nissan",
        model: "r35",
        motor: "VR38",
        horsepower:"565",
        torque:"467",
        cylinders: 6,
        mpgs:`16/22`,
        origin: "japan",
        msrp: 113540,
        info: `Nissan challenged convention at every point of the Nissan GT-R’s development. Instead of a large, heavy engine thirsty for fuel, the Nissan GT-R is powered by an ideally sized, twin-turbocharged 3.8-L V6 that produces a prodigious 565 hp and equally immense 467 lb-ft of torque. 
        It’s built with immense strength, from a closed-deck cylinder block to a ladder frame structure for added support. Just as important as the engineering is the actual assembly, which is done by hand by a single master craftsman, whose signature you’ll find on a small but prominent plaque.`,
        videoEmbed: "https://www.youtube.com/embed/QeviPeovW2U",
        photoUrl: "https://wieck-nissanao-production.s3.amazonaws.com/photos/f5c331f0130a4a976f1c9f4abf3dc772fcc373f1/preview-928x522.jpg"
    },
    {
        brand: "Nissan",
        model: "z",
        motor: "VR30",
        horsepower:"400",
        torque:"350",
        cylinders: 6,
        mpgs:`coming soon`,
        origin: "japan",
        info: "The all-new 2023 Z stays true to its performance roots, with a powerful 6-cylinder under the hood; a Front Midship, rear-wheel-drive design that places the engine farther back in the chassis for enhanced balance; and a suspension that makes you feel hard-wired to the road. It’s an authentic sports car in the purest sense of the word.",
        videoEmbed: "https://www.youtube.com/embed/0aZVgImpkaQ",
        msrp: 'coming soon',
        photoUrl: "https://cdn.motor1.com/images/mgl/eJAmW/s1/nissan-z-proto-in-person-first-look-front-quarter.webp"
    },
]


app.get('/api/cars', (req, res) => {
    res.json(cars)
})

app.get('/api/cars/:carModel', (req, res) => {
const modelReq = req.params.carModel;
console.log(modelReq)

for (let i = 0; i < cars.length; i++) {
    const currentChar = cars[i];
    if (modelReq === currentChar.model) {
      return res.json(currentChar);
    }
  
  }
return res.send('No character found');

})


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
