'use client';
import { motion as m } from "framer-motion";
import { Doughnut, Line, Bar, Chart } from "react-chartjs-2";
import Link from "next/link";
import ArticleHero from "@/components/ArticleHero";
import ArticleSubtexts from "@/components/ArticleSubtexts";
import ArticleText from "@/components/ArticleText";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler,
    LineController,
    BarController,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    LineController,
    BarController,
    Title,
    Tooltip,
    Legend,
    Filler,
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
        },
    },
};

export const dataA = {
    labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
        2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042,
        2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056,
        2057, 2058, 2059, 2060],
    datasets: [
        {
            label: 'Indice di Dipendenza Strutturale',
            data: [49.1, 49.7, 50.0, 50.7, 51.4, 51.9, 52.1, 52.3, 52.6, 52.7, 53.5,
                54.2, 54.8, 55.4, 55.8, 56.1, 56.2, 56.4, 56.7, 57.3, 57.5, 57.4, 57.5],
            borderColor: '#2a9d8f',
            backgroundColor: '#2a9d8f',
        },
        {
            label: 'Previsioni',
            data: [49.1, 49.7, 50.0, 50.7, 51.4, 51.9, 52.1, 52.3, 52.6, 52.7, 53.5,
                54.2, 54.8, 55.4, 55.8, 56.1, 56.2, 56.4, 56.7, 57.3, 57.5, 57.4, 57.5,
                58, 58, 59, 59, 60, 62, 63, 64, 65, 67, 68, 70, 72, 73, 75, 77, 78, 79,
                81, 82, 82, 83, 83, 84, 84, 84, 84, 84, 84, 84, 84, 83, 83, 83, 82, 82]
            ,
            borderColor: '#e9c46a',
            backgroundColor: '#e9c46a',
        },
    ],
};

export const dataB = {
    labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
        2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042,
        2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056,
        2057, 2058, 2059, 2060],
    datasets: [
        {
            label: 'Indice di Dipendenza degli Anziani',
            data: [27.9, 28.4, 28.8, 29.4, 30.0, 30.5, 30.6, 30.8, 31.1, 31.2, 32.0, 32.6,
                33.3, 34.0, 34.5, 35.0, 35.4, 35.8, 36.4, 37.0, 37.5, 37.8, 38.3]
            ,
            borderColor: '#2a9d8f',
            backgroundColor: '#2a9d8f',
        },
        {
            label: 'Previsioni',
            data: [27.9, 28.4, 28.8, 29.4, 30.0, 30.5, 30.6, 30.8, 31.1, 31.2, 32.0, 32.6,
                33.3, 34.0, 34.5, 35.0, 35.4, 35.8, 36.4, 37.0, 37.5, 37.8, 38.3, 39, 40, 40,
                41, 42, 44, 45, 46, 48, 49, 50, 52, 53, 55, 56, 57, 59, 60, 61, 61, 62, 63, 63,
                63, 63, 64, 64, 64, 63, 63, 63, 63, 63, 63, 62, 62]
            ,
            borderColor: '#e9c46a',
            backgroundColor: '#e9c46a',
        },
    ],
};

export const dataC = {
    labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
        2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042,
        2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056,
        2057, 2058, 2059, 2060],
    datasets: [
        {
            label: 'Indice di Vecchiaia',
            data: [131.7, 133.5, 135.6, 138.0, 140.3, 142.1, 143.1, 143.7, 144.4, 145.2, 148.4,
                151.1, 154.6, 158.3, 162.0, 165.9, 169.5, 174.0, 179.4, 182.6, 187.6, 193.1, 199.8]
            ,
            borderColor: '#2a9d8f',
            backgroundColor: '#2a9d8f',
        },
        {
            label: 'Previsioni',
            data: [131.7, 133.5, 135.6, 138.0, 140.3, 142.1, 143.1, 143.7, 144.4, 145.2, 148.4, 151.1,
                154.6, 158.3, 162.0, 165.9, 169.5, 174.0, 179.4, 182.6, 187.6, 193.1, 199.8, 206, 213,
                220, 228, 235, 244, 252, 260, 267, 273, 279, 284, 288, 292, 295, 299, 301, 304, 305, 306,
                307, 307, 307, 308, 308, 308, 308, 309, 309, 310, 311, 312, 313, 314, 314, 315]
            ,
            borderColor: '#e9c46a',
            backgroundColor: '#e9c46a',
        },
    ],
};

