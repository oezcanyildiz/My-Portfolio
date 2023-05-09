<template>
    <header id="Home"
        class="text-white flex justify-between px-20 py-10 bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
        <h1 class="md:text-4xl font-bold">OY®</h1>
        <nav class="flex gap-5 text-center justify-center items-center text-2xl">
            <i class="fa-solid fa-bars md:hidden"></i>
            <a href="#Home" class="hover:underline">Home</a>
            <a href="#about" class="hover:underline">About me</a>
            <a href="#Tech" class="hover:underline">Tech Stack</a>
            <a href="#Projekten" class="hover:underline">Projekten</a>
            <a href="#Kontakt" class="hover:underline">Kontakt</a>
        </nav>
    </header>
    <div class=" w-full h-screen 2xl:px-44 ">
        <div class="flex justify-center items-center z-50">
            <div class="p-10 textanim">
                <h2 class="md:text-4xl font-bold py-5">Hallo, Mein Name ist Ozcan Yildiz</h2>
                <p>
                    Ich arbeite als <strong class="text-xl">Web Dvelopper</strong> daran, eure Träume und Gedanken zu verwirklichen. 
                    Durch meine Kreativität versuche ich, meine Fähigkeiten bestmöglich einzusetzen und neue und
                    interessante Projekte im Internet zu realisieren. Deshalb halte ich mich immer auf dem neuesten Stand
                    der Technologie und bilde mich kontinuierlich weiter und Ich bemühe mich ständig, 
                    <strong>
                        die Kluft zwischen meinen Fähigkeiten und meiner Vorstellungskraft zu schließen.
                    </strong>
                </p>
            </div>
            <div class="p-20">
                <div class="myanim bg-blue-300 ball-4 rounded-full flex justify-center items-center">
                    <div class="bg-blue-200 ball-3 rounded-full flex justify-center items-center">
                        <div class="bg-blue-100 ball-2 rounded-full flex justify-center items-center">
                            <div class="ball-1 bg-white rounded-full flex justify-center items-center">
                                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_mlp3zxve.json"
                                    background="transparent" speed="1" style="width: 300px; height: 300px;" loop
                                    autoplay></lottie-player>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
.ball-1 {
    width: 340px;
    height: 340px;
}

.ball-2 {
    width: 360px;
    height: 360px;
}

.ball-3 {
    width: 380px;
    height: 380px;
}

.ball-4 {
    width: 400px;
    height: 400px;
}

.myanim {
    animation: myAnim 1s ease 0s 1 normal forwards;
}
.textanim{
    animation: textanim 1s ease 0s 1 normal forwards;
}
@keyframes textanim {
	0% {
		transform: translateX(350px);
        opacity: 0;
	}

	100% {
		transform: translateX(50px);
        opacity: 1;
	}
}



@keyframes myAnim {
    0% {
        transform: scale(0.2);
    }

    100% {
        transform: scale(1);
    }
}</style>