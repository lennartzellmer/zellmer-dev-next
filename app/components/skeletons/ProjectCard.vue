<template>
  <li class="group relative flex flex-col items-start pb-1">
    <h2
      class="mt-2 w-full text-base font-semibold text-slate-12 dark:text-slate-dark-12"
    >
      <div
        class="absolute -inset-y-3 -inset-x-4 z-0 scale-95 bg-slate-3 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-dark-2 sm:-inset-x-6 sm:rounded-xl"
      />
      <span>
        <span
          class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"
        />

        <AppSkeleton />

      </span>
    </h2>
    <p class="relative w-full z-10 mt-2 text-sm text-slate-11 dark:text-slate-dark-11">
      <AppSkeleton
        v-for="index in 2"
        :key="index"
      />
    </p>
    <p
      class="relative w-full z-10 mt-6 flex text-sm font-medium text-slate-9 transition group-hover:text-green-500 dark:text-slate-dark-9"
    >
      <AppSkeleton :max-width="40" />
    </p>
  </li>
</template>
