---
layout: ../../layouts/ProjectLayout.astro
title: 'Web MongoGG.'
pubDate: 2024-07-01
description: 'Web application that I made as a final project for my degree in DAM.'
author: 'Daniel Pamblanco Mestre'
urlGit: 'https://github.com/danibreaddDev/MongoGG'
urlDemo: ''
technologies: ["Symfony","Javascript"]
---
<div class="max-w-4xl mx-auto p-6 rounded-lg shadow-md">
  
  <!-- Imagen centrada -->
  <div class="flex justify-center mb-6">
    <img src="/mongoGG.png" class="rounded-lg shadow-lg w-[300px]">
  </div>
  
  <!-- Título principal -->
  <h1 class="text-2xl sm:text-4xl lg:text-6xl font-bold dark:text-gray-50 mb-4 text-center">
MongoGG  </h1>
  
  <!-- Subtítulo -->
  <h2 class="text-lg sm:text-2xl lg:text-4xl font-semibold dark:text-gray-50 mb-6 text-center">
    TFG DAM
  </h2>
  
  <!-- Descripción del proyecto -->
  <p class="text-sm sm:text-base lg:text-lg dark:text-gray-50 mb-8 leading-relaxed text-justify">
    Creé esta aplicación web como TFG del grado de DAM. Permite consultar diferente informacion de videojuegos y estadísticas de jugadores a través de diferentes APIS. Cuenta con registro e inicio de sesión de usuarios donde pueden almacenar sus cuentas. 
  </p>
  
  <!-- Tecnologías utilizadas -->
  <div class="mb-8">
    <h3 class="text-lg sm:text-2xl lg:text-4xl font-semibold dark:text-gray-50 mb-4">Tecnologías Empleadas</h3>
    <ul class="list-disc list-inside pl-5 space-y-2 dark:text-gray-50">
      <li><strong>PHP</strong> - Lenguaje de programación.</li>
      <li><strong>Symfony</strong> - Framework para generar Aplicación web.</li>
      <li><strong>Bootstrap</strong> - Biblioteca de CSS para diseño responsive.</li>
      <li><strong>Twig</strong> - Motor de plantillas para mostrar toda nuestra información.</li>
      <li><strong>Base de datos MySQL</strong> - Base de datos para almacenar los usuarios y sus respectivas cuentas.</li>
            <li><strong>APIs</strong> - Diferentes herramientas para obtener informacion de videojuegos y jugadores.</li>


  </ul>
  </div>
  
  <!-- Autor -->
  <p class="text-right text-sm dark:text-gray-50">Autor: Daniel Pamblanco Mestre</p>
   <video controls class="mt-5">
  <source src="/web.mp4" type="video/mp4">
  </video>
  <video controls class="mt-5">
  <source src="/autenticacion.mkv" type="video/mp4">
  </video>
</div>