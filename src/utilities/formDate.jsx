export const FormatDate = (date) =>{
    const _date = new Date();

    if(isNaN(_date)){
        console.log("Invalid date");
        return 'Invalid Date'
    }


    const formattedDate = new Intl.DateTimeFormat('en-US',{
        year:'numeric',
        month:'long',
        day:'numeric',
    }).format(_date);

    return formattedDate;
}