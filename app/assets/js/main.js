$(function(){
    getAllRecords();
    changeDescrition("Persons list","click on row to manage");
    $( '#home' ).click((e) => {
        e.preventDefault();
        $( '#content' ).show();
        $( '#detailed-view').hide();
        $( '.detailed-view-result' ).hide();
        changeDescrition("Persons list","click on row to manage");
    });

    $( '#undo' ).click((e) => {
        e.preventDefault();
        $( '#content' ).show();
        $( '#detailed-view').hide();
        $( '.detailed-view-result' ).hide();
        changeDescrition("Persons list","click on row to manage");
    })

    $( '#add-new' ).click( loadEmptyForm );
    $( '#search' ).click ( searchForm );
    $( '#nav-search-btn').click( navSearch );
    $( '#delete' ).click( deleteRecord );
});


function getEntity()
{
    return {
        FName       :   $( "#FName" ).val(),
        LName       :   $( "#LName" ).val(),
        MName       :   $( "#MName" ).val(),
        BirthDay    :   dateFormat( new Date( $( "#date" ).val()), "yyyy-mm-dd 00:00:00"),
        Sex         :   $( "input[type=radio]:checked").val(),
        Email       :   $( "#EMail" ).val(),
    }
}

function getFormId()
{
    return $("#detailed-view").attr('data-id');
}

function changeDescrition(text,help = "")
{
    document.title = text;
    $('#jumbo-text').html(text);
    $('#jumbo-help').html(help);
}