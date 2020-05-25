function loadEmptyForm(e)
{
    e.preventDefault();

    $("#content").hide();
    $("#FName").val("");
    $("#LName").val("");
    $("#MName").val("");
    $("#date").val("");
    $("#EMail").val("");
    $("#male").prop( "checked", false );
    $("#female").prop( "checked", false );
    $("#delete").hide();
    
    $( '#save' ).off('click').on('click', createRecord );
    $("#detailed-view").show();
    $( '.detailed-view-result' ).hide();

    changeDescrition("Create new record","");
}

function createRecord(e)
{
    e.preventDefault();
    $( '.modal-title' ).html("Create Record");
    $( '#modal-text' ).html("Are you sure ?");
    $( '#modal-ok' ).html("Create")
        .off('click').on('click', create);
    $( '#confirmation' ).modal();
}

function create()
{
    let entity = getEntity();
    $.ajax({
        url:	    window.location.origin + '/api/entity/create.php',
        type:	    'POST',
        data:       entity,
        success:    function(response){
            $( 'tbody' ).append(createRow(null,response.message));
        },
        error:	    function(){
            alert('Error');
        }      
    });
    $( '#home' ).click();
}