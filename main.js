const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');


// open nav dropdown
const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}
// close nav dropdown
const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);





const sidebar = document.querySelector('aside');
const showSideBarBtn = document.querySelector('#show__sidebar-btn');
const hideSideBarBtn = document.querySelector('#hide__sidebar-btn');

// show sidebar on small devices
const showSidebar = () => {
    sidebar.style.left = '0';
    showSideBarBtn.style.display = 'none';
    hideSideBarBtn.style.display = 'inline-block';
}

// hide sidebar on small devices
const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSideBarBtn.style.display = 'none';
}

showSideBarBtn.addEventListener('click', showSidebar)
hideSideBarBtn.addEventListener('click', hideSidebar)