/*
Sia dato il seguente CSV:
nome, cognome, italiano, storia, matematica, informatica, inglese, tpsi, gpoi
Mario, Rossi, 6, 7, 6, 6, 5, 6, 6
Sandra, Verdi, 5, 5, 7, 7, 10, 8, 7

Scrivere una funzione che riceve in ingresso la stringa contenente il CSV e genera un CSV risultato con questa struttura:
nome, cognome, media, status, Insufficienti

Dove:
media: indica la media dei voti
status: indicare se "promosso" (media >= 6) o "bocciato" (media <6)
insufficienti: numero di materie insufficienti

Ad esempio:
nome, cognome, media, status, Insufficienti
Mario, Rossi, 6.0, promosso, 1
Sandra Verdi, 7.0, promosso, 2
*/

const csv = `nome, cognome, italiano, storia, matematica, informatica, inglese, tpsi, gpoi
Mario, Rossi, 6, 7, 6, 6, 5, 6, 6
Sandra, Verdi, 5, 5, 7, 7, 10, 8, 7`

const createTable = (parentElement) => {
    let data = [];
    let header = [];
    return {
        load: (csv) => {
            const rows = csv.split("\n");
            header = rows[0].replaceAll(/\s/g,"").split(",");
            rows.shift();
            rows.forEach((row) => data.push(row.replaceAll(/\s/g,"").split(",")));
        },
        render: () => {
            let html = `<table class="table table-striped">`;
            html += header.map((col)=> `<th>` + col + "</th>").join("");
            html += data.map((row)=> `<tr>` 
            + row.map((col)=> "<td>" + col + "</td>").join("")
            + "</tr>").join("");
            html += "</table>";
            parentElement.innerHTML = html;
        }
    }
}

const table = createTable(document.getElementById("app"));
table.load(csv);
table.render();