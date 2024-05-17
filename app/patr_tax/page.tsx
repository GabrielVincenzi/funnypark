'use client';
import { motion as m } from "framer-motion";
import ArticleHero from "@/components/ArticleHero"
import Link from "next/link";
import Image from "next/image";
import ArticleText from "@/components/ArticleText";

const page = () => {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}>
            <ArticleHero title="La Patrimoniale come bilancia intergenerazionale."
                description="La tassa sugli immobili, o patrimoniale, risulta essere da tempo un tabù di difficile discussione. Allo stesso tempo costituisce un tassello essenziale nel quadro della revisione del sistema fiscale italiano in direzione di una maggiore equità sostanziale tra cittadini e soprattutto tra generazioni. L’aumento di tale imposta aprirebbe la strada ad una riduzione del carico fiscale che grava sui lavoratori e dell’evasione, nonché ad una redistribuzione più equa del potere d’acquisto ed imporrebbe maggiore trasparenza, costanza e vigilanza alle amministrazioni pubbliche locali e centrale.." />


            <div className="textarticle_container">
                <h2>Debito pubblico: una bestia da affamare.</h2>
                <p className="description">
                    “Ci possono essere molte buone ragioni per le quali il nostro Paese potrebbe considerare un’imposta patrimoniale
                    (in realtà sul patrimonio immobiliare), e infatti molti Paesi europei ce l’hanno”. Questo è il pensiero della
                    professoressa Elsa Fornero a proposito della tanto odiata tassa sul patrimonio. Le ragioni alla base riportano
                    la mente a due grandi problemi del Bel Paese: difficoltà nella finanza pubblica e gravi iniquità sociali, per
                    la precisione, intergenerazionali. Infatti un debito pubblico elevato deriva da anni in cui i governi in carica,
                    hanno utilizzato la spesa pubblica in misura doppia rispetto alle entrate fiscali accumulando debito che ricade
                    sulle spalle delle generazioni future. Perciò l’attuale generazione e quelle che seguiranno avranno sulle spalle
                    una pressione fiscale maggiore a causa della spesa pubblica corrente. In un sistema malato in cui il carico fiscale
                    è mal distribuito e grava per più del 50% sulla tassazione dei redditi che ricadono negli scaglioni compresi fra i
                    25 e i 55.ooo euro, sarebbe opportuno rimodellare l'intero impianto in modo da riequilibrare il rapporto tra tassazione
                    del reddito e tassazione del patrimonio. La riflessione fatta da Elsa Fornero ha scatenato qualcosa di più viscerale
                    rispetto alla mera critica, c’è stata più una polarizzazione del dibattito, inneggiando ad una fantomatica violazione
                    del sacrosanto “diritto” alla casa di proprietà. Sorvolando sul populismo vario, il punto cruciale è sostanzialmente
                    che il debito pubblico, in un modo o nell’altro, deve essere aggredito e ridotto, almeno nel suo rapporto con il prodotto
                    interno lordo. L’Italia deve intraprendere un sentiero che porti ad una riduzione del debito pubblico prendendo in
                    considerazione  l’attuale politica dell’imposizione fiscale italiana che risulta essere sbilanciata. In proposito è
                    utile analizzare i dati dell'Agenzia delle Entrate ed in particolare quantificare quanto lo Stato incassa dalle
                    imposte dirette ed indirette per capire la magnitudo di questa asimmetria.
                </p>
                <p className="description">
                    Nel 2022 le entrate in miliardi da Irpef ammontano a 204, da Ires a 37, dall’imposta sostitutiva sui redditi a 24,
                    dall’Iva a 175, dalle imposte di Bollo a 13, dal reddito da capitale 12 e dall’Imu a 18. Se aggiungiamo nel calderone
                    che l’imposizione sui redditi da capitale è una tassa flat al 26% o al 12.5% se si parla di BTP (altra manovra distorsiva),
                    mentre le imposte sul lavoro raggiungono il 43% a €50.000. Notiamo che la ricetta per il declino è praticamente pronta.
                    L'imposizione fiscale in Italia è fortemente asimmetrica in quanto il reddito da lavoro è molto tassato mentre altre forme
                    di reddito o ricchezza, la cui tassazione porterebbe a minori distorsioni, sono poco tassate. Si viene tassati in base ad
                    aliquote elevate anche per livelli di reddito relativamente bassi disincentivando la crescita dei redditi stessi per non
                    incorrere in aliquote marginali predatorie. "Aggredire" il capitale, per altro già tassato, è poco efficace in ragione
                    della possibilità di spostarlo con relativa facilità. Restano gli immobili su cui si applica, con esclusione dell'abitazione
                    principale, la IUC, il tributo che ha accorpato a partire dal gennaio 2024 IMU TASI e TARI.

                </p>
            </div>
            <div className="textarticle_container">
                <h2>Le critiche come i neonati, non stanno in piedi.</h2>
                <p className="description">
                    Prima di addentrarci nelle possibili soluzioni al problema sociale della tassa sul patrimonio immobiliare
                    è bene ricordare che una buona parte dell’elettorato è visceralmente contraria a questa imposizione. La
                    contrarietà si basa su un mal posto "diritto alla casa" e sulla retorica, cavallo di battaglia di diversi
                    partiti politici, dell'abitazione acquistata con redditi che hanno già subito tassazione.
                </p>
                <p className="description">
                    Partiamo da ciò che solitamente si dà per assodato, ovvero: ridurre il carico fiscale complessivo è
                    buona cosa. In realtà, in assenza di parallele riduzioni di spesa, questa riduzione di carico porta
                    solo all’aumento del debito o di altre imposte che possono risultare più economicamente dannose
                    di quella eliminata. Inoltre l’aumento del debito, specialmente in un Paese in cui il rapporto
                    debito/Pil è del 140%, oltre che rendere il Paese facile preda di crisi finanziarie, costituisce
                    a prescindere un aumento di tasse future. Di conseguenza distorce nel tempo la distribuzione del
                    carico fiscale sfavorendo i più giovani, considerato che raramente possiedono casa e cercano di
                    lavorare. In aggiunta il valore degli immobili dipende proprio dalla fertilità, dall’arrivo di
                    immigrazione qualificata e dalla crescita di reddito di coloro che risentono di questa bassa tassazione
                    sugli immobili. Se la generazione lavoratrice non può permettersi le abitazioni, queste per forza di cose
                    scenderanno di valore e saranno comprate a prezzi inferiori. La cultura parassitica della classe politica
                    di assecondare l’ingente elettorato anziano non solo disgrega il patto tra generazioni e impoverisce i
                    giovani, ma anche gli stessi anziani.
                </p>
                <p className="description">
                    Altro cavallo di battaglia è il sentimento che la crescita economica provenga dalla detassazione della casa.
                    Il presupposto fondamentale probabilmente dimenticato dai sostenitori di tale credenza è che a differenza della
                    produzione e acquisto di un nuovo macchinario o della costruzione di nuovi edifici, la transazione su un immobile
                    non è un investimento per l'economia nel suo complesso, ma è solo il passaggio di mano di un bene già esistente.
                    Investire in un’immobile grazie alla detassazione della casa non corrisponde ad una crescita del Pil, ma ad uno
                    spostamento del Pil. Di fatto la crescita economica viene da aumenti di produttività, guadagni di efficienza,
                    innovazioni e miglioramenti nell'allocazione delle risorse. Se la detassazione della casa consistesse 1:1 in
                    diminuzioni di prezzo, cosa che non succede, e se questa portasse ad una crescita del settore edilizio che
                    genera occupazione produttiva e salari decorosi non sarebbe di certo merito della PA. Lo scenario appena
                    descritto può scaturire solamente da una popolazione che cresce e da una crescita al contempo del reddito
                    pro-capite. Queste sono prerogative vincolanti, se non ci sono non c'è crescita. In aggiunta il settore delle
                    costruzioni residenziali è uno dei settori a più basso valore aggiunto. L'intero complesso delle costruzioni
                    vale secondo l'Istat meno di 90 miliardi di PIL.
                </p>
            </div>
            <div className="textarticle_container">
                <h2>Proposte di cambiamento, il riformismo per l’equità sostanziale.</h2>
                <p className="description">
                    Innanzitutto è importante sottolineare che una tassa sul patrimonio immobiliare, come detto, esiste già,
                    l’imposta municipale propria o IMU, la quale consiste in una tassa sulle seconde case ed in casi particolari
                    anche sulle prime case, che come detto in precedenza produce gettito, basso ma pur sempre gettito. L’aliquota
                    base nel 2022 parte dallo 0.86% e, a discrezione comunale, può raggiungere l’1,14% del valore dell’immobile in
                    questione. Il costo medio in città capoluogo ad esempio oscilla tra i valori di 2.064 e 2.040 euro all’anno per
                    Roma e Milano, 580 e 668 per Asti e Gorizia. È inoltre importante sottolineare che nel caso della tassazione
                    sugli immobili la media è lontana dalla mediana, di conseguenza la maggior parte dei cittadini pagherà un’imposta
                    minore di quella sopra citata. Questo è il punto di partenza da cui costruire la discussione sull’aumentare la
                    tassa patrimoniale o sulla sua espansione anche alla prima casa. Ora che siamo a conoscenza della sua esistenza
                    e siamo liberi da congetture e stereotipi inesistenti possiamo costruire un quadro efficiente che tenga in
                    considerazione le vere necessità di un sistema fiscale strutturato. Se si fa un ragionamento basato sulla
                    ridefinizione complessiva del quadro dell'imposizione fiscale si può pensare ad una ad un'imposta patrimoniale
                    non vada ad aggravare il peso fiscale ma vada a sostituire altre tasse o altre imposte, andando così ad
                    alleggerire ad esempio il carico fiscale su chi produce reddito e ricchezza. Perciò, nel particolare, quali
                    sono gli elementi che potrebbero rendere la discussione sull’aumento dell'imposizione sulla prima casa utile
                    e costruttiva e che potrebbero far cambiare la percezione che si ha di questo bene intoccabile?
                </p>
                <div className="lg:px-10 max-container padding-container flex flex-col lg:flex-row gap-10 lg:gap-32 pb-10">
                    <div className="flex-grow-1">
                        <ul className="description">
                            <li><h3>Riduzione del Debito</h3></li>
                            <li className="mb-8">Se l’aumento della tassa sul patrimonio immobiliare è costruito per abbattere il debito
                                pubblico in rapporto debito/PIL, allora ogni euro in più di gettito deve essere volto necessariamente alla
                                riduzione del debito. Se il debito è il problema, allora bisogna affrontare il problema del debito senza sé
                                e senza ma. Si andrebbe a rimpinguare il già presente ma spesso dimenticato il fondo veicolo per abbattere
                                il debito pubblico che già prevede l’abbattimento attraverso l’imposizione fiscale. Sfortunatamente i Governi
                                sono di memoria abbastanza corta e preferiscono, successivamente ad aumenti di imposta, aumentare la spesa
                                secondo l’antico adagio del “più incasso e più spendo”.
                            </li>
                            <li><h3>Vigilanza e trasparenza</h3></li>
                            <li className="mb-8">Ex post, dopo l’entrata in vigore dell’aumento in patrimoniale, i dati sull’imposizione e di
                                conseguenza su base imponibile e gettito devono essere trasparenti, fruibili in maniera chiara e
                                comprensibile per rendere l’analisi dei risultati accessibile. Inoltre è essenziale che gli effetti
                                vengano controllati, calcolati e verificati per comprendere se la manovra abbia o meno raggiunto i
                                risultati sperati. Questa azione di vigilanza è ciò che nella normalità amministrativa non avviene
                                mai, la parte che viene tralasciata e non presa in considerazione anche se consiste nel momento
                                cruciale per una manovra: capire se ha funzionato o meno. Il cambio di marcia sposterebbe il focus
                                del sistema fiscale dall'inefficiente ragionamento sulle contingenze ad un comportamento più
                                virtuoso e socialmente giusto.
                            </li>
                            <li><h3>Certezza ed esigibilità</h3></li>
                            <li className="mb-4">L'imposta deve essere certa, esigibile e non deve cambiare ad ogni legislatura.
                                In Italia quando c'è da affrontare la materia fiscale si procede con i rattoppi, ma questo rallenta il
                                sistema e lo rende sia inefficiente nella gestione che inefficace nella riscossione, nonché macchinoso
                                ed inutilmente complicato. La materia fiscale va mantenuta costante fino a che le evidenze non dicono
                                che ha bisogno di un cambiamento. Uno strumento utile ad assicurare certezza e diminuire le ore passate
                                dal commercialista è sicuramente traducibile in un meccanismo automatico di adeguamento ai prezzi. In
                                qualunque sistema economico il valore dei beni deve essere prezzato al suo valore effettivo e non deve
                                essere fossilizzato in tabelle immutabili che risalgono, nel migliore dei casi, al ventennio precedente
                                come in Italia. Il governo Draghi, nel quadro della Legge delega di riforma dell'Irpef, aveva tentato
                                di introdurre la rivalutazione delle rendite catastali, ma quella riforma è stata affossata per
                                l'opposizione soprattutto della Lega che vi vedeva in prospettiva l'introduzione, o l'appesantimento,
                                delle tasse sulla casa. Un meccanismo automatico che rende le imposizioni di qualunque tipo adeguate
                                al momento storico in cui vengono applicate comporterebbe in aggiunta una maggior trasparenza nei
                                confronti del pubblico su tasse e costi effettivi degli immobili.

                            </li>
                        </ul>
                    </div>
                    <div className="flex-grow-1">
                        <ul className="description">
                            <li><h3>Individuare la Base Imponibile</h3></li>
                            <li className="mb-8"> Ex ante, prima dell’effettivo aumento dell’imposta, è imperativa l’individuazione,
                                con grande attenzione, della base imponibile.  È ormai prassi, quando si parla di tassazione,
                                soffermarsi sull’aliquota e tralasciare la base imponibile. Le imposte sugli extra-profitti ne
                                sono un esempio lampante: aliquota identificata alla perfezione, ma disguidi tecnici nel definire
                                cosa sia un extra-profitto e cosa invece sia solo un profitto. Risulta impensabile costruire un
                                sistema fiscale sull’ambiguità, perché questo genera malumore generale, scappatoie normative ed
                                in ultimo elusione o evasione. Senza una chiara identificazione della base imponibile la manovra
                                sarebbe inefficace ed inapplicabile o laddove applicabile spesso ingiusta. Altro impegno da
                                completare prima dell’inizio dei lavori si basa sulla modellazione: gli effetti delle imposizioni
                                fiscali che gravano sulle persone, lavoratori o proprietari di immobili devono essere previsti per
                                poi, sulla base delle previsioni, verificarne i risultati in corso d’opera.

                            </li>
                            <li><h3>Riformare il quadro Fiscale</h3></li>
                            <li className="mb-4"> Risulta infine impensabile prescindere da una riforma complessiva e organica di tutto
                                il sistema in quanto cambiare un’imposta ha effetti su tutte le altre, di conseguenza la gestione deve essere
                                il più possibile congiunta e trasversale. Per questo l'eventuale aumento di patrimoniale deve essere compensato
                                da una riduzione di tutte le tasse che frenano la crescita e lo sviluppo, in particolar modo le imposte sul
                                reddito che distorcono le scelte di allocazione del tempo per i lavoratori. Spostare il carico fiscale verso
                                la parte di ricchezza più difficile da occultare, quindi dal reddito al patrimonio, inoltre semplifica in
                                maniera massiccia la vigilanza sulle riscossioni. Di fatto, in un quadro economico dove l’evasione
                                fiscale sui redditi da lavoro è alta, il 69,7 per cento dell’IRPEF da lavoro autonomo e d’impresa
                                nel 2020 non arriva a destinazione, e la pressione fiscale reale in capo ai contribuenti fedeli al
                                fisco si avvicina ormai al 50 per cento, questa manovra potrebbe portare ventata di aria fresca.
                                In queste condizioni economiche e sociali e alle sopracitate condizioni di riforma non è scandaloso
                                parlare di imposta patrimoniale.


                            </li>
                        </ul>
                    </div>
                </div>
                <ArticleText title="In conclusione" description="Una più ingente tassazione sugli immobili darebbe la possibilità di 
                    respirare ai lavoratori nella forma di una diminuzione del carico contributivo e fiscale. Un’imposta sul patrimonio 
                    ridistribuisce in maniera più equa la ricchezza tra generazioni: aumenta il contributo della popolazione più anziana 
                    e lo sposta alla fetta giovane. Inoltre distorce meno rispetto alle imposte sul reddito, è meno facile da evadere, 
                    sovrintende direttamente tutti quei costi sociali relativi alla gestione degli immobili, redistribuisce il potere 
                    d’acquisto e responsabilizza le autorità locali. In assenza di questa redistribuzione un sistema predatorio nei 
                    confronti del lavoratore non solo reprime la crescita ma squilibra e mina il patto intergenerazionale.
