function searchForm(e)
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
    
    $( '#save' ).off('click').on('click', searchRecord );
    $("#detailed-view").show();
    $( '.detailed-view-result' ).hide();

    changeDescrition("Search Form","Enter the value for desired fields");
}

function searchRecord(e)
{
    e.preventDefault();
    let entity = {};
    if ( $("#FName").val() != "" ) 
        entity.FName = $("#FName").val();
    if ( $("#LName").val() != "" ) 
        entity.LName = $("#LName").val();
    if ( $("#MName").val() != "" ) 
        entity.MName = $("#MName").val();
    if ( $("#date").val() != "" )
        entity.BirthDay = dateFormat( new Date( $( "#date" ).val()), "yyyy-mm-dd 00:00:00");
    if ( $( "input[type=radio]:checked").val() != undefined )
        entity.Sex = $( "input[type=radio]:checked").val();
    if ( $("#EMail").val() != "" )
        entity.Email = $("#EMail").val();

    $.ajax({
        url:	    window.location.origin + '/api/entity/search.php',
        type:	    'GET',
        data:       entity,
        success:    function(response){
            changeDescrition("Search result","click on row to manage");
            $( '.detailed-view-result' ).html( createTable(response.message ) ).show();
        },
        error:	    function(){
            alert('Error');
        }      
    });
    $( '#detailed-view' ).hide();
}

function navSearch(e)
{
    e.preventDefault();
    if ($( "input[type=search]").val().length > 0)
    {
        let keyword = $( "input[type=search]").val();
        $.ajax({
            url:	    window.location.origin + '/api/entity/search.php',
            type:	    'GET',
            data:       {FName:keyword,LName:keyword,MName:keyword,Email:keyword,Sex:keyword,BirthDay:keyword},
            success:    function(response){
                $( '#detailed-view' ).hide();
                $("#content").hide();
                changeDescrition("Search result","click on row to manage");
                $( '.detailed-view-result' ).html( createTable(response.message ) ).show();
            },
            error:	    function(){
                alert('Error');
            }      
        }); 
    }
}