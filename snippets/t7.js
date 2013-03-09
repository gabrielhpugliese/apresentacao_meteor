if (Meteor.isServer) {
    Meteor.startup(function() {
        
    });
    
    Meteor.methods({
        salvar_proposta: function (titulo, descricao) {
            if (!Meteor.user())
                return;
            
            return Propostas.insert({
                titulo: titulo,
                descricao: descricao,
                criador: Meteor.user(),
                like: 0,
                dislike: 0
            });
        },
        votar : function (proposta_id, voto) {
            // if (!Meteor.user())
                // return;
                
            var inc = {};
            inc[voto.toString()] = 1;
                
            return Propostas.update({
                _id : proposta_id
            }, {
                $inc : inc
            });
        }
    });
}