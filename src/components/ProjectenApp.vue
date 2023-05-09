<template>
    <div id="Projekten" class="p-10">
        <div class="flex justify-center items-center text-center text-6xl font-extrabold">
            <h2>Portfolio</h2>
        </div>
        <div class="flex flex-col justify-center items-center gap-10 p-10 ">
            <div class="projekt1 flex w-full border bg-slate-100 p-10">
                <div class="static1 bg-slate-400 w-full">
                    <div class="slidebilder w-full bg-slate-400">
                        <vueper-slides fade :touchable="false">
                            <vueper-slide v-for="(slide, i) in slides1" :key="i" :image="slide.image" />
                        </vueper-slides>
                    </div>
                </div>
                <div class="flex flex-col w-80 pl-3 gap-5">
                    <p class="text-2xl font-bold">Auto Mieten Website</p>
                    <div>
                        <span class="tex-xl opacity-70">
                            Ich habe eine statische Webseite mit einem Router erstellt, die mit internen Links und
                            Animationseffekten angereichert ist.
                        </span>

                    </div>
                    <div class="flex items-center justify-evenly p-1">
                        <a href="https://github.com/oezcanyildiz/Portfolio-Projeckt-RentaCar" target="_blank"
                            class="hover:scale-125">
                            <i class="fa-brands fa-github pr-1"> </i>
                            <span>Code</span>
                        </a>
                        <a href="https://fastidious-longma-efa61d.netlify.app/" target="_blank" class="hover:scale-125">
                            <i class="fa-solid fa-square-caret-right pr-1"> </i>
                            <span>Live</span>
                        </a>
                    </div>
                </div>

            </div>
            <div class="projekt2 flex flex-col w-full border bg-slate-100 p-10">
                <div class="static2 flex w-full">
                    <div class="flex flex-col w-72 px-5 gap-5">
                        <p class="text-2xl font-bold">E-commerce | Leat & Her`s</p>
                        <div>
                            <span class="tex-xl opacity-70">
                                Im Slider sehen Sie eine dynamische Version von Leat & Her's. Wenn Sie jedoch unten auf LIVE
                                klicken, sehen Sie nur die statische Version, da ich für das Projekt den sogenannten
                                <strong>'JSON-Server'/Fake-API</strong> verwendet habe.
                            </span>

                        </div>
                        <div class="flex items-center justify-evenly p-1">
                            <a href="https://github.com/oezcanyildiz/Portfolio-Projekt-2-LeatHers-Website.git" target="_blank" class="hover:scale-125">
                                <i class="fa-brands fa-github pr-1"> </i>
                                <span>Code</span>
                            </a>
                            <a href="https://magical-flan-95b964.netlify.app/" target="_blank" class="hover:scale-125">
                                <i class="fa-solid fa-square-caret-right pr-1"> </i>
                                <span>Live</span>
                            </a>
                        </div>
                    </div>
                    <div class="w-full slider2img">
                        <vueper-slides fade :touchable="false">
                            <vueper-slide v-for="(slide, i) in slides2" :key="i" :image="slide.image" />
                        </vueper-slides>
                    </div>
                </div>
                <div class="erklärung flex text-center justify-center items-center p-10">
                    <h2>In den Projeckt als <strong>PACKAGE</strong>`s wurde
                        <strong>"Router"</strong>,
                        <strong>"Vuex"</strong>,
                        <strong>"Secure-ls"</strong>,
                        <strong>"Flowbite"</strong>,
                        <strong>"AXIOS"</strong>,
                        <strong>"JSON-Server"</strong>,
                        <strong>"Crypto-JS"</strong>,
                        <strong>"PersistedState"</strong>
                    </h2>
                    <p>Da in der Live-Demo nur die statische Version zu sehen ist, würde ich mich freuen, Ihnen im
                        Vorstellungsgespräch die dynamische Version zeigen zu können.</p>

                </div>
            </div>
            <div class="projekt3 flex flex-col w-full border bg-slate-100 p-10">
                <div class="static1 w-full flex">
                    <div class="flex flex-col w-72 pr-3 gap-5">
                        <p class="text-2xl font-bold">Hire UP!</p>
                        <div>
                            <span class="tex-xl opacity-70">
                                Es handelt sich um eine Plattform für Job-Angebote. Das Projekt befindet sich noch in der
                                Entwicklungsphase.
                            </span>

                        </div>
                    </div>
                    <div class="slidebilder w-full blur-sm">
                        <vueper-slides fade :touchable="false">
                            <vueper-slide v-for="(slide, i) in slides3" :key="i" :image="slide.image" />
                        </vueper-slides>
                    </div>
                </div>
                <div class="erklärung flex text-center justify-center items-center p-10">
                    <h2>In den Projeckt als <strong>PACKAGE</strong>`s wird
                        <strong>"Router"</strong>,
                        <strong>"Vuex"</strong>,
                        <strong>"Secure-ls"</strong>,
                        <strong>"Moment-JS"</strong>,
                        <strong>"AXIOS"</strong>,
                        <strong>"JSON-Server"</strong>,
                        <strong>"Crypto-JS"</strong>,
                        <strong>"PersistedState"</strong>
                        <strong>"Socket-IO"</strong>
                    </h2>
                    <p>In dem Website wird man nach Jobs in verschiedenen Branchen suchen können, sich auf der Website
                        registrieren, einloggen und ausloggen, Anzeigen schalten, liken und die als
                        Favoriten speichern sowie einsehen können, wer und wann die Anzeige veröffentlicht wurde.</p>

                </div>
            </div>
        </div>

    </div>
</template>

<style>
.vueperslides__arrow {
    color: black
}
</style>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    components: { VueperSlides, VueperSlide },
    data() {
        return {
            slides1: [
                {
                    image: "src/img/Car-Planet1.png"
                },
                {
                    image: "src/img/Car-Planet2.png"
                },
                {
                    image: "src/img/Car-Planet3.png"
                },
                {
                    image: "src/img/Car-Planet4.png"
                },
            ],
            slides2: [
                {
                    image: "src/img/Leather1.png"
                },
                {
                    image: "src/img/Leather2.png"
                },
                {
                    image: "src/img/Leather3.png"
                },
                {
                    image: "src/img/Leather4.png"
                },
                {
                    image: "src/img/Leather5.png"
                },
                {
                    image: "src/img/Leather6.png"
                },
            ],
            slides3: [
                {
                    image: "src/img/HIRE-UP.png"
                },
                {
                    image: "src/img/HIRE-UP1.png"
                },
                {
                    image: "src/img/HIRE-UP2.png"
                },
                {
                    image: "src/img/HIRE-UP3.png"
                },
            ],
        }
    },
}
</script>