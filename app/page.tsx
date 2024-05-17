'use client';
import TextLeft from "@/components/TextLeft";
import TextRight from "@/components/TextRight";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import { motion as m } from "framer-motion";
import Rotating from "@/components/Rotating";


const dataData = [
  {
    title: 'Bilancio dello Stato',
    description: "Ogni giorno sentiamo discutere di come spendere le risorse del Paese, dove c'è carenza e dove c'è spreco, ma nel concreto come funziona il bilancio dello Stato?",
    link: '/gov_exp',
  },
  {
    title: "L'Entrata nell'Euro",
    description: "In Italia i prezzi sono veramente raddoppiati con l'entrata nell'Euro? Sfatiamo il mito della catastrofe inflazionistica.",
    link: '/lira_infl',
  },
  {
    title: 'Demografia italica',
    description: "Uno dei mostri nell'armadio azzurro che corrode il nostro futuro giorno dopo giorno distruggendo ogni parvenza di giustizia intergenerazionale.",
    link: '/demo',
  },
  {
    title: "Chi possiede l'Informazione?",
    description: 'Siamo abituati a leggere il nome della Testata giornalistica e del Direttore, ma di chi è la proprietà, chi possiede i giornali? Sono veramente tanto liberi quanto pensiamo?',
    link: '/journalism',
  }
]

const dataText = [
  {
    title: 'Patrimoniale: tassa intergenerazionale',
    description: "Una riforma della tassa sul patrimonio non può agire da sola, deve essere accompagnata da una riscrittura del sistema catastale e probabilmente anche una rilettura del federalismo regionale.",
    link: '/patr_tax',
  },
  {
    title: "Chi possiede l'Informazione?",
    description: 'Siamo abituati a leggere il nome della Testata giornalistica e del Direttore, ma di chi è la proprietà, chi possiede i giornali? Sono veramente tanto liberi quanto pensiamo?',
    link: '/journalism',
  }
]

export default function Home() {
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}>

      <Hero title="Funny Park" description="Un modo diverso di vedere ciò che ci circonda." />
      <Rotating />
      <Carousel title="Dati alla Mano" data={dataData} />
      <TextRight title="Informazione è Libertà Collettiva." image="/G1.png"
        description="Siamo ormai sommersi dall'informazione, dalle notizie, dalla comunicazione. Abbiamo superato il periodo storico dell'informazione
        per la sola elite e siamo approdati nell'informazione condivisa, ma c'è un prezzo: capire quale sia quella vera. Oggi il problema 
        più intenso e sentito nella quotidianità è discernere la verità dalla menzogna, anche se raccontata bene, proprio perchè sapere è libertà,
        è emancipazione, è progresso, è civiltà. Informare nel migliore dei modi deve essere l'obiettivo primo in quanto costruisce le basi 
        per il pensiero critico e per una vita senza le catene della mediocrità e del populismo. " />
      <TextLeft title="Complessità alla portata di tutti." image="/G2.png"
        description="Complesso. Parola scomparsa nel dibattito, ma oramai più che attuale. Ci vengono presentate risposte semplici 
        a problemi semplici in realtà astronomicamente complessi senza nemmeno preoccuparsi delle sfaccettature della realtà e della totale 
        irresponsabilità di tali affermazioni. La semplicità viene venduta come l'unico modo in cui l'informazione può raggiungere i non 
        addetti ai lavori, ma questo riduce solo in cenere la bellezza della vera dialettica. Spiegare la complessità, rendere comprensibile 
        il difficile è il punto focale di ogni articolo che si rispetti. Qui si cerca proprio di fare questo: semplificare senza perdere 
        di rigore e dettaglio, un quadro ampio di problemi complessi alla portata di tutti." />
      <Carousel title="Articoli" data={dataText} />

    </m.div>
  );
}
