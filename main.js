let themeButton = document.querySelector('.themeButton')  
themeButton.addEventListener('click', () => {
    let body = document.querySelector('body') 
    let header = document.querySelector('header') 
    let overviewHeading = document.querySelector('.overviewHeading') 
    let themeSwitch = document.querySelector('.themeSwitch')
    let socialBoard1 = document.querySelector('.socialsBoard1')
    let socialBoard2 = document.querySelector('.socialsBoard2')
    let socialBoard3 = document.querySelector('.socialsBoard3')
    let socialBoard4 = document.querySelector('.socialsBoard4')
    let socialBoard = [socialBoard1, socialBoard2, socialBoard4];
    let borderGradient3 = document.querySelector('.borderGradient3') 
    let overviewBoard = document.querySelectorAll('.overviewBoard') 
    let followersCount = document.querySelectorAll('.followersCount')
    let viewsCount = document.querySelectorAll('.viewsCount')
    let h1 = document.querySelector('h1')
    if( themeButton.classList.contains('themeButtonDark') ) {
        themeButton.classList.remove('themeButtonDark')
        themeSwitch.classList.remove('themeSwitchDark')
        body.classList.remove('bodyDark')
        header.classList.remove('headerDark')
        overviewHeading.classList.add('overviewHeadingDark')
        socialBoard.forEach(element => {
            element.classList.remove('socialBoardDark')
        });
        socialBoard3.classList.remove('socialBoard3Dark')
        borderGradient3.classList.remove('borderGradient3Dark')
        overviewBoard.forEach(element => {
            element.classList.remove('overviewBoardDark')
        });
        followersCount.forEach( e => {
            e.classList.remove('followersCountDark')
        })
        viewsCount.forEach( e => {
            e.classList.remove('viewsCountDark')
        })
        h1.classList.remove('h1Dark')
    }else {
        themeButton.classList.add('themeButtonDark')
        themeSwitch.classList.add('themeSwitchDark')
        body.classList.add('bodyDark')
        header.classList.add('headerDark')
        overviewHeading.classList.add('overviewHeadingDark')
        socialBoard.forEach(element => {
            element.classList.add('socialBoardDark')
        })
        socialBoard3.classList.add('socialBoard3Dark')
        borderGradient3.classList.add('borderGradient3Dark')
        overviewBoard.forEach(element => {
            element.classList.add('overviewBoardDark')
        });
        followersCount.forEach( e => {
            e.classList.add('followersCountDark')
        })
        viewsCount.forEach( e => {
            e.classList.add('viewsCountDark')
        })
        h1.classList.add('h1Dark')
    }
})