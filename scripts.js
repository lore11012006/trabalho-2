document.addEventListener('DOMContentLoaded', () => {
    const ambientes = {
        'sala-aula-4': 'livre',
        'laboratorio-informatica-1': 'ocupado',
        'sala-de-professores': 'manutencao',
    };

    for (const [id, status] of Object.entries(ambientes)) {
        const element = document.getElementById(id);
        if (element) {
            const statusElement = element.querySelector('.status');
            if (statusElement) {
                statusElement.setAttribute('data-status', status);
            }
        }
    }
});