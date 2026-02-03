// Datos de los resúmenes (puedes cargarlos desde JSON en el futuro)
const resumenes = [
    {
        id: 1,
        titulo: "Álgebra Lineal Básica",
        descripcion: "Vectores, matrices y sistemas de ecuaciones lineales explicados de forma clara y concisa con ejemplos prácticos.",
        categoria: "matematicas",
        imagen: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        fecha: "15 Mar 2023",
        paginas: 12,
        contenido: "<h3>Conceptos Fundamentales</h3><p>El álgebra lineal estudia vectores, matrices y transformaciones lineales.</p><h3>Vectores</h3><p>Un vector es un objeto que tiene magnitud y dirección.</p><h3>Matrices</h3><p>Una matriz es un arreglo rectangular de números organizados en filas y columnas.</p>"
    },
    {
        id: 2,
        titulo: "Biología Celular",
        descripcion: "Estructura y función de las células eucariotas y procariotas. Incluye organelos celulares y procesos vitales.",
        categoria: "ciencias",
        imagen: "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        fecha: "22 Feb 2023",
        paginas: 18,
        contenido: "<h3>Células Eucariotas</h3><p>Contienen núcleo y organelos membranosos.</p><h3>Células Procariotas</h3><p>No tienen núcleo definido ni organelos membranosos.</p>"
    },
    {
        id: 3,
        titulo: "Revolución Industrial",
        descripcion: "Análisis de los cambios económicos, sociales y tecnológicos durante la Revolución Industrial en Europa.",
        categoria: "historia",
        imagen: "https://images.unsplash.com/photo-1585208798170-6b46a61aa96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        fecha: "10 Ene 2023",
        paginas: 15,
        contenido: "<h3>Causas</h3><p>Avances tecnológicos, crecimiento poblacional y capital disponible.</p><h3>Consecuencias</h3><p>Urbanización, nuevas clases sociales y cambios en producción.</p>"
    },
    {
        id: 4,
        titulo: "Cálculo Diferencial",
        descripcion: "Límites, derivadas y aplicaciones del cálculo diferencial con problemas resueltos paso a paso.",
        categoria: "matematicas",
        imagen: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        fecha: "05 Abr 2023",
        paginas: 20,
        contenido: "<h3>Límites</h3><p>Concepto fundamental para entender derivadas e integrales.</p><h3>Derivadas</h3><p>Miden la tasa de cambio instantánea de una función.</p>"
    },
    {
        id: 5,
        titulo: "Literatura del Siglo de Oro",
        descripcion: "Análisis de las obras principales y autores más representativos de la literatura española del Siglo de Oro.",
        categoria: "literatura",
        imagen: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        fecha: "30 Mar 2023",
        paginas: 14,
        contenido: "<h3>Autores Principales</h3><p>Cervantes, Lope de Vega, Calderón de la Barca.</p><h3>Géneros</h3><p>Novela picaresca, teatro barroco, poesía mística.</p>"
    },
    {
        id: 6,
        titulo: "Gramática Inglesa Avanzada",
        descripcion: "Estructuras gramaticales complejas, tiempos verbales avanzados y uso de modales en inglés.",
        categoria: "idiomas",
        imagen: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        fecha: "18 Feb 2023",
        paginas: 16,
        contenido: "<h3>Tiempos Verbales</h3><p>Present perfect, past perfect, future perfect.</p><h3>Condicionales</h3><p>First, second y third conditional con ejemplos.</p>"
    },
    {
        id: 7,
        titulo: "Física: Leyes de Newton",
        descripcion: "Las tres leyes del movimiento de Newton explicadas con ejemplos de la vida cotidiana y ejercicios.",
        categoria: "ciencias",
        imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        fecha: "12 Mar 2023",
        paginas: 10,
        contenido: "<h3>Primera Ley</h3><p>Ley de la inercia: un objeto en reposo permanece en reposo.</p><h3>Segunda Ley</h3><p>F = m × a: relación entre fuerza, masa y aceleración.</p>"
    },
    {
        id: 8,
        titulo: "Filosofía Griega",
        descripcion: "Pensamiento de Sócrates, Platón y Aristóteles. Fundamentos de la filosofía occidental.",
        categoria: "historia",
        imagen: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        fecha: "25 Ene 2023",
        paginas: 22,
        contenido: "<h3>Sócrates</h3><p>Método socrático y 'solo sé que nada sé'.</p><h3>Platón</h3><p>Teoría de las Ideas y la caverna.</p><h3>Aristóteles</h3><p>Lógica y ética de la virtud.</p>"
    }
];

// Variables globales
let resumenesFiltrados = [...resumenes];
const gridResumenes = document.getElementById('grid-resumenes');
const buscador = document.getElementById('buscador');
const filtroBtns = document.querySelectorAll('.filtro-btn');
const modal = document.getElementById('modal-resumen');
const cerrarModal = document.getElementById('cerrar-modal');

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    // Cargar resúmenes
    renderizarResumenes(resumenes);
    
    // Configurar filtros
    configurarFiltros();
    
    // Configurar buscador
    configurarBuscador();
    
    // Configurar modal
    configurarModal();
    
    // Configurar navegación móvil (si usas el mismo script)
    configurarNavegacionMovil();
});

