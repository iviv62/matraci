import React from 'react'

const NotFound  = () => {
    return (
        <div class="bg-base-200">
<div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
<div class="  overflow-hidden sm:rounded-lg pb-8">
<div class=" text-center pt-8">
<h1 class="text-9xl font-bold text-purple-400">404</h1>
<h1 class="text-6xl font-medium py-8">Страницата не е намерена</h1>
<p class="text-2xl pb-8 px-12 font-medium"> Страницата, която търсиш не съществува или е била премахната</p>
<button class="btn btn-primary text-white font-semibold px-6 py-3 rounded-md mr-6">
Начало
</button>
<button class="btn btn-accent text-white font-semibold px-6 py-3 rounded-md">
Контакти
</button>
</div>
</div>
</div>
</div>
    )
}

export default NotFound 