export const dataD = {
    labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
        2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042,
        2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056,
        2057, 2058, 2059, 2060],
    datasets: [
        {
            label: 'Età media',
            data: [41.9, 42.2, 42.3, 42.5, 42.7, 42.9, 43.1, 43.2, 43.4, 43.6, 43.8, 44.0, 44.2,
                44.5, 44.7, 45.0, 45.2, 45.5, 45.7, 45.9, 46.2, 46.4, 46.6]

            ,
            borderColor: '#2a9d8f',
            backgroundColor: '#2a9d8f',
        },
        {
            label: 'Previsioni',
            data: [41.9, 42.2, 42.3, 42.5, 42.7, 42.9, 43.1, 43.2, 43.4, 43.6, 43.8, 44.0, 44.2,
                44.5, 44.7, 45.0, 45.2, 45.5, 45.7, 45.9, 46.2, 46.4, 46.6, 46.8, 47.0, 47.2, 47.4,
                47.6, 47.8, 48.0, 48.2, 48.4, 48.6, 48.8, 49.0, 49.1, 49.3, 49.4, 49.6, 49.7, 49.9,
                50.0, 50.1, 50.2, 50.3, 50.4, 50.5, 50.6, 50.7, 50.8, 50.9, 50.9, 51.0, 51.0, 51.1,
                51.1, 51.1, 51.1, 51.1]

            ,
            borderColor: '#e9c46a',
            backgroundColor: '#e9c46a',
        },
    ],
};

export const dataE = {
    labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
        2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042,
        2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056,
        2057, 2058, 2059, 2060],
    datasets: [
        {
            type: 'line' as const,
            label: 'Crescita totale',
            backgroundColor: '#f4a261',
            borderColor: '#f4a261',
            data: [3.4, 7.4, 7.5, 4.2, 3.8, 8.4, 7.1, 4.5, 4.3, 2.6, 2.9, 1.1, -0.8,
                -2.2, -1.6, -2.1, -2.0, -2.9, -6.7, -3.5, -0.9, -1.2,
                -1.5, -1.8, -2.1, -2.3, -2.4, -2.5, -2.5, -2.6, -2.6, -2.7, -2.7,
                -2.8, -2.8, -2.9, -2.9, -3.0, -3.1, -3.3, -3.4, -3.5, -3.7, -3.9, -4.1,
                -4.3, -4.6, -4.8, -5.1, -5.3, -5.6, -5.8, -6.0, -6.2, -6.4, -6.5, -6.6, -6.7, -6.7],
            borderWidth: 4,
            fill: false,
        },
        {
            type: 'bar' as const,
            label: 'Crescita Naturale',
            backgroundColor: '#2a9d8f',
            data: [-0.3, -0.7, 0.3, -0.2, 0.0, -0.1, -0.1, -0.4, -0.4, -0.8, -1.3,
            -1.4, -1.6, -2.7, -2.4, -3.2, -3.2, -3.6, -5.6, -5.1, -5.5, -4.8,
            -5.3, -5.3, -5.3, -5.3, -5.3, -5.3, -5.4, -5.4, -5.5, -5.5, -5.6,
            -5.6, -5.7, -5.8, -5.8, -5.9, -6.1, -6.2, -6.3, -6.5, -6.7, -6.9,
            -7.1, -7.3, -7.6, -7.9, -8.1, -8.4, -8.7, -8.9, -9.2, -9.4, -9.6, -9.7, -9.9, -10.0, -10.0],
        },

    ],
};