// Renderizar resúmenes en el grid
function renderizarResumenes(listaResumenes) {
    gridResumenes.innerHTML = '';
    
    if (listaResumenes.length === 0) {
        gridResumenes.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3rem; color: #DEB887; margin-bottom: 20px;"></i>
                <h3 style="color: #5B4513;">No se encontraron resúmenes</h3>
                <p style="color: #5B4513; opacity: 0.8;">Intenta con otros filtros o términos de búsqueda</p>
            </div>
        `;
        return;
    }
    
    listaResumenes.forEach(resumen => {
        const card = document.createElement('div');
        card.className = 'resumen-card';
        card.dataset.id = resumen.id;
        card.dataset.categoria = resumen.categoria;
        
        card.innerHTML = `
            <div class="card-imagen">
                <img src="${resumen.imagen}" alt="${resumen.titulo}" loading="lazy">
                <span class="card-categoria">${obtenerNombreCategoria(resumen.categoria)}</span>
            </div>
            <div class="card-contenido">
                <h3 class="card-titulo">${resumen.titulo}</h3>
                <p class="card-descripcion">${resumen.descripcion}</p>
                <div class="card-meta">
                    <span><i class="far fa-calendar"></i> ${resumen.fecha}</span>
                    <span><i class="far fa-file"></i> ${resumen.paginas} páginas</span>
                </div>
                <div class="card-acciones">
                    <button class="btn-ver" onclick="verResumen(${resumen.id})">
                        <i class="fas fa-eye"></i> Ver Resumen
                    </button>
                    <button class="btn-descargar" onclick="descargarResumen(${resumen.id})">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
        `;
        
        gridResumenes.appendChild(card);
    });
}

// Obtener nombre de categoría legible
function obtenerNombreCategoria(codigo) {
    const categorias = {
        'matematicas': 'Matemáticas',
        'ciencias': 'Ciencias',
        'historia': 'Historia',
        'literatura': 'Literatura',
        'idiomas': 'Idiomas'
    };
    return categorias[codigo] || codigo;
}

// Configurar filtros por categoría
function configurarFiltros() {
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos
            filtroBtns.forEach(b => b.classList.remove('active'));
            
            // Agregar clase active al clickeado
            this.classList.add('active');
            
            const categoria = this.dataset.categoria;
            
            if (categoria === 'todos') {
                resumenesFiltrados = [...resumenes];
            } else {
                resumenesFiltrados = resumenes.filter(resumen => 
                    resumen.categoria === categoria
                );
            }
            
            // Aplicar también el filtro de búsqueda si hay
            if (buscador.value.trim() !== '') {
                resumenesFiltrados = filtrarPorBusqueda(resumenesFiltrados, buscador.value);
            }
            
            renderizarResumenes(resumenesFiltrados);
        });
    });
}

// Configurar buscador
function configurarBuscador() {
    buscador.addEventListener('input', function() {
        const termino = this.value.trim().toLowerCase();
        
        if (termino === '') {
            // Si no hay término, mostrar según filtro activo
            const filtroActivo = document.querySelector('.filtro-btn.active').dataset.categoria;
            
            if (filtroActivo === 'todos') {
                resumenesFiltrados = [...resumenes];
            } else {
                resumenesFiltrados = resumenes.filter(resumen => 
                    resumen.categoria === filtroActivo
                );
            }
        } else {
            // Filtrar por término de búsqueda
            resumenesFiltrados = filtrarPorBusqueda(resumenes, termino);
        }
        
        renderizarResumenes(resumenesFiltrados);
    });
}

// Filtrar por término de búsqueda
function filtrarPorBusqueda(lista, termino) {
    return lista.filter(resumen => 
        resumen.titulo.toLowerCase().includes(termino) ||
        resumen.descripcion.toLowerCase().includes(termino) ||
        obtenerNombreCategoria(resumen.categoria).toLowerCase().includes(termino)
    );
}

// Configurar modal
function configurarModal() {
    // Cerrar modal al hacer clic en la X
    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Ver resumen completo
function verResumen(id) {
    const resumen = resumenes.find(r => r.id === id);
    
    if (!resumen) return;
    
    // Actualizar contenido del modal
    document.getElementById('modal-titulo').textContent = resumen.titulo;
    document.getElementById('modal-meta').innerHTML = `
        <span><i class="far fa-calendar"></i> ${resumen.fecha}</span>
        <span><i class="far fa-file"></i> ${resumen.paginas} páginas</span>
        <span><i class="fas fa-tag"></i> ${obtenerNombreCategoria(resumen.categoria)}</span>
    `;
    document.getElementById('modal-contenido').innerHTML = resumen.contenido;
    
    // Mostrar modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Descargar resumen (función de ejemplo)
function descargarResumen(id) {
    const resumen = resumenes.find(r => r.id === id);
    
    if (!resumen) return;
    
    // Aquí iría la lógica real de descarga
    alert(`Descargando: ${resumen.titulo}\n\n(En una implementación real, esto descargaría el archivo PDF)`);
    
    // Ejemplo de descarga simulada
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${resumen.titulo.toLowerCase().replace(/\s+/g, '-')}.pdf`;
    link.click();
}

// Configurar navegación móvil (si usas el mismo que en index.html)
function configurarNavegacionMovil() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
}

// Función para agregar nuevo resumen (opcional)
function agregarResumen(nuevoResumen) {
    // Generar nuevo ID
    nuevoResumen.id = resumenes.length > 0 ? Math.max(...resumenes.map(r => r.id)) + 1 : 1;
    
    // Agregar a la lista
    resumenes.push(nuevoResumen);
    
    // Volver a renderizar
    const filtroActivo = document.querySelector('.filtro-btn.active').dataset.categoria;
    if (filtroActivo === 'todos' || nuevoResumen.categoria === filtroActivo) {
        resumenesFiltrados.push(nuevoResumen);
        renderizarResumenes(resumenesFiltrados);
    }
}
