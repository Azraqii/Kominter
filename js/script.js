document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk membuat TOC
    function generateTOC() {
        const mainContent = document.querySelector('.main-content');
        const tocList = document.querySelector('.toc-list');
        if (!mainContent || !tocList) return; // Keluar jika elemen tidak ada

        const headings = mainContent.querySelectorAll('h1, h2, h3');
        tocList.innerHTML = ''; // Kosongkan TOC sebelumnya

        headings.forEach((heading, index) => {
            const id = heading.getAttribute('id') || `section-${index}`;
            heading.setAttribute('id', id);

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = heading.textContent;
            a.href = `#${id}`;

            if (heading.tagName === 'H2') {
                li.style.paddingLeft = '15px';
            } else if (heading.tagName === 'H3') {
                li.style.paddingLeft = '30px';
            }

            li.appendChild(a);
            tocList.appendChild(li);
        });
    }

    // Fungsi untuk menyorot link sidebar
    function highlightSidebarLink() {
        const currentPath = window.location.pathname.split('/').pop();
        const sidebarLinks = document.querySelectorAll('.sidebar-nav ul li a');
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });
    }

    generateTOC();
    highlightSidebarLink();
});