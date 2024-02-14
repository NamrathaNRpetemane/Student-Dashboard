const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})


if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


document.addEventListener("DOMContentLoaded", function() {
   
    const coursesToggle = document.querySelector('.dropdown-toggle');
    const submenu = document.querySelector('.submenu');

    coursesToggle.addEventListener('click', function(e) {
        e.preventDefault(); 

        // Toggle the active class on the submenu
        submenu.classList.toggle('active');

        // Toggle the active class on the toggle icon
        coursesToggle.querySelector('.toggle-icon').classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById('logout-btn');

    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Perform logout actions here, such as clearing session data, etc.
        // For demo purposes, let's simply redirect to the login page
        window.location.href = "login.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const submenu = document.querySelector('.submenu');

    dropdownToggle.addEventListener('click', function() {
        submenu.classList.toggle('active');
        dropdownToggle.querySelector('.toggle-icon').classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const notificationIcon = document.querySelector('.notification');

    notificationIcon.addEventListener('click', function() {
        
        window.location.href = "notification.html";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const attendanceIcon = document.querySelector('.attendance-icon');

    attendanceIcon.addEventListener('click', function(e) {
        e.preventDefault(); 
        window.location.href = "attendance.html";
    });
});



