<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'title',
  description: 'title',
})
</script>

<template>
  <div class="w-full h-full flex justify-between relative py-[60px] pt-[30px] px-[60px] bg-slate-1">
    <div class="flex absolute bottom-[-40%] right-[-10%] text-green-500">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 81 92"
        width="500"
        height="500"
      >
        <path
          d="M69 55c0 6.6667-2.5 13.5-7.5 20.5s-12 11-21 12-16.8333-1.6667-23.5-8c-6.6667-6.3333-10-13.6667-10-22S6.1667 40.3333 4.5 31C2.8333 21.6667 6.6667 16 16 14s18.1667-4.5 26.5-7.5c8.3333-3 16.6667-2 25 3 8.3333 5 10.6667 12.1667 7 21.5-3.6667 9.3333-5.5 17.3333-5.5 24Z"
          stroke="currentColor"
          stroke-width="8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="flex flex-row justify-end items-center text-left w-full absolute bottom-[80px] right-[60px]">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 85 87"
        height="40"
        width="40"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37.7634 11.6887c-7.2552-2.687-13.7255-1.5824-20.079 3.6661-6.4153 5.2997-8.5705 11.2013-7.268 18.2348 1.7528 9.465 2.1104 18.7987 1.0506 27.9835-.4118 3.5689.3803 4.9531.9435 5.5164.6548.6547 2.3389 1.5591 6.411 1.4137 10.1029-.3608 19.1011 1.6194 26.751 6.2093 2.7108 1.6265 4.2594 1.6509 5.0531 1.4461.7639-.1971 2.0363-.9192 3.4933-3.5682 3.9374-7.1588 9.1021-13.7322 15.448-19.7255 4.6378-4.3801 6.1731-9.5232 4.5712-16.198-1.6518-6.8826-5.5013-11.646-11.7954-14.6562-7.513-3.5932-15.7042-7.0349-24.5793-10.322ZM11.3156 7.6452c8.9799-7.4182 19.1762-9.3135 29.921-5.334 9.1249 3.3797 17.6003 6.938 25.4207 10.6781 9.0393 4.3232 14.8564 11.5597 17.2046 21.3438 2.3981 9.9919-.0666 18.8488-7.4288 25.802-5.6541 5.34-10.156 11.1-13.552 17.2745-2.2097 4.0176-5.3539 7.2956-9.7567 8.4318-4.3729 1.1285-8.741-.1804-12.6969-2.5539-5.6835-3.4101-12.6852-5.0965-21.249-4.7907-5.2612.1879-10.3271-.8244-13.839-4.3363C1.736 70.5571.9448 65.5246 1.533 60.4269c.9402-8.1486.6311-16.4815-.9494-25.0165-2.0309-10.9665 1.814-20.3982 10.732-27.7652Z"
          fill="#000"
        />
      </svg>
      <p
        style="font-size: 25px;"
        class="font-bold pl-4"
      >
        zellmer.dev
      </p>
    </div>
    <div class="h-full w-full flex justify-between relative">
      <div class="flex flex-row justify-between items-center h-full">
        <div class="flex flex-col w-full max-w-[65%]">
          <h1 class="m-0 font-bold mb-[30px] text-[75px]">
            {{ title }}
          </h1>
          <p
            v-if="description"
            class="text-[35px] text-slate-11"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
