
// const menu_button = document.querySelector('.mobile-menu-button');
// const sidebar = document.querySelector('.sidebar');

// menu_button.addEventListener('click', ()=>{
//     sidebar.classList.toggle('-translate-x-full');
// })




// INDEX.HTML CODE FOR NAV PROFILE IMAGE DROPDOWN
let profilebtn = document.querySelector('#profilebtn');
        let menulist = document.querySelector('#menulist')

        menulist.style.display = 'none'
        profilebtn.addEventListener('click', ()=>{
            console.log('profilebtn')
            if(menulist.style.display === 'none'){
                menulist.style.display = 'inline'
            }else{
                menulist.style.display = 'none'
            }
        })
        
        // CLOSES MENULIST WHEN YOU CLICK ANYWHERE OUTSIDE
        window.onclick = (e)=>{
            if(e.target.id !== 'profileimg'){
                menulist.style.display = 'none'
            }
        }