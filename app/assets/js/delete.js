function deleteRecord(e)
{
    e.preventDefault();
    $( '.modal-title' ).html("Delete Record");
    $( '#modal-text' ).html("Are you sure ?");
    $( '#modal-ok' ).html("Delete")
        .off('click').on('click', _delete);
    $( '#confirmation' ).modal();
}

function _delete()
{
    let id =  getFormId();
    $.ajax({
        url:	    window.location.origin + '/api/entity/delete.php',
        type:	    'POST',
        data:       {Id:id},
        success:    function(response){
            $(`td:contains(${id})`).parent().remove();
        },
        error:	    function(){
            alert('Error');
        }      
    });
    $( '#home' ).click();
}