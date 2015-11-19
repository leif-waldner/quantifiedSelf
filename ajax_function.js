$(document).ready(function (exhibit_name, user_id, debug=true, port=null) {
    $.ajax({
            if (debug) {
                'url' : '//iamadatapoint.com:' + port + '/api/' + exhibit_name,
            }
            else { 
                'url': '//iamadatapoint.com/api/' + exhibit_name,
            }
            'type':'GET',
            'data': {'q': user_id=user_id},
            'success': function(user_json_blob) {
                return user_json_blob;
            }
            'error': function(error) {
                return "Sorry we could not process the request. It returned with:" + error
            }
    }
});


