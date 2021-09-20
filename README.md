<h1>Start2Impact progetto React</h1>

<h2>Table of Contents</h2>
<ol>
    <li><a href="#about">Riguardo il progetto</a></li>
    <li><a href="#built">Costruito con</a></li>
    <li><a href="#usage">Utilizzo</a></li>
    <li><a href="#contact">Contatti</a></li>
</ol>

<h2 id="about">Riguardo il progetto</h2>
<p>Il progetto consiste in una App che sfrutta la Google Book API per permettere la ricerca e la visualizzazione dei libri disponibile nell'api e la conseguente aggiunta di questi ai preferiti.</p>

<p>L'utilizzo dell'app è abbastanza semplice: appena compare a schermo, nel header è presente un libro scelto randomicamente, e grazie ai due bottoni è possibile visualizzare il libro o farne comparire un altro.</p>

<p>Subito sotto è presente una fila di libri, scrollabile orizzontalmente (tenere premuto shift + rotellina). Inizialmente volevo presentare diverse file con diversi tipi di libri ma purtroppo non mi sono per niente trovato bene col l'API di google e non sono riuscito ad implementare completamente tutte le feature che volevo.</p>

<p>Utilizzando l'icona di ricerca nella navigazione si viene portati alla pagina di ricerca, tramite la quale è possibile cercare i libri desiderati. Sempre per vari problemi con l'API, che presentava diersi oggetti undefined, ho dovuto limitare la ricerca al submit e non onChange, come avrei voluto fare inizialmente.</p>

<p>Ciascun libro, sia nella home, che nella ricerca, porta ad una pagina singola con maggiori informazioni riguardo al libro.</p>

<p>Per ciascun libro è possibile aggiungerlo ai preferiti tramite l'apposito tasto. Grazie ad uno store globale, creato utilizzando la Context API, il libro viene aggiunto ai preefriti e rimane tale per tutta l'app. In fondo alla home è presente la riga dei preferiti, nei quali è possibile visualizzare la propria collezione. Una volta aggiunto il libro ai preferiti, nella riga dei preferiti, compare un'icona per poter segnare il libro come letto o meno.</p>

<p>Infine i dati riguardo ai libri preferiti, e se sono stati letti o meno, vengono salvati nel local storage.</p>

<h2 id="built">Costruito con</h2>
<p>Ovviamente l'app è stata costruita con React e le seguenti principali tecnologie:</p>

<ul>
    <li><a href="#router">React Router e React Router Hash Link</a> per il routing</li>
    <li><a href="#icons">React Icons</a> per le icone</li>
    <li><a href="#axios">Axios</a> per la get request di google books api</li>
    <li><a href="#context">Context Api</a> per creare uno store globale dei libri ma soprattutto per gestire la libreria dei preferiti e libri letti</li>
    <li><a href="#firebase">Firebase</a> per l'hosting dell'app</li>
</ul>

<h3 id='router'>React Router</h3>
<p>Ho utilizzato React Router per creare delle route basilari: una single page e una pagina di ricerca.</p>
<p>Per quanto riguarda la voce preferiti nella navigazione, ho dovuto utilizzare reacr router hash link, per essere in grado di linkare a singole sezioni dell'app e non a specifici componenti.</p>

<h3 id='icons'>React Icons</h3>
<p>Al posto di usare la classica libreria di font awsome, ho installato come dipendenza react icons, che presenta una vasta selezione di icone.</p>

<h3 id='axios'>Axios</h3>
<p>Axios semplifica le chiamate delle api e si è rivelato molto comodo da usare</p>

<h3 id='context'>Context API</h3>
<p>Ho preferito usare la context Api, a discapito di redux, perchè ritengo per questa sia più comoda da usare per gestire state meno complessi, come in questo caso.</p>

<p>In ogni caso ho usato context solamente per la selezione iniziale di libri e per gestire tutti i cambiamenti di state dei preferiti. La dove lo state si limitava ad essere presente in un unica componente, non ho creato un contesto apposta poichè mi sembrava troppo prolisso. Preferisco tenere lo state semplice nei punti in cui viene effettivamente usato.</p>

<h3 id='firebase'>Firebase</h3>
<p>Infine ho usato firebase come hosting del'App</p>

<h2 id="contact">Contact</h2>
<p>Markiyan Kmit - https://www.instagram.com/markkmit/ - markkmit@gmail.com</p>

<p>Project Link: https://react-books-321518.web.app/</p>