export const dataF = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
        45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
        67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
        89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]
    ,
    datasets: [
        {
            label: 'Popolazione 2020',
            data: [
                414974, 436785, 457314, 471696, 483769, 499144, 507291, 529473, 537902, 554146,
                562764, 569337, 568025, 569063, 565871, 572210, 568006, 565389, 574707, 590744,
                587458, 593017, 590999, 592782, 591632, 598620, 610326, 636742, 635013, 647793,
                646752, 661651, 649095, 652402, 672541, 685014, 696978, 720776, 725693, 743730,
                766871, 807492, 833206, 869464, 910431, 947191, 941384, 950417, 959708, 951065,
                976325, 968981, 972528, 980815, 978055, 990171, 927825, 895469, 876379, 847647,
                825539, 787331, 777491, 759731, 743258, 729584, 693488, 679502, 673956, 694484,
                694140, 718819, 696577, 689079, 525745, 533883, 530624, 518346, 511316, 549844,
                526084, 493871, 439070, 392934, 379577, 344257, 308797, 273406, 245503, 224661,
                178020, 148233, 121373, 95283, 73451, 55649, 41447, 29302, 20560, 13421, 6395,
                3888, 2221, 1197, 607, 288, 127, 52, 20, 7, 3]
            ,
            backgroundColor: '#2a9d8f',
        },
        {
            label: 'Popolazione 2030',
            data: [394419, 396575, 399317, 401900, 404308, 405895, 407934, 410107, 417856, 423938, 440617,
                459372, 478940, 492505, 504479, 519354, 527245, 550636, 561561, 579925, 592287, 603375, 606950,
                612780, 613916, 624921, 616707, 615750, 624502, 636819, 630664, 634360, 630887, 630850, 627073,
                631630, 640592, 664637, 660988, 671915, 668822, 683038, 668869, 670388, 688662, 700050, 710540,
                732838, 735462, 752011, 773170, 811401, 835742, 869248, 907855, 941194, 933396, 939434, 945519,
                933990, 954895, 943724, 943504, 947643, 940479, 946991, 882838, 846181, 822353, 789623, 762314,
                720351, 704463, 681295, 658781, 637448, 597933, 575978, 560318, 564487, 549411, 552260, 516877,
                491497, 357352, 344890, 322167, 293157, 267204, 261477, 225220, 187727, 146030, 112560, 92355,
                70048, 51572, 37144, 4370, 2493, 1417, 778, 385, 181, 36, 14, 5, 2, 1]

            ,
            backgroundColor: '#e9c46a',
        },
        {
            label: 'Popolazione 2040',
            data: [
                401708, 404233, 405907, 406776, 407583, 408185, 408400, 408652, 409658, 410592,
                411500, 412756, 414758, 416835, 418977, 420593, 423068, 426289, 435825, 444471,
                464459, 487147, 510997, 528836, 544769, 563112, 573888, 599360, 611526, 630197,
                641963, 651640, 653258, 656903, 655897, 664836, 654699, 651815, 658567, 668823,
                660651, 662277, 656783, 654728, 648992, 651587, 658606, 680637, 675237, 684332,
                679572, 691954, 676279, 676116, 692446, 701904, 710404, 730371, 730927, 744928,
                763263, 797928, 818767, 848068, 881872, 910043, 898383, 899549, 900379, 884096,
                897769, 880838, 873464, 869302, 854019, 850029, 782554, 739078, 706270, 664987,
                627647, 577847, 547994, 511521, 474313, 437159, 387653, 349905, 315470, 291274,
                256547, 230518, 190180, 157552, 97948, 80125, 62323, 46573, 34372, 26730, 17937,
                11374, 6541, 3628, 2074, 1062, 510, 231, 100, 42, 21
            ]
            ,
            backgroundColor: '#e76f51',
        },
        {
            label: 'Popolazione 2050',
            data: [
                370989, 378435, 385529, 392118, 398096, 403683, 407964, 411670, 414660, 417234,
                418909, 420550, 421497, 421864, 422405, 423029, 423670, 424950, 427717, 431182,
                435372, 440541, 446816, 453165, 459288, 464423, 469839, 475257, 486128, 495207,
                514699, 536067, 558026, 573752, 587576, 603884, 612710, 636183, 646353, 662958,
                672652, 680250, 679827, 681454, 678492, 685476, 673551, 668918, 673915, 682443,
                672729, 672776, 665799, 662233, 655031, 656041, 661365, 681380, 674336, 681433,
                674855, 684912, 667467, 665030, 678420, 684875, 690177, 706174, 703287, 712786,
                726012, 753951, 768148, 789234, 813456, 831112, 811480, 802191, 791245, 763782,
                760232, 728743, 703135, 677592, 640954, 609942, 533072, 473306, 421054, 364659,
                312817, 258421, 216806, 176620, 140832, 110030, 81554, 60820, 44663, 33065,
                22903, 15820, 9760, 5903, 2592, 1459, 756, 362, 165, 76, 44
            ]
            ,
            backgroundColor: '#b8c0ff',
        },
        {
            label: 'Popolazione 2060',
            data: [
                333519, 337173, 341531, 345972, 351146, 356561, 362372, 368779, 375166, 381856,
                388332, 394895, 401263, 407348, 413056, 418662, 423362, 428087, 432828, 437919,
                442862, 448401, 453610, 458244, 462768, 466923, 470525, 474035, 478190, 482157,
                485952, 489919, 494422, 498750, 502840, 506014, 509519, 513024, 521932, 529007,
                546437, 565725, 585611, 599319, 611175, 625554, 632552, 654179, 662641, 677551,
                685640, 691680, 689782, 689931, 685536, 690966, 677685, 671595, 674935, 681667,
                670385, 668618, 659889, 654384, 645228, 643937, 646652, 663304, 653669, 657366,
                647746, 653594, 633092, 626421, 634034, 634425, 633020, 640312, 629448, 628087,
                628428, 638958, 635074, 633420, 630489, 617849, 574334, 535436, 493097, 439159,
                398180, 343159, 293592, 247226, 201538, 162832, 119344, 87696, 63801, 44474,
                30204, 19316, 12231, 7329, 4187, 2275, 1135, 551, 253, 113, 72
            ]
            ,
            backgroundColor: '#cdb4db',
        },
    ],
};

