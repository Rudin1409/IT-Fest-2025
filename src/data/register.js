
import { Award, Code, Mic, Film, Palette } from 'lucide-react';
import React from 'react';

export const competitions = [
    { 
        title: "Mobile Legends", 
        description: "Adu strategi dan kekompakan tim dalam turnamen e-sport paling bergengsi.", 
        icon: <Award size={24} />, 
        registerLink: "https://bit.ly/PendaftaranLombaMobileLegendITFestival2025" 
    },
    { 
        title: "E-Goverment", 
        description: "Kompetisi membuat solusi inovatif untuk pemerintahan digital.", 
        icon: <Award size={24} />, 
        registerLink: "https://bit.ly/PendaftaranLombaE-GovernmentITFestival2025" 
    },
    { 
        title: "Lomba Cipta Inovasi", 
        description: "Ciptakan dan presentasikan inovasi teknologi kreatifmu.", 
        icon: <Award size={24} />, 
        registerLink: "https://bit.ly/PendaftaranLombaCiptaInovasiITFestival2025" 
    },
    { 
        title: "Lomba Animasi", 
        description: "Buat karya animasi 3D yang memukau dan menangkan hadiahnya.", 
        icon: <Film size={24} />, 
        registerLink: "https://bit.ly/PendaftaranLombaAnimasiITFestival2025" 
    },
    { 
        title: "Lomba Desain Poster", 
        description: "Rancang poster yang menarik dan informatif sesuai tema.", 
        icon: <Palette size={24} />, 
        registerLink: "https://bit.ly/PendaftaranLombaDesignPosterITFestival2025" 
    }
];

export const trainings = [
    { 
        title: "Android Development", 
        description: "Belajar membangun aplikasi Android dari dasar hingga mahir bersama para ahli.", 
        icon: <Code size={24} />, 
        registerLink: "https://bit.ly/PendaftaranPelatihanAndroidITFestival2025" 
    },
    { 
        title: "Web Development", 
        description: "Kuasai pengembangan web dari sisi front-end hingga back-end dalam pelatihan intensif.", 
        icon: <Code size={24} />, 
        registerLink: "https://bit.ly/PendaftaranPelatihanWebITFestival2025" 
    }
];

export const seminars = [
    { 
        title: "Seminar Teknologi", 
        description: "Dapatkan wawasan terbaru dari para pembicara ahli di industri teknologi.", 
        icon: <Mic size={24} />, 
        registerLink: "https://bit.ly/PendaftaranSeminarITFestival2025" 
    }
];
