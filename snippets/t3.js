if (Meteor.isClient) {

    Template.hello.events({
        'click button[type=submit]' : function(event) {
            event.preventDefault();
            var $self = jQuery(event.target),
                titulo = $self.parent().find('input[name=titulo]').val(),
                descricao = $self.parent().find('textarea[name=descricao]').val();
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        
    });
}