export const dataG = {
    labels: [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [
        {
            label: '0-17',
            data: [11.7, 12, 12.3, 12.7, 12.1, 11.2, 10.6, 12.1, 12.6, 11.4, 11.2, 12.5, 11.7,
                12.6, 12.7, 15.3, 17.5, 19, 20.2, 22.3, 21.5, 21.9, 22, 20.4, 22, 22.2]
            ,
            borderColor: '#e9c46a',
            backgroundColor: '#e9c46a',
            borderWidth: 4,
        },
        {
            label: '18-34',
            data: [10.5, 11, 10.8, 11.6, 11.3, 10.2, 10, 10.6, 11.2, 9.8, 10.2, 12.2, 11, 12.2,
                12.6, 15.2, 15.7, 14.7, 16.6, 16.8, 19, 17.8, 17.5, 16.4, 17.4, 16.8]
            ,
            borderColor: '#e76f51',
            backgroundColor: '#e76f51',
            borderWidth: 4,
        },
        {
            label: '34-64',
            data: [8.8, 8.6, 8.8, 9.4, 9, 8.3, 7.6, 8.7, 8.6, 7.8, 8.3, 8.8, 8.6, 9.3, 9.1, 11.1,
                11.5, 11.4, 12.7, 12.7, 14.5, 13.7, 13.6, 12.5, 13.7, 13.1]
            ,
            borderColor: '#2a9d8f',
            backgroundColor: '#2a9d8f',
            borderWidth: 4,
        },
        {
            label: '65+',
            data: [16.1, 15.2, 16.1, 16.3, 15.9, 14.9, 14.2, 15.1, 13.7, 13.8, 13.4, 12.1, 12,
                11.6, 12.1, 11.2, 10.1, 9.8, 8.6, 8.2, 10.5, 10, 9.6, 8.1, 9.9, 8.2]
            ,
            borderColor: '#cdb4db',
            backgroundColor: '#cdb4db',
            borderWidth: 4,
        },
    ],
};


export default function Demography() {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}>
            <ArticleHero title="Il Problema Demografico italiano" description="Da anni il nostro Paese non cresce, sia per demografia che per produttività, e questo comporta una serie di gravi
                        problemi nel tessuto economico. L'argomento demografia è iniziata ad entrare nel dibattito popolare negli ultimi
                        anni ma il crucio di come risolvere la situazione è sulle scrivanie dei ricercatori da decenni. Sostenere una
                        ingente popolazione che andrà in pensione diventa insostenibile se chi lavora è sempre meno e guadagna come o meno
                        dei presenti pensionati. Per questo vorrei cercare di fare chiarezza su un tema così centrale per il futuro
                        del Paese Italia ma anche dei cittadini che lo abitano."/>

            <div className="outer_container">
                <div className='text-left relative flex flex-1 flex-col xl:w-1/2 gap-4'>
                    <h2 className="lg:bold-52">Una Panoramica della Situazione attuale.</h2>
                    <p className="description mt-6 lg:pr-40">
                        Demografia è un grande ombrello, contiene una marea di informazioni, di sfaccettature e di dettagli che da lontano
                        sono difficili da comprendere. Vediamo ora uno spiraglio delle statistiche italiane per avvicinarci a capire cosa
                        sta succedendo in questo strano Paese. Vorrei iniziare con degli indici di struttura, ovvero costruiti partendo dalle
                        diverse classi di età all'interno della popolazione, per questo prendiamo in considerazione:
                    </p>
                    <ul className="lg:px-10 description">
                        <li className="mb-4"><b>Indice di dipendenza strutturale:</b> rapporto tra popolazione in età non attiva
                            (0-14 anni e 65 anni e più) e popolazione in età attiva (15-64 anni), moltiplicato per 100. Indica in pratica il rapporto
                            tra la popolazione non lavorativa e quella che lavora, un aumento di questo indicatore comporta un maggiore carico sulle
                            spalle dei lavoratori di oggi rispetto alle spese della popolazione nel suo insieme.</li>
                        <li className="mb-4"><b>Indice di dipendenza anziani:</b> rapporto tra popolazione di 65 anni e più e popolazione
                            in età attiva (15-64 anni), moltiplicato per 100. Un aumento vertiginoso di questo indicatore comporta una popolazione
                            estremamente sbilanciata e soprattutto un sistema di previdenza fragile che si basa su un numero basso di lavotori in
                            proporzione alle spese per pensioni da gestire.</li>
                        <li className="mb-4"><b>Indice di vecchiaia:</b> rapporto tra popolazione di 65 anni e più e popolazione di
                            età 0-14 anni, moltiplicato per 100. Questo indicatore è molto interessante, specialmente se guardiamo alle previsioni ISTAT,
                            rappresenta in un certo senso uscenti ed entranti nel mondo del lavoro. Un indicatore che vede in futuro toccare il 300
                            significa che ci saranno all'incirca, per ogni nuovo lavoratore tre nuovi pensionati, uno scenario abbastanza problematico
                            se ricordiamo l'assenza decennale di crescita dei salari.</li>
                        <li className="mb-8"><b>Età media:</b> età media della popolazione detenuta a una certa data espressa in anni
                            e decimi di anno. Una popolazione che invecchia, come vediamo anche da tutti gli altri precedenti indicatori, comporta una grave
                            pressione sul sistema economico e lavorativo italiano e le previsioni ISTAT delineano uno scenario catastrofico in futuro.
                            Il sistema del Bel Paese non potrà reggere un tale rapporto tra classi d'età, serve un'inversione di rotta.</li>
                    </ul>

                    <div className="lg:px-10 max-container padding-container space-between flex flex-col lg:flex-row gap-10 pb-10">
                        <div className="flex-grow-1">
                            <Line options={options} data={dataA} width='600px' height='400px' />
                        </div>
                        <div className="flex-grow-1">
                            <Line options={options} data={dataB} width='600px' height='400px' />
                        </div>
                    </div>
                    <div className="lg:px-10 max-container padding-container space-between flex flex-col lg:flex-row gap-10 pb-10">
                        <div className="flex-grow-1">
                            <Line options={options} data={dataC} width='600px' height='400px' />
                        </div>
                        <div className="flex-grow-1">
                            <Line options={options} data={dataD} width='600px' height='400px' />
                        </div>
                    </div>
                </div>
            </div>

            <ArticleText title="Crescita della Popolazione: quadro allarmante." description="La crescita della popolazione è una statistica molto importante che porta con sè una serie di informazioni
                        interessanti, infatti una popolazione che cresce molto solitamente abita un Paese in via di sviluppo, in cui
                        le condizioni di vita vanno via via migliorandosi, mentre in Paesi sviluppati la crescita frena e
                        ci si concentra più sul benessere individuale, nonchè diminuisce la mortalità infantile grazie alla tecnologia
                        medica, portando il numero di figli a decrescere. Nel caso particolare dell'Italia la popolazione diminuisce da
                        ormai quasi due decenni e nel mentre invecchia mediamente, questo crea un sistema problematico in quanto sempre
                        meno devono sopperire ai bisogni di sempre più e senza aumenti di produttività e utilizzo di nuove tecnologie le
                        generazioni d'oggi non riescono a sostenere il benessere delle generazioni più anziane. La crescita può essere
                        letta come crescita naturale, differenza tra nati e morti, e crescita totale, che tiene o teneva l'Italia almeno
                        in pareggio, e questa è data dalla crescita naturale sommata all'immigrazione netta."/>
            <div className="graph_container">
                <Chart type="bar" options={options} data={dataE} width='600px' height='400px' />
            </div>

            <ArticleText title="Un'onda che ci affonderà?" description="Anche se un po' confusionario il grafico sottostante rappresenta la composizione della popolazione italiana
                        nel 2020 e in futuro tramite previsioni ISTAT. Possiamo notare come ci sia un'onda proveniente dal boom economico
                        e dal periodo successivo che si sta spingendo, come tempo comanda, alla veneranda età, al momento della pensione.
                        Quando questa onda si infrangerà sull muro della previdenza, senza una struttura produttiva e attrezzata potrebbero
                        essere dolori, ma forse qualche crampetto preliminare lo stiamo già sentendo. Se vogliamo farci un'idea più chiara
                        possiamo cliccare sulla legenda per non visualizzare specifiche annate, così da vedere magari il salto dal 2020 a
                        questo ipotetico 2060 che potrebbe essere, senza mezzi termini, un'ecatombe." />
            <div className="graph_container">
                <Bar options={options} data={dataF} width='600px' height='400px' />
            </div>

            <ArticleSubtexts title="Ne stiamo già pagando le conseguenze."
                description="Ma allora perchè non è già crollato tutto? Perchè l'INPS non ha dichiarato bancarotta? C'è da dire che
            sono ormai decenni che i contributi dei lavoratori non bastano a soddisfare il fabbisogno della previdenza e per
            questo lo Stato centrale sovvenziona l'Istituto Nazionale di Previdenza Sociale ogni anno con imposte e tasse
            della collettività atte non più al benessere della stessa nel suo insieme, bensì a quello di un gruppo ristretto
            e allo stesso tempo sempre più ampio: i pensionati. Ci sarà un motivo per cui il sistema non cede, forse è proprio
            perchè chi dovrebbe risentire dei problemi demografici non ne risente e come sappiamo, sfortunatamente, non esiste
            niente di gratuito fino in fondo e qualcuno deve pagare il conto alla fine."
                subtitle1="Povertà relativa"
                description1="Una lente triste ma interessante da cui vedere il problema dell'invecchiamento è la povertà, in particolare la
             povertà relativa, per la quale l'ISTAT definisce povera una famiglia di due componenti con una spesa per consumi
             inferiore o uguale alla spesa media per consumi pro-capite. In sostanza è una misura grossolana della disparità
             di ricchezza nella popolazione: se per esempio questo indicatore fosse alto, rappresenterebbe un Paese molto diviso,
             con molte persone in povertà e quindi sotto la media, rispetto a poche persone benestanti."
                subtitle2="Su chi grava la demografia?"
                description2="Nel grafico vediamo la povertà assoluta per fascia d'età, quindi, prendiamo ad esempio il dato nel 2021 per
             gli anziani, in quel caso circa il 10% degli anziani era al di sotto della media dei consumi degli anziani. Dallo
             stesso possiamo notare una cosa, abbastanza interessante: l'indice di povertà sale per tutti, tranne che per gli anziani.
             Le generazioni lavoratrici di oggi sostengono lo stile di vita delle generazioni passate a scapito della propria ricchezza
             ed in un sistema improduttivo e lassista questo comporta seri problemi di natura sia economica, che sociale e redistributiva."/>

            <div className="graph_container">
                <Line options={options} data={dataG} width='600px' height='400px' />
            </div>

            <div className="outer_container">
                <h3>Fonti:</h3>
                <ul className="description">
                    <li className="mb-4">
                        <Link href='https://demo.istat.it'>
                            <b>Indicatori demografici:</b> demo.istat.it</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://demo.istat.it/app/?i=PPR&l=it'>
                            <b>Previsioni sulla popolazione:</b> demo.istat.it</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://esploradati.istat.it/databrowser/#/it/dw/categories/IT1,HOU,1.0/HOU_POVER/DCCV_POVERTA_BRKN/DCCV_POVERTA_BRKN1/IT1,34_728_DF_DCCV_POVERTA_BRKN1_5,1.0'>
                            <b>Povertà assoluta e relativa:</b> istat.it</Link>
                    </li>
                </ul>
            </div>

        </m.div>
    );
}