<template>
    <div>
      <nav class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <ul class="retive flex h-16 items-center justify-between">
          <!--Movil-->
          <li>
            <NuxtLink to="#">Proyectos</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Pruebas</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Educacion</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="">
        <slot />
      </div>
    </div>
  </template>  