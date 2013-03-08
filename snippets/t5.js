if (Meteor.isServer) {
    Meteor.startup(function() {
        
    });
    
    // 148482331982978 - 65d6c4283930523025699338dedb78b4
    Meteor.methods({
        salvar_proposta: function (titulo, descricao) {
            if (!Meteor.user())
                return;
            
            return Propostas.insert({
                titulo: titulo,
                descricao: descricao,
                criador: Meteor.user()
            });
        }
    });
}
