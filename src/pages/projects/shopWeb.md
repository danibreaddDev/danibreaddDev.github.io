---
layout: ../../layouts/ProjectLayout.astro
title: 'StreetWear Shop Design'
pubDate: 2024-07-01
description: 'Prototipo interactivo de una tienda en línea diseñada para vender ropa, destacando una experiencia visual atractiva.'
author: 'Daniel Pamblanco Mestre'
urlGit: ''
urlDemo: ''
technologies: ["Astro","TailwindCSS"]
featured: true
---
  <div class="grid items-center py-4 space-y-20">
  <div class="flex flex-col space-y-5">
  <div class="group flex space-x-1 items-center">
    <a href="https://aquamarine-dragon-c33fa2.netlify.app/" class="text-xl text-neutral-700 dark:text-neutral-200 decoration-solid underline-offset-[5px] hover:underline" target="_blank">StreetWear Shop Design</a>
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
    <p class="text-sm text-neutral-600 dark:text-neutral-300"></p>
     <div class="flex justify-center">
     <img class="w-[300px] sm:w-[400px] lg:w-[500px] rounded hover:transition duration-75 hover:scale-105" src="/shopweb.PNG"alt="portada"/>
    </div>
    <p class="text-lg text-neutral-700 dark:text-neutral-200">Tecnologías</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
    <!-- Tecnología 1 -->
      <div class="flex flex-col p-5 space-y-2 ring-1 ring-gray-300 dark:ring-neutral-700 rounded-lg hover:shadow-md transition-shadow duration-500  dark:hover:shadow-neutral-300 hover:shadow-neutral-400">
        <div class="flex flex-wrap gap-2 items-center">
         <svg viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" class="size-9 fill-black dark:fill-neutral-200" preserveAspectRatio="xMidYMid"><path d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"/><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"/></svg>
          <div class="flex flex-col">
            <div class="group flex space-x-1 items-center">
              <a class="text-neutral-700 dark:text-neutral-200 " href="https://astro.build/" target="_blank">Astro</a>
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
            <p class="text-sm text-neutral-500 dark:text-neutral-300">Front-end Framework.</p>
          </div>
        </div>
        <p class="text-sm p-1 rounded text-neutral-700 dark:text-neutral-200">construir sitios web rápidos y optimizados. Su enfoque principal es la generación de sitios estáticos.</p>
      </div>
      <div class="flex flex-col p-5 space-y-2 ring-1 ring-gray-300 dark:ring-neutral-700 rounded-lg hover:shadow-md transition-shadow duration-500  dark:hover:shadow-neutral-300 hover:shadow-neutral-400">
        <div class="flex flex-wrap gap-2 items-center">
         <svg
  viewBox="0 0 256 154"
  width="13"
  height="13"
  class="size-9"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid"
  ><defs
    ><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop><stop stop-color="#0ED7B5" offset="100%"></stop></linearGradient></defs><path
    d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
    fill="url(#gradient)"></path></svg>
    <div class="flex flex-col">
            <div class="group flex space-x-1 items-center">
              <a class="text-neutral-700 dark:text-neutral-200 " href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>
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
            <p class="text-sm text-neutral-500 dark:text-neutral-300">CSS Framework.</p>
          </div>
        </div>
        <p class="text-sm p-1 rounded text-neutral-700 dark:text-neutral-200">Diseño responsive.</p>
    </div>
    </div>