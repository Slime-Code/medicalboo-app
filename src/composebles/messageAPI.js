export function message(message) {

    switch (message) {
        case 'User already registered':
            return 'Usuário já cadastrado!'
        case 'Invalid login credentials':
            return 'Usuário ou senha errado!'
        default:
            return 'Erro ao se conetar com o servidor, verifique a sua conexão com a internet!';
    }

}