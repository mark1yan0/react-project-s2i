<h1>Start2Impact progetto React</h1>

<h5>Table of Contents</h5>
<ol>
    <li><a href="#about">Riguardo il progetto</a>
        <ul>
            <li><a href="#built">Costruito con</a></li>
        </ul>
    </li>
    <li><a href="#usage">Utilizzo</a></li>
    <li><a href="#contact">Contatti</a></li>
    <li><a href="#considerations">Considerazioni finali</a></li>
</ol>

<h3 id="about">Riguardo il progetto</h3>
<p>Il progetto consiste in una semplice App che sfrutta la Google Book API per permettere la ricerca e la visualizzazione dei libri disponibile nell'api e la conseguente aggiunta di questi ai preferiti.</p>

<h4 id="built">Costruito con</h4>
<p>Ovviamente l'app è stata costruita con React e le seguenti principali tecnologie:</p>

<ul>
    <li><a href="#">React Router e React Router Hash Link</a> per il routing</li>
    <li><a href="#">React Icons</a> per le icone</li>
    <li><a href="#">Axios</a> per la get request di google books api</li>
    <li><a href="#">Context Api</a> per creare uno store globale dei libri ma soprattutto per gestire la libreria dei preferiti e libri letti</li>
    <li><a href="#">Firebase</a> per l'hosting dell'app</li>
</ul>

<h3 id="usage">Utilizzo e features</h3>
<p>L'utilizzo dell'app è abbastanza semplice: appena compare a schermo, nel header è presente un libro scelto randomicamente, e grazie ai due bottoni è possibile visualizzare il libro o farne comparire un altro.</p>

<p>Subito sotto è presente una fila di libri, scrollabile orizzontalmente (tenere premuto shift + rotellina). Inizialmente volevo presentare diverse file con diversi tipi di libri ma purtroppo non mi sono per niente trovato bene col l'API di google e non sono riuscito ad implementare completamente tutte le feature che volevo.</p>

<p>Utilizzando l'icona di ricerca nella navigazione si viene portati alla pagina di ricerca, tramite la quale è possibile cercare i libri desiderati. Sempre per vari problemi con l'API, che presentava diersi oggetti undefined, ho dovuto limitare la ricerca al submit e non onChange, come avrei voluto fare inizialmente.</p>

<p>Ciascun libro, sia nella home, che nella ricerca, porta ad una pagina singola con maggiori informazioni riguardo al libro.</p>

<p>Per ciascun libro è possibile aggiungerlo ai preferiti tramite l'apposito tasto. Grazie ad uno store globale, creato utilizzando la Context API, il libro viene aggiunto ai preefriti e rimane tale per tutta l'app. In fondo alla home è presente la riga dei preferiti, nei quali è possibile visualizzare la propria collezione. Una volta aggiunto il libro ai preferiti, nella riga dei preferiti, compare un'icona per poter segnare il libro come letto o meno.</p>

<p>Infine i dati riguardo ai libri preferiti, e se sono stati letti o meno, vengono salvati nel local storage.</p>

<h3 id="contact">Contact</h3>
<p>Markiyan Kmit - https://www.instagram.com/markkmit/ - markkmit@gmail.com</p>

<p>Project Link: https://github.com/your_username/repo_name</p>

<h3 id="considerations">Considerazioni finali</h3>
<p>Personalmente non mi sono trovato per nulla a mio agio con l'api di google. Il metodo di ricerca mi sembra abbstanza gestito male, soprattutto quando come risultato arrivano anche libri che non c'entrano nulla con ciò che si cerca e che presentano delle lacune nei dati, come per esempio un immagine mancante, rompendo così l'intera app. Ho cercato di implementare qualche tipo di controllo ma anche se mi sempra logicamente corretto, comunque si presentano situazione di disagio.</p>
