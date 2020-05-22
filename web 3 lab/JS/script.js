function gObj(obj, index) {
    let ret =  `<tr>
                    <td style="text-align: left;">${index + 1}. ${obj}</td>
                </tr>`;
    return ret;
}

function literature(obj, index) {
    let lit =  `<tr>
                    <td style="text-align: left;">${index + 1}. ${obj[0]} "<i>${obj[1]}</i>" (${obj[2]}г.)</td>
                </tr>`;
    return lit;
}

function makeTableFromCountry(obj) {
    let tab = `<table>
                <caption>
                    <h1>${obj[0]} - ${obj[1]}</h1>
                </caption>`;
    tab += `<tr>
                <td> ${about[2]} </td>
                <td> ${obj[2]} </td>
            </tr>`; //Континет  
    tab += `<tr>
                <td> ${about[3]} </td>
                <td> ${obj[3]} </td>
            </tr>`; //ЧС
    tab += `<tr>
                <td> ${about[4]} </td>
                <td> ${obj[4]} </td>
            </tr>`; //Время
    tab += `<tr>                            
                <td> ${about[5]} </td>
                <td> ${obj[5]} </td>
            </tr>`; //Валюта 
    //Гео. объекты
    let geo = obj[6].map(gObj);
    tab += `<tr>
                <td style="border-right: 2px solid black;" rowspan="${obj[6].length + 1}"> ${about[6]} </td>
            </tr>`;
    geo.map(function (item) {
        tab += item;
    });
    //Лит. произведения
    let lit = obj[7].map(literature);
    tab += `<tr>
                <td style="border-right: 2px solid black;" rowspan="${obj[7].length + 1}"> ${about[7]} </td>
            </tr>`;
    lit.map(function (item) {
        tab += item;
    });
    //События
    let len = 0;                //кол-во событий
    for (let key in obj[8]) {
        len++;
    }
    tab += `<tr>
                <td style="border-right: 2px solid black;" rowspan="${len + 1}"> ${about[8]} </td>
            </tr>`;
    for (let item in obj[8]) {
        tab += `<tr>
                    <td style="text-align: left;">${item} - ${obj[8][item]}</td>
                </tr>`;
    }

    tab += "</table>";
    return tab;
}

countries.forEach(function (obj) {
    document.body.innerHTML += makeTableFromCountry(obj);
});