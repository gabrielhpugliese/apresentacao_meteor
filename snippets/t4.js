Propostas = new Meteor.Collection('propostas');

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