"/>
            </div>
            <div className="outer_container">
                <h3>Fonti:</h3>
                <ul className="description">
                    <li className="mb-4">
                        <Link href='https://www.youtube.com/watch?v=vAjHuSC2FwQ&t=3146s'>
                            <b>Tassare le prime case?</b> LiberiOLtre le Illusioni, Riccardo Puglisi e Michele Boldrin.</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://www.youtube.com/watch?v=CHK2r_Gx_pc&t=377s'>
                            <b>A chi serve la Patrimoniale:</b> LiberiOLtre le Illusioni, Costantino de Blasi.</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://www.finanze.gov.it/it/fiscalita-regionale-e-locale/Imposta-municipale-propria-IMU/disciplina-del-tributo/aliquote/'>
                            <b>Dipartimento delle Finanze:</b> aliquote sulla tassazione degli immobili.</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://openbdap.rgs.mef.gov.it/it/BdS/Scopri'>
                            <b>Banca dati delle amministrazioni pubbliche:</b> dati sulle entrate e uscite fiscali.</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://www.noisefromamerika.org/articolo/mio-nonno-fava-mattoni'>
                            <b>Mio nonno fava i mattoni:</b> Noise From Amerika.</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://www.ilfattoquotidiano.it/2024/01/14/elsa-fornero-osa-pronunciare-la-parola-patrimoniale-per-ridurre-le-tasse-sul-lavoro-insorgono-centrodestra-e-costruttori/7409977/'>
                            <b>FQ:</b>Elsa Fornero osa pronunciare la parola “patrimoniale”.</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://www.finanze.gov.it/export/sites/finanze/.galleries/Documenti/Varie/Relazione-evasione-fiscale-e-contributiva-2023_26set-finale.pdf'>
                            <b>Economia non osservata:</b> Relazione Ministero delle Finanze.</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://www.cgiamestre.com/wp-content/uploads/2022/11/Pressione-fiscale-record-12.11.2022.pdf'>
                            <b>Total tax rate:</b> CGA di Mestre.</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://www.uil.it/NewsSX.asp?ID_News=2407&Provenienza=3#:~:text=miliardi%20di%20euro.-,Il%20gettito%20complessivo%20annuo%20sar%C3%A0%20di%2019%2C4%20miliardi%20di,sono%20lavoratori%20dipendenti%20e%20pensionati).'>
                            <b>Rapporto IMU:</b> rapporto UIL.</Link>
                    </li>
                    <li className="mb-4">
                        <Link href='https://www.uil.it/documents/IMU%20SALDO%20DICEMBRE%202022.pdf'>
                            <b>Valori IMU:</b> Tabelle comunali.</Link>
                    </li>
                </ul>
            </div>

        </m.div>
    )
}

export default page
