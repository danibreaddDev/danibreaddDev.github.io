---
layout: ../../../layouts/ProjectLayout.astro
title: 'Poke-Generator'
pubDate: 2024-07-01
description: 'Web that allows you to generate a random pokemon through pokeApi.'
author: 'Daniel Pamblanco Mestre'
urlGit: 'https://github.com/danibreaddDev/pokemon-Api-Random'
urlDemo: ''
technologies: ["Bootstrap","Javascript"]
---
<div class="grid items-center py-4 space-y-20">
  <div class="flex flex-col space-y-5">
  <div class="group flex space-x-1 items-center">
    <a class="text-xl text-neutral-700 dark:text-neutral-200 decoration-solid underline-offset-[5px] hover:underline" href="https://github.com/danibreaddDev/Redes-JavaFX"
    target="_blank">Poke-Generator</a>
    <svg
                width="13"
                height="13"
                stroke="currentColor"
                stroke-width="2"
                class="lucide-icon lucide lucide-arrow-up-right opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100 font-semibold stroke-neutral-700 dark:stroke-neutral-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                </div>
    <p class="text-sm text-neutral-600 dark:text-neutral-300">Application that you can generate random Pokemon with fetch to PokeApi. Practising Async Functiosn and APIs with JS.</p>
    <p class="text-lg text-neutral-700 dark:text-neutral-200">Technologies</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
    <!-- Tecnología 1 -->
      <div class="flex flex-col p-5 space-y-2 ring-1 ring-gray-300 dark:ring-neutral-700 rounded-lg hover:shadow-md transition-shadow duration-500  dark:hover:shadow-neutral-300 hover:shadow-neutral-400">
        <div class="flex flex-wrap gap-2 items-center">
       <svg xmlns="http://www.w3.org/2000/svg" class="size-9" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>
          <div class="flex flex-col">
            <div class="group flex space-x-1 items-center">
              <a class="text-neutral-700 dark:text-neutral-200 " href="https://www.javascript.com/" target="_blank">Javascript</a>
              <svg
                width="13"
                height="13"
                stroke="currentColor"
                stroke-width="2"
                class="lucide-icon lucide lucide-arrow-up-right opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100 font-semibold stroke-neutral-700 dark:stroke-neutral-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            </div>
            <p class="text-sm text-neutral-500 dark:text-neutral-300">Dynamic Functions</p>
          </div>
        </div>
        <p class="text-sm p-1 rounded text-neutral-700 dark:text-neutral-200">Async Functions, Api Web.</p>
      </div>
      <!-- siguiente tech -->
      <div class="flex flex-col p-5 space-y-2 ring-1 ring-gray-300 dark:ring-neutral-700 rounded-lg hover:shadow-md transition-shadow duration-500  dark:hover:shadow-neutral-300 hover:shadow-neutral-400">
        <div class="flex flex-wrap gap-2 items-center">
        <svg viewBox="0 0 256 204" xmlns="http://www.w3.org/2000/svg" class="size-9" preserveAspectRatio="xMidYMid"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"/></svg>
          <div class="flex flex-col">
            <div class="group flex space-x-1 items-center">
              <a class="text-neutral-700 dark:text-neutral-200" href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
              <svg
                width="13"
                height="13"
                stroke="currentColor"
                stroke-width="2"
                class="lucide-icon lucide lucide-arrow-up-right opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100 font-semibold stroke-neutral-700 dark:stroke-neutral-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            </div>
            <p class="text-sm text-neutral-500 dark:text-neutral-300">CSS Framework</p>
          </div>
        </div>
        <p class="text-sm p-1 rounded text-neutral-700 dark:text-neutral-200 text-wrap">Used for Responsive design and Components.</p>
      </div>
    </div>
</div>

