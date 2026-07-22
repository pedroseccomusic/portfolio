const iniciarSlideshow = () => {
    const container = document.getElementById('slideshow-fotos');
    if (!container) return;

    const fotos = [
        "assets/photos/23.jpg",
        "assets/photos/1.JPG",
        "assets/photos/18.jpg",
        "assets/photos/21.jpg",
        "assets/photos/11.JPG",
        "assets/photos/19.jpg",
        "assets/photos/3.jpg",
        "assets/photos/13.jpg",
        "assets/photos/22.jpg",
        "assets/photos/14.jpg",
        "assets/photos/12.jpg"
    ];

    fotos.forEach((foto, index) => {
        const classeAtiva = index === 0 ? 'ativo' : '';
        const imgHTML = `<img src="${foto}" class="slide ${classeAtiva}" alt="Slideshow">`;
        container.insertAdjacentHTML('beforeend', imgHTML);
    });

    const slides = document.querySelectorAll('.slide');
    let slideAtual = 0;

    setInterval(() => {
        slides[slideAtual].classList.remove('ativo');

        slideAtual = (slideAtual + 1) % slides.length;

        slides[slideAtual].classList.add('ativo');
    }, 5000); 
};


const arranjosData = [
    {
        id: 1,
        titulo: "Désolée",
        descricao: `Written by Pedro Secco in October 2022.
        In this chart, the song was arranged for string quintet plus piccolo and oboe.
        Live recorded at Berklee Studio 3 by an ensemble of professional musicians hired by
        the school.`,
        thumb: "assets/thumb/Desolee_FullScore/1.png",
        pdf: "assets/score/Desolee_FullScore_secure.pdf",
        audio: "assets/audio/Desolee_Master.mp3",
        video: "" 
    },
    {
        id: 2,
        titulo: "Hortênsias",
        descricao: `Hortênsias is an orchestral piece composed as Secco’s final project during his
        time studying Contemporary Writing and Production at Berklee. The piece represents an old woman
        taking care of her hydrangeas, while she struggles to let go of her most obsessive and traumatic thoughts.
        It was recorded in May 2026, at Futura Productions, in Roslindale, M, by a chamber orchestra formed by
        professional orchestral musicians hired by Berklee.`,
        thumb: "assets/thumb/Hortensias_FullScore/1.png",
        pdf: "assets/score/Hortensias_FullScore_secure.pdf",
        audio: "assets/audio/Hortensias_Rec.mp3",
        video: ""
    },
    {
        id: 3,
        titulo: "Qui Nem Jiló",
        descricao: `Arrangement of the popular Gonzaga tune by Pedro Secco. The piece was part of the concert
        A Night In Brazil, which took place at the Berklee Performance Center in February 2025. This concert was
        the very first student-led show exclusively dedicated towards Brazilian music on the BPC, and Secco was
        the co-music director of the project.`,
        thumb: "assets/thumb/QUI_NEM_JILO_Score_secure/1.png",
        pdf: "assets/score/QUI_NEM_JILO_Score.pdf",
        audio: "",
        video: "https://www.youtube.com/embed/1lsneH77xWA?si=AKyKqAyuzK2XirEc"  
    },
    {
        id: 4,
        titulo: "Borzeguim (A Cappella)",
        descricao: `This project consist in an A Cappella arrangement of the song “Borzeguim” by Antonio Carlos Jobim.
        The ensemble had seven singers (Soprano, 2 Alto, 2 Tenor, Baritone, Bass). It was the final project of the
        class Vocal Writing at Berklee College of Music. This recording consists of a demo, with the bass being a regular
        MIDI sampled instrument.`,
        thumb: "assets/thumb/PedroSecco_Borzerguim/1.png",
        pdf: "assets/score/PedroSecco_Borzerguim_secure.pdf",
        audio: "assets/audio/VocalWriting_Borzeguim.mp3",
        video: "" 
    },
    {
        id: 5,
        titulo: "Lost",
        descricao: `Lost by Wayne Shorter, arranged for 8-5-4 Big Band Ensemble. This chart was written as the final
        project for Writing for Big Band class at Berklee College of Music. Live recorded by an ensemble formed by
        fellow Berklee students.`,
        thumb: "assets/thumb/Lost_Final_FullScore/1.png",
        pdf: "assets/score/Lost_Final_FullScore_secure.pdf",
        audio: "assets/audio/Lost_PedroSecco.mp3",  
        video: ""
    },
    {
        id: 6,
        titulo: "Ney Matogrosso Medley / Rosa de Hiroshima (1) / Homem com H (2) / América do Sul (3)",
        descricao: `This medley was a piece written for the show Idolos Latinos 2026, biggest Latin music concert at Berklee,
        organized by the Latin American Association of Berklee Students. The medley featured three songs: Rosa de Hiroshima,
        Homem com H, and América do Sul. The arrangement aimed to capture the contrast between the first song 
        – intimate, dramatic, sad – to the last song, which is a festive celebration of South America. The piece was sung by
        Brazilian singer Jade Faria, backed up by a brass and strings orchestra of more than 40 musicians.`,
        thumb: "assets/thumb/SCORE_NeyMedley_V4/1.png",
        pdf: "assets/score/SCORE_NeyMedley_V4_secure.pdf",
        audio: "", 
        video: "https://vimeo.com/showcase/9726865?video=1171103863#t=47m11s"
    }
];

