import React, { useEffect, useState } from "react";

export default function About() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    window.addEventListener("hello from about", () => {
      setHeight(window.pageYOffset);
    });
    // return () => {
    //   console.log("about unmounted");

    //   return window.removeEventListener("scroll", () => {});
    // };
  });

  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <input type="hidden" value={height}/>
      <p>
        I'm baby bitters crucifix taiyaki mumblecore helvetica keffiyeh cloud
        bread coloring book put a bird on it affogato pour-over green juice.
        Next level gluten-free before they sold out asymmetrical echo park cray.
        Direct trade copper mug yuccie, typewriter sartorial enamel pin
        helvetica authentic street art beard twee. Occupy taiyaki live-edge,
        organic jianbing flexitarian celiac crucifix. Readymade cornhole
        scenester pork belly master cleanse, salvia street art locavore
        pitchfork godard pabst. Try-hard brunch leggings, wolf air plant deep v
        godard migas tousled forage umami tbh narwhal. Kombucha butcher brunch,
        marfa hell of scenester leggings iceland skateboard pug knausgaard
        cornhole.
      </p>
    </section>
  );
}
