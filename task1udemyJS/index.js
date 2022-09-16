function myFirstApp(name, age) {
    alert(`Hello, my name is ${name} and this is my first application!`);

    function showSkills() {
        let skills = ['HTML', 'CSS', 'JAVASCRIPT',];
        for(let i of skills) {
            console.log(`I have the skill: ${i}`);
        }
    }
    showSkills();

    function checkAge(age) {
        if(age >= 18) {
            console.log(`You have chance to become a developer!`);
        }else if(age < 18) {
            console.log(`You have GREAT chance to become a developer!`);
        }else {
            console.log(`Who are you?))`);
            }
    }
    checkAge(age);

    function calcPow(num) {
        return num ** 2;
    }
    console.log(calcPow(4));
    
}
myFirstApp('Uladzimir', 40);