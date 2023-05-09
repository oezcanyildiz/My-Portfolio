<template>
    <section id="about" class="realtiv w-full px-10 pb-10 aboutme">
        <h2 class="text-6xl font-bold text-center py-5 ">About me...</h2>
        <div class="flex">
            <div class=" relative pakize flex-1 cursor-pointer flex justify-center items-end text-white font-semibold">
                <p class="absolute yil text-4xl font-bold">2013</p>
                <div class="text-center p-3 flex flex-col gap-5 infos opacity-0">
                    <h2 class="text-2xl">
                        Pakize Narin Gymnasium
                    </h2>
                    <p>Abitur | 2013</p>
                </div>
            </div>
            <div
                class=" relative BSI-sprachschule flex-1 cursor-pointer flex justify-center items-end text-white font-semibold">
                <p class="absolute yil text-4xl font-bold">2016</p>
                <div class="text-center p-3 flex flex-col gap-5 infos opacity-0">
                    <h2 class="text-2xl">
                        BSI Sprachschule
                    </h2>
                    <p>Deutsch Zertifikat | 2016</p>
                </div>
            </div>
            <div class=" relative universität flex-1 cursor-pointer flex justify-center items-end text-white font-semibold">
                <p class="absolute yil text-4xl font-bold">2019</p>
                <div class="text-center p-3 flex flex-col gap-5 infos opacity-0">
                    <h2 class="text-2xl">
                        Berlin Freie Üniversität
                    </h2>
                    <p>Abbruch. | 2019</p>
                </div>
            </div>
            <div class=" relative opel flex-1 cursor-pointer flex justify-center items-end text-white font-semibold">
                <p class="absolute yil text-4xl font-bold">2022</p>
                <div class="text-center p-3 flex flex-col gap-5 infos opacity-0">
                    <h2 class="text-2xl">
                        Opel
                    </h2>
                    <p>Arbeit | 12.2022</p>
                </div>
            </div>
            <div class=" relative sgd flex-1 cursor-pointer flex justify-center items-end text-white font-semibold">
                <p class="absolute yil text-4xl font-bold">2023</p>
                <div class="text-center p-3 flex flex-col gap-5 infos opacity-0">
                    <h2 class="text-2xl">
                        SGD Fernstudium
                    </h2>
                    <p>Fern-Lehrgang | 2023</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center p-20">
            <div class="flex-1">
                <h1 class="uppercase text-4xl font-bold">
                    <p class="p-2 text-black">LOVE What You do: </p>
                    <p class="pl-10 text-red-500">do what you love.</p>
                </h1>
            </div>
            <div class="flex-1">
                <p class="leading-relaxed text-center">Ich habe kürzlich mein Abschlusszertifikat erhalten und bin eine motivierte Person, die bestrebt ist,
                    sich weiterzuentwickeln. Ich liebe meine Arbeit und arbeite hart dafür. <br> Aus diesem Grund suche ich
                    derzeit nach einem Unternehmen, in dem ich mich selbst und das Unternehmen weiterentwickeln und mich
                    wohl fühlen kann. Ich suche einen Arbeitsplatz, an dem ich meine Fragen ohne Zögern stellen und
                    langfristig arbeiten kann.</p>

            </div>
        </div>

    </section>
</template>
<style>
.infos {
    transition: 1s ease-in-out;
}

.yil {
    bottom: 30%;
    transition: 1s ease-in;
}

.pakize:hover .yil {
    transform: translateY(-200%);
    opacity: 0;
}

.pakize:hover .infos {
    transform: translateY(-100px);
    opacity: 1;
}

.BSI-sprachschule:hover .yil {
    transform: translateY(-200%);
    opacity: 0;
}

.BSI-sprachschule:hover .infos {
    transform: translateY(-100px);
    opacity: 1;
}

.universität:hover .yil {
    transform: translateY(-200%);
    opacity: 0;
}

.universität:hover .infos {
    transform: translateY(-100px);
    opacity: 1;
}

.opel:hover .yil {
    transform: translateY(-200%);
    opacity: 0;
}

.opel:hover .infos {
    transform: translateY(-100px);
    opacity: 1;
}

.sgd:hover .yil {
    transform: translateY(-200%);
    opacity: 0;
}

.sgd:hover .infos {
    transform: translateY(-100px);
    opacity: 1;
}





.pakize {
    background-image: url(../img/Pakize-narin.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25%;
    height: 500px;
    transition: 1s ease-in-out;
    -webkit-box-shadow: inset 5px 5px 50px 20px #000000;
    box-shadow: inset 5px 5px 50px 20px #000000;
}

.universität {
    background-image: url(../img/Fu-berlin.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25%;
    height: 500px;
    transition: 1s ease-in-out;
    -webkit-box-shadow: inset 5px 5px 50px 20px #000000;
    box-shadow: inset 5px 5px 50px 20px #000000;
}

.BSI-sprachschule {
    background-image: url(../img/BSI.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25%;
    height: 500px;
    transition: 1s ease-in-out;
    -webkit-box-shadow: inset 5px 5px 50px 20px #000000;
    box-shadow: inset 5px 5px 50px 20px #000000;
}

.opel {
    background-image: url(../img/Opel.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25%;
    height: 500px;
    transition: 1s ease-in-out;
    -webkit-box-shadow: inset 5px 5px 50px 20px #000000;
    box-shadow: inset 5px 5px 50px 20px #000000;
}

.sgd {
    background-image: url(../img/SGD.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25%;
    height: 500px;
    transition: 1s ease-in-out;
    -webkit-box-shadow: inset 5px 5px 50px 20px #000000;
    box-shadow: inset 5px 5px 50px 20px #000000;
}

.pakize:hover {
    flex: 2;
    -webkit-box-shadow: inset 5px 5px 30px 30px #000000;
    box-shadow: none;
}

.universität:hover {
    flex: 2;
    -webkit-box-shadow: inset 5px 5px 30px 30px #000000;
    box-shadow: none;
}


.BSI-sprachschule:hover {
    flex: 2;
    -webkit-box-shadow: inset 5px 5px 30px 30px #000000;
    box-shadow: none;
}


.opel:hover {
    flex: 2;
    -webkit-box-shadow: inset 5px 5px 30px 30px #000000;
    box-shadow: none;
}


.sgd:hover {
    flex: 2;
    -webkit-box-shadow: inset 5px 5px 30px 30px #000000;
    box-shadow: none;
}</style>