const renderizarArranjos = () => {
    const container = document.getElementById('container-arranjos');
    if (!container) return; 

    container.innerHTML = ''; 

    arranjosData.forEach(arranjo => {
        let midiaHTML = '';

        if (arranjo.audio !== "") {
            midiaHTML = `
                <audio controls class="player-audio">
                    <source src="${arranjo.audio}" type="audio/mpeg">
                </audio>
            `;
        } else if (arranjo.video !== "") {
            midiaHTML = `
                <a href="${arranjo.video}" target="_blank" class="btn-youtube">
                    Assistir Performance
                </a>
            `;
        }

        const cardHTML = `
            <article class="item-arranjo">
                <a href="${arranjo.pdf}" target="_blank" class="link-partitura" title="Abrir partitura em PDF">
                    <div class="imagem-partitura">
                        <img src="${arranjo.thumb}" alt="Partitura de ${arranjo.titulo}">
                        <div class="overlay-pdf">
                            <span>Ver Partitura (PDF)</span>
                        </div>
                    </div>
                </a>
                
                <div class="info-arranjo">
                    <h3 class="titulo-arranjo">${arranjo.titulo}</h3>
                    <p>${arranjo.descricao}</p>
                    
                    ${midiaHTML}
                </div>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });

    const todosOsAudios = document.querySelectorAll('.player-audio');
    todosOsAudios.forEach(audioAtual => {
        audioAtual.addEventListener('play', () => {
            todosOsAudios.forEach(outroAudio => {
                if (outroAudio !== audioAtual) {
                    outroAudio.pause();
                }
            });
        });
    });
};


const videosData = [
    {
        id: 1,
        titulo: "Salvador (E. Gismonti) - Pedro Secco // feat. Ludwig Izaguirre",
        descricao: `Song written by Egberto Gismonti.<br>
        Recorded on April 6th, 2024, at Berklee College of Music studios.<br>
        Performed by Pedro Secco (nylon guitar) and Ludiwig Izaguirre (6-string bass)<br>
        Arranged by Pedro Secco<br>
        Recorded and mixed by Jeongwoo Park<br>
        Video by Dawid Dobrzynsk`,
        linkEmbed: "https://www.youtube.com/embed/PnxV3q3cPfg?si=qOwz-pOu4vRWJELa"
    },
    {
        id: 2,
        titulo: `Pedro Secco guitar solo on "Lilás", by Djavan, with the Berklee AVJC`,
        descricao: `Directed by Ned J. Rosenblatt, the Berklee Advanced Vocal Jazz Choir is a nationally
        acknoledged vocal jazz ensembled, winner of several Downbeat Magazine contests. This performance was
        live at the Allen Center, in Newton, MA.`,
        linkEmbed: "https://www.youtube.com/embed/imkqFJd7eII?si=zgzPUj8M9gbIm9GC"
    },
    {
        id: 3,
        titulo: "Garoa e Maresia (Guinga) - Pedro Secco // feat. Rafael Heredia and Jan Portisch",
        descricao: `Recorded on April 3rd, 2024, at Berklee College of Music studios.<br>
        Performed by Pedro Secco (Nylon Guitar), Rafael Heredia (Drums/Percussion) and Jan Portisch (Bass).<br>
        Recorded by Vitor Rego and Anthony Maziero<br>
        Mixed and mastered by Raquel Saggin<br>
        Video by Dawid Dobrzynski`,
        linkEmbed: "https://www.youtube.com/embed/oE6_mAZxUL0?si=4rtHjUDHKbyqSAGg"
    },
    {
        id: 4,
        titulo: "Pedro Secco Quartet Live at the Red Room",
        descricao: `Guitar and bandleading: Pedro Secco<br>
        Drums/Percussion: Rafael Heredia<br>
        Bass: Jan Portisch<br>
        Piano: Arman Wali`,
        linkEmbed: "https://www.youtube.com/embed/kPDCYlWbySA?si=Gd-7r3zZi4UZOtK8" 
    },
];

const renderizarVideos = () => {
    const container = document.getElementById('container-videos');
    if (!container) return;

    container.innerHTML = '';

    videosData.forEach(video => {
        const videoHTML = `
            <article class="video-card">
                <!-- O Wrapper mágico de 16:9 -->
                <div class="wrapper-iframe">
                    <iframe src="${video.linkEmbed}" 
                            loading="lazy" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
                <div class="info-video">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="desc-video">${video.descricao}</p>
                </div>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', videoHTML);
    });
};

