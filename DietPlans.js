let databaseB = [
    { id: 1, name: 'Bread-Butter', calorie:250 },
    { id: 2, name: 'Pohe', calorie: 250 },
    { id: 3, name: 'Uppam', calorie: 250 },
    { id: 4, name: 'Coffee', calorie: 100},
    { id: 1, name: 'Tea', calorie: 100},
];
let databaseL = [
    { id: 1, name: 'Bread-Butter', calorie: 30 },
];
let databaseD = [
    { id: 1, name: 'Bread-Butter', calorie: 30 },
];
let databaseS = [
    { id: 1, name: 'Bread-Butter', calorie: 30 },
];
document.addEventListener('DOMContentLoaded', (event) => {
    const openPopupBtn = document.getElementById('my-account-btn');
    const closePopupButton= document.getElementById('closePopupButton');
    const signIn= document.getElementById('signIn');

    openPopupBtn.addEventListener('click', () => {
        signIn.style.display = 'block';
    });

    
    closePopupButton.addEventListener('click', () => {
        signIn.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === signIn) {
            signIn.style.display = 'none';
        }
    });
});