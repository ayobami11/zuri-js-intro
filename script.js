const setUserDetails = () => {
    const nameOutput = document.getElementById('name');
    const heightOutput = document.getElementById('height');
    const countryOutput = document.getElementById('country');

    const myName = 'Ayobami Tunwase';
    const height = '5ft 11in';
    const country = 'Nigeria';

    nameOutput.innerHTML = myName;
    heightOutput.innerHTML = height;
    countryOutput.innerHTML = country;
}

setUserDetails();
