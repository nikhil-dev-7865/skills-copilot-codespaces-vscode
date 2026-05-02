function skillsMember() {
    return{
        restricted: 'E',
        template: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true
        scope: {
            member: '='
        }
    };
    }