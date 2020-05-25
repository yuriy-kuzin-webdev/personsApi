function updateRecord(e)
{
    e.preventDefault();
    $( '.modal-title' ).html("Update Record");
    $( '#modal-text' ).html("Are you sure ?");
    $( '#modal-ok' ).html("Update")
        .off('click').on('click', update);
    $( '#confirmation' ).modal();
}

function update()
{
    let id = getFormId();
    let entity = getEntity();
    $.ajax({
        url:	    window.location.origin + '/api/entity/update.php?Id=' + id,
        type:	    'POST',
        data:       entity,
        success:    function(response){
            entity.Id = id;
            $(`td[scope=row]:contains( ${id} )`)
                .parent().replaceWith( createRow(null,entity) )
        },
        error:	    function(){
            alert('Error');
        }      
    });
    $( '#home' ).click();
}