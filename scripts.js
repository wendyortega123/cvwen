document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos de las ventanas modales
    const modals = {
        skills: document.getElementById('modal-skills'),
        softSkills: document.getElementById('modal-soft-skills'),
        projects: document.getElementById('modal-projects')
    };

    // Obtener los botones que abren las ventanas modales
    const btns = {
        skills: document.querySelector('a[href="#skills"]'),
        softSkills: document.querySelector('a[href="#soft-skills"]'),
        projects: document.querySelector('a[href="#projects"]')
    };

    // Obtener los elementos de cierre de las ventanas modales
    const spans = {
        skills: document.getElementById('close-skills'),
        softSkills: document.getElementById('close-soft-skills'),
        projects: document.getElementById('close-projects')
    };

    // Función para abrir una ventana modal
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // Función para cerrar una ventana modal
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Configurar eventos para abrir las ventanas modales
    btns.skills.addEventListener('click', function() {
        openModal(modals.skills);
    });

    btns.softSkills.addEventListener('click', function() {
        openModal(modals.softSkills);
    });

    btns.projects.addEventListener('click', function() {
        openModal(modals.projects);
    });

    // Configurar eventos para cerrar las ventanas modales
    spans.skills.addEventListener('click', function() {
        closeModal(modals.skills);
    });

    spans.softSkills.addEventListener('click', function() {
        closeModal(modals.softSkills);
    });

    spans.projects.addEventListener('click', function() {
        closeModal(modals.projects);
    });

    // Cerrar la ventana modal si se hace clic fuera de ella
    window.addEventListener('click', function(event) {
        if (event.target === modals.skills) {
            closeModal(modals.skills);
        }
        if (event.target === modals.softSkills) {
            closeModal(modals.softSkills);
        }
        if (event.target === modals.projects) {
            closeModal(modals.projects);
        }
    });
});
