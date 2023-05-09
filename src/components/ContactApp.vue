<template>
    <div id="Kontakt" class="bg-slate-100 w-full p-20 flex flex-col gap-5">
        <div>
            <h2 class="text-center text-4xl font-bold underline">Kontakt</h2>
        </div>
        <div class="flex justify-center items-center gap-5">
            <div class=" flex-1 flex flex-col gap-5">
                <p class="text-xl font-semibold">Hier ist mein Kontakt Daten:</p>
                <div class="border p-10">
                    <p>Meine Telefonnummer lautet: <strong>" 0152 266 100 00 "</strong> </p>
                    <p>Ihre E-Mail-Adresse lautet: <strong>" ozcan.fed@gmail.com "</strong> </p>
                </div>
                <div class="flex gap-5 justify-center items-center text-center p-5">
                    <a href="https://github.com/oezcanyildiz" target="_blank" class="hover:bg-black hover:text-white p-3 rounded-2xl cursor-pointer">
                        <i class="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ozcan-yildiz-40006b276/" target="_blank" class="hover:bg-black hover:text-white p-3 rounded-2xl cursor-pointer ">
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                    <a href="https://www.instagram.com/ozcn59/" target="_blank" class="hover:bg-black hover:text-white p-3 rounded-2xl cursor-pointer ">
                        <i class="fa-brands fa-instagram fa-2xl"></i>
                    </a>
                    <a href="https://twitter.com/ozcanfed" target="_blank" class="hover:bg-black hover:text-white p-3 rounded-2xl cursor-pointer ">
                        <i class="fa-brands fa-twitter fa-2xl"></i>
                    </a>
                </div>
            </div>
            <div class="flex-1 border p-10">
                <form action="">
                    <div class="mb-6">
                        <label for="name">Ihre Name</label>
                        <input type="text" id="name" placeholder="Name"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mb-6">
                        <label for="email">Ihre Email</label>
                        <input type="text" id="email" placeholder="Email" 
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ihre
                            Nachricht</label>
                        <textarea id="message" rows="4" 
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=" disabled"></textarea>
                    </div>
                    <a type="submit" href="mailto:ozcan.fed@gmail.com" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Nachricht Senden</a>

                </form>
            </div>

        </div>

</div></template>