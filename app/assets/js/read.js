const TABLE = '<table></table>';
const THEAD = '<thead></thead>';
const TBODY = '<tbody></tbody>';
const TR = '<tr></tr>';
const TH = '<th></th>';
const TD = '<td></td>';

function createRow(key,value)
{
    return $( TR ).append(
        $( TD ).attr( "scope", "row" ).html( " " + value.Id + " " ), // Пробелы для обхода специфики работы селектора jquery:contains например когда нам нужен ид = 1 он выберет и 11 и 12 итд
        $( TD ).html( value.FName ),
        $( TD ).html( value.LName ),
        $( TD ).html( value.MName ),
        $( TD ).html( dateFormat( new Date( value.BirthDay ), "mediumDate" ) ),
        $( TD ).html( value.Sex ),
        $( TD ).html( value.Email )
    ).click( ( e ) => fillForm( value ) );
}

function createTable(data)
{
    let tr = $( TR ).append(
        $( TH ).attr( "scope", "col" ).html( "Id" ),
        $( TH ).attr( "scope", "col" ).html( "First Name" ),
        $( TH ).attr( "scope", "col" ).html( "Last Name" ),
        $( TH ).attr( "scope", "col" ).html( "Middle Name" ),
        $( TH ).attr( "scope", "col" ).html( "Birth Date" ),
        $( TH ).attr( "scope", "col" ).html( "Sex" ),
        $( TH ).attr( "scope", "col" ).html( "Email" ),
    );
    let thead = $( THEAD ).append(tr);
    let tbody = $( TBODY );
    $.each(data, ( key, value ) => {
        tbody.append( createRow( key, value ) );
    });
    
    return $( TABLE )
        .append( thead, tbody )
        .addClass( "table table-hover" );
}
function fillForm( value )
{
    $("#content").hide();
    $("#detailed-view").attr('data-id', value.Id);
    $("#FName").val(value.FName);
    $("#LName").val(value.LName);
    $("#MName").val(value.MName);
    $("#date").val( dateFormat( new Date( value.BirthDay ), "mm/dd/yyyy" ) );
    $("#EMail").val( value.Email);
    if(value.Sex !== null)
        $("#"+value.Sex).prop( "checked", true );
    else
    {
        $("#male").prop( "checked", false );
        $("#female").prop( "checked", false );
    }
    $( '#delete' ).show();
    $( '#save' ).off('click').on('click', updateRecord);
    $("#detailed-view").show();
    $( '.detailed-view-result' ).hide();

    changeDescrition("Person info","");
}

function getAllRecords()
{
    $.ajax({
        url:	window.location.origin + '/api/entity/read.php',
        type:	'GET',
        success: function(response){
            $( "#content" ).html( createTable( response.message ) );
        },
        error:	function(){
            alert('Error');
        }
    });
}
function getSingleRecord(id, callback)
{
    $.ajax({
        url:	window.location.origin + '/api/entity/read.php?Id=' + id,
        type:	'GET',
        success: function(response){
            callback(response.message[0]);
        },
        error:	function(){
            alert('Error');
        }
    });
}
