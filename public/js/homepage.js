const newFormHandler = async (event) => {
    event.preventDefault();
  
    const exercise_id = document.querySelector('#exercises').value.trim();
    const day = document.querySelector('#day').value.trim();
  
    if (exercise_id && day) {
      const response = await fetch(`/api/userExercise`, {
        method: 'POST',
        body: JSON.stringify({ exercise_id, day }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Could not find any exercises');
      }
    }
  };
  
  document
    .querySelector('.new-exercise-schedule')
    .addEventListener('submit', newFormHandler);