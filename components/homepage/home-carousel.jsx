import Glide from "@glidejs/glide";
import {useEffect} from "react";

// https://glidejs.com/docs/setup/
//
const HomeCarousel = () => {
useEffect(() => {
  const glide = new Glide('.glide', {
    type: 'carousel'
  });

glide.mount();
}, []);

return (
<div class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <li class="glide__slide">
        <img src="/images/banners/banner-01.jpg" alt="x"></img>
        </li>
      <li class="glide__slide">
      <img src="/images/banners/banner-02.jpg" alt="y"></img>
        </li>
      <li class="glide__slide">
      <img src="/images/banners/banner-03.jpg" alt="z"></img>
        </li>
    </ul>
  </div>

  <div class="glide__arrows" data-glide-el="controls">
    <button class="button glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
    <button class="button glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
  </div>
</div>
);
};

export default HomeCarousel;
