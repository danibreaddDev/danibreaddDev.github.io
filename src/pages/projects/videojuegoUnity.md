---
layout: ../../layouts/ProjectLayout.astro
title: 'Videojuego Unity'
pubDate: 2024-07-01
description: 'Videogame made as part of the Multimedia Programming and Development course.'
author: 'Daniel Pamblanco Mestre'
urlGit: ''
urlDemo: ''
technologies: ["C#","Unity"]
---

<div class="max-w-4xl mx-auto p-6 rounded-lg shadow-md">
  
  <!-- Imagen centrada -->
  <div class="flex flex-wrap justify-center gap-5 mb-6">
    <img src="/videojuego.png" class="rounded-lg shadow-lg w-[300px]">
     <img src="/videojuego2.png" class="rounded-lg shadow-lg w-[300px]">
  </div>
  
  <!-- Título principal -->
  <h1 class="text-2xl sm:text-4xl lg:text-6xl font-bold dark:text-gray-50 mb-4 text-center">
    Chapa! Chapa!
  </h1>
  
  <!-- Subtítulo -->
  <h2 class="text-lg sm:text-2xl lg:text-4xl font-semibold dark:text-gray-50 mb-6 text-center">
    Mi primer Videojuego
  </h2>
  
  <!-- Descripción del proyecto -->
  <p class="text-sm sm:text-base lg:text-lg dark:text-gray-50 mb-8 leading-relaxed text-justify">
    Desarrollé este videojuego para la asignatura de programación de dispositivos moviles. 
    En el tienes que sobrevivir oleadas de enemigos demostrando tus habilidades de capoeira en el carnaval de tu ciudad.
    
    
  </p>
  
  <!-- Tecnologías utilizadas -->
  <div class="mb-8">
    <h3 class="text-lg sm:text-2xl lg:text-4xl font-semibold dark:text-gray-50 mb-4">Tecnologías Empleadas</h3>
    <ul class="list-disc list-inside pl-5 space-y-2 dark:text-gray-50">
      <li><strong>C#</strong> - Lenguaje de programación.</li>
      <li><strong>Unity</strong> - Motor de videojuegos.</li>
    </ul>
  </div>
  <video controls>
  <source src="/0414.mp4" type="video/mp4">
  </video>
  <!-- Autor -->
  <p class="text-right text-sm dark:text-gray-50">Autor: Daniel Pamblanco Mestre</p>
</div>
