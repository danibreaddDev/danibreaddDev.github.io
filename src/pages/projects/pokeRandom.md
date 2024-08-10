---
layout: ../../layouts/ProjectLayout.astro
title: 'Aplicación Pokedex'
pubDate: 2024-07-01
description: 'Web que te permite generar un pokemon aleatorio a través de pokeApi.'
author: 'Daniel Pamblanco Mestre'
urlGit: 'https://github.com/danibreaddDev/pokemon-Api-Random'
urlDemo: ''
technologies:
  - |
    <svg role="img" fill="#F7DF1E" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
  - |
    <svg role="img" fill="#7952B3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bootstrap</title><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/></svg>
  

---
<div class="max-w-4xl mx-auto p-6 rounded-lg shadow-md">
  
  <!-- Imagen centrada -->
  <div class="flex justify-center mb-6">
    <img src="/pokedex.png" class="rounded-lg shadow-lg w-[300px]">
  </div>
  
  <!-- Título principal -->
  <h1 class="text-2xl sm:text-4xl lg:text-6xl font-bold dark:text-gray-50 mb-4 text-center">
    PokeRandom
  </h1>
  
  <!-- Subtítulo -->
  <h2 class="text-lg sm:text-2xl lg:text-4xl font-semibold dark:text-gray-50 mb-6 text-center">
    Web
  </h2>
  
  <!-- Descripción del proyecto -->
  <p class="text-sm sm:text-base lg:text-lg dark:text-gray-50 mb-8 leading-relaxed text-justify">
    Desarrollé esta web para practicar funciones asincronas y peticiones con javascript a través de PokeApi.
  </p>
  
  <!-- Tecnologías utilizadas -->
  <div class="mb-8">
    <h3 class="text-lg sm:text-2xl lg:text-4xl font-semibold dark:text-gray-50 mb-4">Tecnologías Empleadas</h3>
    <ul class="list-disc list-inside pl-5 space-y-2 dark:text-gray-50">
      <li><strong>JavaScript</strong> - Lenguaje de programación para funcionalidades interactivas.</li>
      <li><strong>NodeJs</strong> - Entorno para ejecutar nuestro javascript</li>
      <li><strong>Bootstrap</strong> - Biblioteca de CSS para diseño responsivo.</li>
    </ul>
  </div>
  
  

  
  <!-- Autor -->
  <p class="text-right text-sm dark:text-gray-50">Autor: Daniel Pamblanco Mestre</p>
</div>

