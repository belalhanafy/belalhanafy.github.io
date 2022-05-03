const queryString = window.location.search;

if (queryString != '') {
    const urlParams = new URLSearchParams(queryString);
    
    let dateFrom,
        dateTo,
        adultNumbers,
        childrensNumber;
    
    dateFrom = urlParams.get('dateFrom');
    dateTo = urlParams.get('dateTo');
    adultNumbers = urlParams.get('adultNumbers');
    childrensNumber = urlParams.get('childrensNumber');
    
    document.cookie = "dateFrom=" + dateFrom;
    document.cookie = "dateTo=" + dateTo;
    document.cookie = "adultNumbers=" + adultNumbers;
    document.cookie = "childrensNumber=" + childrensNumber;
}