// script.js

// Required: Course
if (!course) errors.push('Please select a course.');


// Required: Gender
if (!gender) errors.push('Please select your gender.');


const messageArea = $('message');


if (errors.length) {
// Show first error and highlight relevant fields
messageArea.textContent = errors.join(' ');
messageArea.style.color = '#a00';


// Simple visual highlighting for missing fields
if (!fullName) $('fullname').classList.add('input-error');
if (!email || (/^\S+@\S+\.\S+$/.test(email) === false)) $('email').classList.add('input-error');
if (!course) $('course').classList.add('input-error');


// remove error class after 2.5s
setTimeout(() => {
['fullname','email','course'].forEach(id => {
const el = $(id);
if (el) el.classList.remove('input-error');
});
messageArea.style.color = '#222';
}, 2500);


return;
}


// If validation passes, show success and display a summary
messageArea.style.color = '#0a7';
messageArea.textContent = 'Form submitted successfully!';


// Build a small summary (simulate server call)
const hobbies = Array.from(form.querySelectorAll('input[name="hobbies"]:checked')).map(i => i.value);
const summary = {
fullname: fullName,
email: email,
course: course,
gender: gender.value,
hobbies: hobbies,
profileProvided: $('profilePhoto').files.length > 0
};


// Log summary to console (in real app you'd send to server)
console.log('Form Summary ->', summary);


// For demo, show a small alert
alert('Thank you, ' + fullName + '! Your form was submitted (demo).');
form.reset();