const libraryData = [
    {
        id: 1,
        titulo: "Tension",
        descricao: "This cue was written to represent a moment of extreme tension/suspense on a TV show.",
        audio: "assets/audio/MenegattiSecco_Tension.mp3"
    },
    {
        id: 2,
        titulo: "The Breakup",
        descricao: "This cue is meant to represent a moment of deep sadness that follows a breakup.",
        audio: "assets/audio/MenegattiSecco_TheBreakup_Full.mp3"
    },
    {
        id: 3,
        titulo: "The Breakup (Lite Version)",
        descricao: "Less dense version of 'The Breakup'",
        audio: "assets/audio/MenegattiSecco_TheBreakup_AltLite.mp3"
    }
    /*{
        id: 4,
        titulo: "Action",
        descricao: "This cue represents action with suspenseful elements.",
        audio: "#"
    } */
];

const renderizarLibrary = () => {
    const container = document.getElementById('container-library');
    if (!container) return;

    container.innerHTML = '';

    libraryData.forEach(trilha => {
        const linhaHTML = `
            <article class="item-trilha">
                <div class="info-trilha">
                    <h3>${trilha.titulo}</h3>
                    <p>${trilha.descricao}</p>
                </div>
                <!-- Usa a mesma classe 'player-audio' para pausar os outros ao tocar -->
                <audio controls class="player-audio player-trilha">
                    <source src="${trilha.audio}" type="audio/mpeg">
                </audio>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', linhaHTML);
    });
};

const uptbData = [
    {
        id: 1,
        titulo: "Jazz",
        descricao: "Comedy track in which the protagonist goes to school and starts realizing the cultural differences between him and others.",
        audio: "assets/audio/1m03_Jazz_mixv2.mp3"
    },
    {
        id: 2,
        titulo: "Struggle",
        descricao: "Track that follows the main character as he struggles to assemble his camera.",
        audio: "assets/audio/UPTB_1m04_Struggle.mp3"
    },
    {
        id: 3,
        titulo: "Weird Message",
        descricao: "The first time the protagonist receives USA span messages as he lays down in his bed.",
        audio: "assets/audio/1m05_WeirdMessage_Mixv2.mp3"
    }
];

const renderizarUptb = () => {
    const container = document.getElementById('container-uptb');
    if (!container) return;

    container.innerHTML = '';

    uptbData.forEach(trilha => {
        const linhaHTML = `
            <article class="item-trilha">
                <div class="info-trilha">
                    <h3>${trilha.titulo}</h3>
                    <p>${trilha.descricao}</p>
                </div>
                <!-- Usa a mesma classe 'player-audio' para pausar os outros ao tocar -->
                <audio controls class="player-audio player-trilha">
                    <source src="${trilha.audio}" type="audio/mpeg">
                </audio>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', linhaHTML);
    });
};

const configurarPlayersAudio = () => {
    const todosOsAudios = document.querySelectorAll('.player-audio');
    todosOsAudios.forEach(audioAtual => {
        audioAtual.addEventListener('play', () => {
            todosOsAudios.forEach(outroAudio => {
                if (outroAudio !== audioAtual) {
                    outroAudio.pause();
                }
            });
            
        });
    });
};

const configurarBotaoTopo = () => {
    const btnTopo = document.getElementById('btnVoltarTopo');
    if (!btnTopo) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    iniciarSlideshow();
    renderizarArranjos();
    renderizarVideos();
    renderizarLibrary();
    renderizarUptb();
    configurarPlayersAudio();
    configurarBotaoTopo();
});