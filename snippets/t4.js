Propostas = new Meteor.Collection('propostas');

if (Meteor.isClient) {
    Template.hello.propostas = function() {
        return Propostas.find();
    }

    Template.hello.events({
        'click button[type=submit]' : function(event) {
            event.preventDefault();
            var $self = jQuery(event.target),
                titulo = $self.parent().find('input[name=titulo]').val(),
                descricao = $self.parent().find('textarea[name=descricao]').val();
            Meteor.call('salvar_proposta', titulo, descricao, function(error, result){
                if (!error)               
                    alert('Enviado com sucesso');
            });
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        
    });
    
    Meteor.methods({
        salvar_proposta: function (titulo, descricao) {
            return Propostas.insert({
                titulo: titulo,
                descricao: descricao
            });
        }
    });
}

