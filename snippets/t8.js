if (Meteor.isClient) {
    Template.hello.propostas = function() {
        return Propostas.find();
    }

    Template.hello.events({
        'click button[type=submit]' : function (event) {
            event.preventDefault();
            var $self = jQuery(event.target),
                titulo = $self.parent().find('input[name=titulo]').val(),
                descricao = $self.parent().find('textarea[name=descricao]').val();
            Meteor.call('salvar_proposta', titulo, descricao, function(error, result){
                if (!error)               
                    alert('Enviado com sucesso');
            });
        },
        'click .like, click .dislike' : function (event) {
            var $self = jQuery(event.target),
                voto = $self.attr('class').split(' ')[2];
            Meteor.call('votar', $self.parent().attr('id'), voto, function (error, result) {
            });
        }
    });
}